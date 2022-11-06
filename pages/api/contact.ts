import dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

dotenv.config();

interface Form {
  name: string;
  email: string;
  message: string;
  subject: string;
  company: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, subject, company } = req.body as Form;
  const password = process.env.password;
  const sender = process.env.sender;
  const receiver = process.env.receiver;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: sender,
      pass: password,
    },
    secure: true,
  });

  const mailData = {
    from: sender,
    to: receiver,
    subject: subject,
    text: message,
    html: `<div>
        <h1>Message from ${name}</h1>
        ${company ? `<p>Company: ${company}</p>` : "No company mentioned"}
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).json({ message: "success" });
}
