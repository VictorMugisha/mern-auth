import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

const client = new MailtrapClient({ enpoint: ENDPOINT, token: TOKEN });

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Victor Mugisha",
};

const recipients = [
  {
    email: "victormugishavm6@gmail.com  ",
  },
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesoem!",
    text: "Congrats on trying to send test email with mailtrap!!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
