import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, role, services, goals } = body;

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Vidovermedia Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `🔔 New Contact Form Submission from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .badge { display: inline-block; padding: 5px 10px; background: #667eea; color: white; border-radius: 5px; font-size: 12px; margin: 2px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
              <p>Someone wants to work with Vidovermedia!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email Address</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">💼 Role</div>
                <div class="value">${role || "Not specified"}</div>
              </div>
              
              <div class="field">
                <div class="label">🎯 Services Interested In</div>
                <div class="value">
                  ${services && services.length > 0 
                    ? services.map((s: string) => `<span class="badge">${s}</span>`).join(" ")
                    : "Not specified"
                  }
                </div>
              </div>
              
              <div class="field">
                <div class="label">📝 Goals / Message</div>
                <div class="value">${goals || "No message provided"}</div>
              </div>
              
              <div class="field">
                <div class="label">🕐 Submitted At</div>
                <div class="value">${new Date().toLocaleString("en-US", { 
                  dateStyle: "full", 
                  timeStyle: "long" 
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Vidovermedia contact form</p>
              <p>Reply directly to this email to contact: ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email, // Allow direct reply to the client
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully to:", process.env.EMAIL_TO);

    return NextResponse.json(
      { message: "Form submitted successfully! We'll get back to you within 24-48 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
