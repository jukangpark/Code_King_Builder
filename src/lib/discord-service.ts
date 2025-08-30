export interface DiscordNotificationData {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  package: string;
  message: string;
}

export class DiscordService {
  private static instance: DiscordService;
  private webhookUrl: string;

  private constructor() {
    this.webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL!;
  }

  public static getInstance(): DiscordService {
    if (!DiscordService.instance) {
      DiscordService.instance = new DiscordService();
    }
    return DiscordService.instance;
  }

  // Discord 웹훅으로 알림 전송
  async sendNotification(
    data: DiscordNotificationData
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      if (!this.webhookUrl) {
        console.log("⚠️ Discord 웹훅 URL이 설정되지 않았습니다.");
        return { success: true, messageId: "webhook_not_configured" };
      }

      const embed = {
        title: "🏗️ 새로운 상담문의가 접수되었습니다",
        color: 0x8b5cf6, // 보라색
        thumbnail: {
          url: "https://www.codekingbuilder.com/codekingbuilder.png", // Code King Builder 로고
        },
        fields: [
          {
            name: "👤 문의자 정보",
            value: `**이름:** ${data.name}\n**이메일:** ${data.email}\n**전화번호:** ${data.phoneCountry} ${data.phone}\n**선택한 패키지:** ${data.package}`,
            inline: false,
          },
          {
            name: "💬 문의 내용",
            value:
              data.message.length > 1000
                ? data.message.substring(0, 1000) + "..."
                : data.message,
            inline: false,
          },
        ],
        footer: {
          text: "Code King Builder 상담문의 시스템",
          icon_url: "https://www.codekingbuilder.com/codekingbuilder.png",
        },
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(this.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "Code King Builder",
          avatar_url: "https://www.codekingbuilder.com/codekingbuilder.png",
          embeds: [embed],
        }),
      });

      if (!response.ok) {
        throw new Error(`Discord API error: ${response.status}`);
      }

      console.log("📱 Discord 알림 전송 성공");
      return {
        success: true,
        messageId: `discord_${Date.now()}`,
      };
    } catch (error) {
      console.error("📱 Discord 알림 전송 실패:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "알 수 없는 오류",
      };
    }
  }
}
