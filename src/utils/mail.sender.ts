import nodemailer from 'nodemailer';
import Decimal from 'decimal.js';
import { envConfig } from '../config';

export default class MailSender {
  static async sendMail(receiver: string, threshold: number, gasPrice: Decimal): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'mail.ru',
      auth: {
        user: envConfig.MAIL_USERNAME,
        pass: envConfig.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: envConfig.MAIL_USERNAME,
      to: receiver,
      subject: 'Currency notification',
      text: `Your threshold: ${threshold} is lower than current gas price: ${gasPrice}`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.error(err);
    }
  }
}
