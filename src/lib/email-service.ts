import nodemailer from "nodemailer";
import emailTemplate from "./emailTemplate";

// Gmail SMTP 설정
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_USER!,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD!,
    },
  });
};

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  package: string;
  message: string;
}

export class EmailService {
  private static instance: EmailService;
  private transporter: nodemailer.Transporter;

  private constructor() {
    this.transporter = createTransporter();
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendContactNotification(
    data: ContactFormData
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const emailHtml = emailTemplate(data);

      const mailOptions = {
        from: process.env.GMAIL_USER || "codeking@codekingbuilder.com",
        to: "codeking@codekingbuilder.com",
        subject: `[상담문의] ${data.name}님의 문의`,
        html: emailHtml,
        replyTo: data.email,
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log("📧 이메일 전송 성공:", result.messageId);

      return {
        success: true,
        messageId: result.messageId,
      };
    } catch (error) {
      console.error("📧 이메일 전송 실패:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "알 수 없는 오류",
      };
    }
  }
}
