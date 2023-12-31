import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequest {
  name: string;
  email: string;
  description: string;
}

export const POST = async (req: NextRequest) => {
  const body: EmailRequest = await req.json();
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailDetails = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `[Personal Website] ${body.name} reaching out`,
    text: `${body.description}\n\nSent from ${body.email}`,
  };

  return new Response(
    JSON.stringify({
      success: true,
      data: await mailTransporter.sendMail(emailDetails),
    })
  );
};
