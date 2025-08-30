const emailTemplate = (data: {
  name: string;
  email: string;
  phone: string;
  phoneCountry: string;
  package: string;
  message: string;
}) => `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>새로운 상담문의</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa;">
        <tr>
            <td align="center" style="padding: 20px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="text-align: center; padding: 30px 30px 20px 30px; border-bottom: 3px solid #8b5cf6;">
                            <div style="font-size: 24px; font-weight: bold; color: #8b5cf6; margin-bottom: 10px;">🏗️ Code King Builder</div>
                            <div style="font-size: 20px; font-weight: bold; color: #1f2937; margin-bottom: 5px;">새로운 상담문의가 접수되었습니다</div>
                            <div style="color: #6b7280; font-size: 14px;">웹사이트 제작 문의</div>
                        </td>
                    </tr>

                    <!-- Contact Information Section -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <div style="font-weight: bold; color: #1f2937; margin-bottom: 15px; font-size: 16px;">📋 문의자 정보</div>
                                        
                                        <table width="100%" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="50%" style="padding-right: 10px; vertical-align: top;">
                                                    <div style="margin-bottom: 15px;">
                                                        <div style="font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">이름</div>
                                                        <div style="color: #1f2937; font-size: 14px; margin-top: 2px;">${data.name}</div>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding-left: 10px; vertical-align: top;">
                                                    <div style="margin-bottom: 15px;">
                                                        <div style="font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">이메일</div>
                                                        <div style="color: #1f2937; font-size: 14px; margin-top: 2px;">${data.email}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="50%" style="padding-right: 10px; vertical-align: top;">
                                                    <div style="margin-bottom: 15px;">
                                                        <div style="font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">전화번호</div>
                                                        <div style="color: #1f2937; font-size: 14px; margin-top: 2px;">${data.phoneCountry} ${data.phone}</div>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding-left: 10px; vertical-align: top;">
                                                    <div style="margin-bottom: 15px;">
                                                        <div style="font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">선택한 패키지</div>
                                                        <div style="color: #1f2937; font-size: 14px; margin-top: 2px;">
                                                            <span style="display: inline-block; padding: 4px 8px; background-color: #10b981; color: white; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase;">${data.package}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Message Section -->
                    <tr>
                        <td style="padding: 0 30px 20px 30px;">
                            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <div style="font-weight: bold; color: #1f2937; margin-bottom: 15px; font-size: 16px;">💬 문의 내용</div>
                                        <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${data.message}</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="text-align: center; padding: 20px 30px 30px 30px; border-top: 1px solid #e5e7eb;">
                            <div style="color: #6b7280; font-size: 12px; margin-bottom: 10px;">
                                이 이메일은 Code King Builder 상담문의 시스템에서 자동으로 발송되었습니다.
                            </div>
                            <div style="color: #6b7280; font-size: 12px; margin-bottom: 15px;">
                                문의자에게 빠른 시일 내에 연락드리시기 바랍니다.
                            </div>
                            <div style="margin-top: 15px;">
                                <strong style="color: #1f2937;">Code King Builder</strong><br>
                                📧 codeking@codekingbuilder.com<br>
                                📱 010-4292-9339
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;

export default emailTemplate;
