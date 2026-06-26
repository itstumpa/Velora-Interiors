import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const emailHost = (process.env.EMAIL_HOST || "smtp.gmail.com").trim();
    const emailUser = (process.env.EMAIL_USER || "").trim();
    const emailPass = (process.env.EMAIL_PASS || "").trim();
    const emailFrom = (process.env.EMAIL_FROM || "Velora Interiors").trim();
    const emailPort = Number(process.env.EMAIL_PORT) || 587;

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"${emailFrom}" <${emailUser}>`,
      to: emailUser, // Send to yourself
      replyTo: email,
      subject: `New Inquiry from ${name} — Velora Interiors`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Inter', Arial, sans-serif; background: #FAF7F2; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
            .header { background: #1F1F1F; padding: 32px 40px; text-align: center; }
            .header h1 { color: #C9B79C; font-family: 'Playfair Display', Georgia, serif; margin: 0; font-size: 24px; letter-spacing: 0.5px; }
            .header p { color: #FAF7F2; margin: 6px 0 0; font-size: 13px; opacity: 0.7; }
            .body { padding: 32px 40px; }
            .field { margin-bottom: 20px; }
            .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6B6B6B; font-weight: 600; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #1F1F1F; line-height: 1.5; }
            .divider { height: 1px; background: #F5F0E8; margin: 24px 0; }
            .message-box { background: #FAF7F2; border-left: 3px solid #C9B79C; padding: 16px 20px; border-radius: 0 4px 4px 0; }
            .message-box p { margin: 0; font-size: 14px; line-height: 1.7; color: #2D2D2D; }
            .footer { background: #FAF7F2; padding: 20px 40px; text-align: center; font-size: 12px; color: #6B6B6B; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✦ New Contact Inquiry</h1>
              <p>Velora Interiors — Client Inquiry</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${
                phone
                  ? `
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value">${phone}</div>
              </div>
              `
                  : ""
              }
              ${
                projectType
                  ? `
              <div class="field">
                <div class="field-label">Project Type</div>
                <div class="field-value" style="text-transform: capitalize;">${projectType}</div>
              </div>
              `
                  : ""
              }
              <div class="divider"></div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">
                  <p>${message.replace(/\n/g, "<br>")}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              Sent via Velora Interiors website contact form
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
