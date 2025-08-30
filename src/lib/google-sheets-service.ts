export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  package: string;
  message: string;
}

export class GoogleSheetsService {
  private static instance: GoogleSheetsService;
  private webAppUrl: string;

  private constructor() {
    this.webAppUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBAPP_URL!;
  }

  public static getInstance(): GoogleSheetsService {
    if (!GoogleSheetsService.instance) {
      GoogleSheetsService.instance = new GoogleSheetsService();
    }
    return GoogleSheetsService.instance;
  }

  async saveToSheet(
    data: ContactFormData
  ): Promise<{ success: boolean; rowId?: string; error?: string }> {
    try {
      if (!this.webAppUrl) {
        console.log("⚠️ Google Apps Script Web App URL이 설정되지 않았습니다.");
        return { success: true, rowId: "webapp_not_configured" };
      }

      const payload = {
        action: "saveContact",
        data: {
          timestamp: new Date().toISOString(),
          name: data.name,
          email: data.email,
          phone: `${data.phoneCountry} ${data.phone}`,
          package: data.package,
          message: data.message,
          status: "신규",
        },
      };

      const response = await fetch(this.webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Google Apps Script API error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        console.log("📊 Google Sheets 저장 성공:", result.rowId);
        return {
          success: true,
          rowId: result.rowId,
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

  async updateStatus(
    rowId: string,
    status: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      if (!this.webAppUrl) {
        return { success: true };
      }

      const payload = {
        action: "updateStatus",
        rowId: rowId,
        status: status,
      };

      const response = await fetch(this.webAppUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Google Apps Script API error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        console.log("📊 상태 업데이트 성공:", status);
        return { success: true };
      } else {
        throw new Error(result.error || "상태 업데이트 실패");
      }
    } catch (error) {
      console.error("📊 상태 업데이트 실패:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "알 수 없는 오류",
      };
    }
  }
}
