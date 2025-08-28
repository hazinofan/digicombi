// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_FROM",
  "CONTACT_TO",
] as const;

requiredEnv.forEach((k) => {
  if (!process.env[k]) console.warn(`[contact] Missing env var: ${k}`);
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: String(process.env.SMTP_SECURE) !== "false", // 465 => true
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    // Log the incoming payload (safe; no secrets here)
    console.log("[contact] Incoming body:", req.body);

    const { name, email, phone, subject, message } = req.body || {};

    // minimal validation
    if (!name || !email || !subject || !message) {
      console.warn("[contact] Missing required fields");
      return res.status(400).json({ ok: false, message: "Champs requis manquants." });
    }

    const text = `Nouveau message depuis le formulaire Digicombi
------------------------------------------------
Nom: ${name}
Email: ${email}
Téléphone: ${phone || "-"}
Sujet: ${subject}

Message:
${message}
`;

    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM, // your mailbox
      to: process.env.CONTACT_TO,     // recipient (often same mailbox)
      replyTo: email,
      subject: `Contact: ${subject}`,
      text,
    });

    // ✅ success log
    console.log("[contact] ✅ Mail sent", {
      messageId: info.messageId,
      response: info.response,
      to: process.env.CONTACT_TO,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    // ❌ failure log
    console.error("[contact] ❌ Mail failed", {
      name: err?.name,
      code: err?.code,
      message: err?.message,
      stack: err?.stack,
    });
    return res.status(500).json({ ok: false, message: "Erreur d’envoi du mail." });
  }
}
