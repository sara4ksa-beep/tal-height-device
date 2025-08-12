import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, phone } = await request.json();

    // إنشاء transporter باستخدام Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // بريدك الإلكتروني
        pass: process.env.GMAIL_APP_PASSWORD, // كلمة مرور التطبيق
      },
    });

    // إعداد الرسالة
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // سيتم إرسال الرسالة إلى بريدك
      subject: `رسالة جديدة من ${name} - جهاز TAL`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px; text-align: center;">رسالة جديدة من موقع TAL</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">الاسم:</strong>
              <span style="margin-right: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">البريد الإلكتروني:</strong>
              <span style="margin-right: 10px;">${email}</span>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">رقم الهاتف:</strong>
              <span style="margin-right: 10px;">${phone}</span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">الرسالة:</strong>
              <p style="margin-top: 10px; line-height: 1.6; color: #4b5563;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280;">
              <small>تم إرسال هذه الرسالة من نموذج الاتصال في موقع TAL</small>
            </div>
          </div>
        </div>
      `,
    };

    // إرسال الرسالة
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'تم إرسال الرسالة بنجاح!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('خطأ في إرسال الرسالة:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    );
  }
}
