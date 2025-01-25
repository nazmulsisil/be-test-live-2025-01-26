import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const transporter = nodemailer.createTransport({
  streamTransport: true,
  newline: "unix",
  buffer: true,
});

const sendEmail = async (email: string, subject: string, content: string) => {
  const mailOptions = {
    from: "no-reply@example.com",
    to: email,
    subject: subject,
    text: content,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email content:\n", info.message.toString());
};

export const verifyEmail = async (email: string) => {
  const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  try {
    await sendEmail(
      email,
      "Verify Your Email",
      `Please verify your email using this token: ${verificationToken}`
    );
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send verification email");
  }
};
