import { NextRequest, NextResponse } from "next/server";
import { EmailService, ContactFormData } from "@/lib/email-service";
import { DiscordService } from "@/lib/discord-service";

// Google Apps Script 직접 호출 함수
async function callGoogleAppsScript(data: ContactFormData) {
  const webAppUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBAPP_URL;

  if (!webAppUrl) {
    console.log("⚠️ Google Apps Script Web App URL이 설정되지 않았습니다.");
    return { success: true, rowNumber: "webapp_not_configured" };
  }

  try {
    const payload = {
      action: "saveContact",
      data: {
        name: data.name,
        email: data.email,
        phone: `${data.phoneCountry} ${data.phone}`,
        package: data.package,
        message: data.message,
      },
    };

    const response = await fetch(webAppUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "Google Apps Script 응답 오류:",
        response.status,
        errorText
      );
      throw new Error(
        `Google Apps Script API error: ${response.status} - ${errorText}`
      );
    }

    const result = await response.json();

    if (result.success) {
      console.log("📊 Google Sheets 저장 성공:", result.rowNumber);
      return {
        success: true,
        rowNumber: result.rowNumber,
      };
    } else {
      throw new Error(result.error || "Google Sheets 저장 실패");
    }
  } catch (error) {
    console.error("📊 Google Sheets 저장 실패:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "알 수 없는 오류",
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      phoneCountry,
      package: selectedPackage,
      message,
    } = body;

    // 폼 데이터 검증
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "필수 정보가 누락되었습니다.",
        },
        { status: 400 }
      );
    }

    const contactData: ContactFormData = {
      name,
      email,
      phone,
      phoneCountry,
      package: selectedPackage,
      message,
    };

    // 서비스 인스턴스 생성
    const emailService = EmailService.getInstance();
    const discordService = DiscordService.getInstance();

    // 이메일, Discord 알림, Google Sheets 저장 동시 처리
    const [emailResult, discordResult, sheetsResult] = await Promise.all([
      emailService.sendContactNotification(contactData),
      discordService.sendNotification(contactData),
      callGoogleAppsScript(contactData),
    ]);

    // 결과 처리
    if (emailResult.success && discordResult.success && sheetsResult.success) {
      return NextResponse.json({
        success: true,
        message:
          "상담문의가 성공적으로 접수되었습니다. 이메일, Discord 알림, Google Sheets 저장이 완료되었습니다.",
        emailId: emailResult.messageId,
        discordId: discordResult.messageId,
        sheetRowNumber: sheetsResult.rowNumber,
      });
    } else {
      const errors = [];
      if (!emailResult.success) errors.push(`이메일: ${emailResult.error}`);
      if (!discordResult.success)
        errors.push(`Discord: ${discordResult.error}`);
      if (!sheetsResult.success)
        errors.push(`Google Sheets: ${sheetsResult.error}`);

      return NextResponse.json(
        {
          success: false,
          message: `일부 처리에 실패했습니다: ${errors.join(", ")}`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("상담문의 처리 중 오류:", error);
    return NextResponse.json(
      {
        success: false,
        message: "상담문의 처리 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}
