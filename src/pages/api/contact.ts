import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // 🔑 Configure transporter with your SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,      // ex: smtp.hostinger.com
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,   // ex: info@digicombi.com
        pass: process.env.SMTP_PASS,   // your mailbox password
      },
    });

    // 📧 Send mail
    await transporter.sendMail({
      from: `"Digicombi Contact" <${process.env.SMTP_USER}>`,
      to: "info@digicombi.com",
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Message: ${message}
      `,
      html: `
        <h3>New contact request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully ✅" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send message ❌" });
  }
}
