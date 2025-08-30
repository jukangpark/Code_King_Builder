import { NextRequest, NextResponse } from "next/server";
import { EmailService, ContactFormData } from "@/lib/email-service";
import { DiscordService } from "@/lib/discord-service";

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

    // 이메일과 Discord 서비스 인스턴스 생성
    const emailService = EmailService.getInstance();
    const discordService = DiscordService.getInstance();

    // 이메일과 Discord 알림 동시 전송
    const [emailResult, discordResult] = await Promise.all([
      emailService.sendContactNotification(contactData),
      discordService.sendNotification(contactData),
    ]);

    // 결과 처리
    if (emailResult.success && discordResult.success) {
      return NextResponse.json({
        success: true,
        message:
          "상담문의가 성공적으로 접수되었습니다. 이메일과 Discord 알림이 전송되었습니다.",
        emailId: emailResult.messageId,
        discordId: discordResult.messageId,
      });
    } else {
      const errors = [];
      if (!emailResult.success) errors.push(`이메일: ${emailResult.error}`);
      if (!discordResult.success)
        errors.push(`Discord: ${discordResult.error}`);

      return NextResponse.json(
        {
          success: false,
          message: `일부 전송에 실패했습니다: ${errors.join(", ")}`,
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
