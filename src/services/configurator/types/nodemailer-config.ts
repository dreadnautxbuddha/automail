import { Options as MailOptions } from 'nodemailer/lib/mailer';
import SMTPTransport, { Options as SMTPTransportOptions } from 'nodemailer/lib/smtp-transport';

export type NodeMailerConfig = {
  /**
   * Nodemailer transport options
   *
   * @type {SMTPTransport | SMTPTransportOptions | string}
   */
  transportOptions: SMTPTransport | SMTPTransportOptions | string;

  /**
   * Nodemailer mailing options
   *
   * @type {MailOptions}
   */
  mailOptions: MailOptions;
}
