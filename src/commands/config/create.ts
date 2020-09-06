import * as fs from 'fs';
import { Command } from '@oclif/command';
import { args } from '@oclif/parser/lib';

export default class Create extends Command {

  static description: string = `
    Creates a template AutoMail configuration file at the given path
  `;

  static examples: string[] = [
    `$ automail config:create ~/Desktop/automail/template.json
Template file created in ~/Desktop/automail/template.json
`,
  ];

  static args: args.Input = [
    {
      name: 'path',
      description: 'A path where the template config file is supposed to be put',
      required: true,
    },
  ];

  /**
   * {@inheritdoc}
   */
  async run() {
    let { path } = this.parse().args;

    // if (fs.existsSync(path) === false) {
      this.error(`No such file or directory ${path}`);
    // }
  }
}
