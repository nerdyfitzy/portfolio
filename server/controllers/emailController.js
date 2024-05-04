import nodemailer from "nodemailer";
import { email as myemail, password, kayleeemail } from "../../env.js";

console.log(myemail, password);

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: myemail,
    pass: password,
  },
  secure: true,
  tls: {
    rejectUnauthorized: true,
  },
  secureConnection: false,
});

export const contact = (req, res) => {
  console.log(req.body);
  const { email, message } = req.body;
  console.log(email, message);

  const mailData = {
    from: myemail,
    to: kayleeemail,
    subject: `${email} is Contacting You Through Your Site`,
    text: message,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ error, email });
    } else {
      res.status(201).send({ email, message_id: info.messageId });
    }
  });
};
