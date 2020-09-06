import cron from 'cron-validate';
import { Command } from '@oclif/command'
import { args } from '@oclif/parser/lib';
import { Configuration } from '../../types/configuration';

export default class Read extends Command {
  static examples: string[] = [];

  static args: args.Input = [
    {
      name: 'path',
      description: 'Reads and runs the configuration at the given path',
    },
  ];

  /**
   * {@inheritdoc}
   */
  async run() {
    const { args } = this.parse(Read);
    console.log(args);
  }
}
