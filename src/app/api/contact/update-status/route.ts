import { NextRequest, NextResponse } from "next/server";
import { GoogleSheetsService } from "@/lib/google-sheets-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rowId, status } = body;

    // 필수 필드 검증
    if (!rowId || !status) {
      return NextResponse.json(
        {
          success: false,
          message: "rowId와 status가 필요합니다.",
        },
        { status: 400 }
      );
    }

    // 상태 옵션 검증
    const validStatuses = [
      "신규",
      "상담중",
      "견적제출",
      "계약완료",
      "진행중",
      "완료",
      "취소",
    ];

    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: `유효하지 않은 상태입니다. 허용된 상태: ${validStatuses.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // Google Sheets 서비스 인스턴스 생성
    const sheetsService = GoogleSheetsService.getInstance();

    // 상태 업데이트
    const result = await sheetsService.updateStatus(rowId, status);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "상태가 성공적으로 업데이트되었습니다.",
        rowId: rowId,
        newStatus: status,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: `상태 업데이트 실패: ${result.error}`,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("상태 업데이트 처리 중 오류:", error);
    return NextResponse.json(
      {
        success: false,
        message: "상태 업데이트 처리 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}
