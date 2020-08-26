import { NodeMailerConfig } from './nodemailer-config';

export type Configuration = {
  /**
   * The name of the automatic-emailing job. This must be unique in order to not have
   * conflicts with other emailing jobs.
   *
   * @type {String}
   */
  name: string;

  /**
   * A cron job schedule.
   *
   * @see {@link https://github.com/node-cron/node-cron}
   *
   * @type {String}
   */
  schedule: string;

  /**
   * NodeMailer configuration
   *
   * @type {NodeMailerConfig}
   */
  nodemailer: NodeMailerConfig;
}
