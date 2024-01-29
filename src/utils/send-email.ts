import * as nodemailer from "nodemailer";

export async function forgetEmail(userEmail: any, subject: any) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "elmentor404@gmail.com", //your email and password of the owner of website aka **sender** from .env
        pass: "kkhl uspk clse rhoy", //password after two step verification from .env
      },
    });
    const mailOptions = {
      from: "elmentor404@gmail.com", //sender from .env
      to: userEmail,
      subject: "Auth code",
      text: `<h1> ${subject} </h1>`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("info response = " + info.response);
  } catch (err) {
    console.log("Error in Email Service : ", err);
  }
}
