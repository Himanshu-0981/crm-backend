const nodemailer = require("nodemailer");

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const sendVerifyMail = async (name, email) => {
  try {
    const OTP = generateOTP();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "patrick19@ethereal.email",
        pass: "kYAcdBtMT9SvdNvKaP",
      },
    });

    const info = await transporter.sendMail({
      from: "Himanshu <kumarhimanshu2219@gmail.com>",
      to: email,
      subject: "For verification mail",
      text: `Your verification code is: ${OTP}`,
      html: `<p>Hi ${name} , please enter the following OTP to verify your email: <strong>${OTP}</strong></p>`,
    });
    transporter.sendMail(info, (err, info) => {
      if (err) {
        console.log("Error sending email", err.message);
      } else {
        console.log("Email has been sent successfully", info.response);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendVerifyMail;
