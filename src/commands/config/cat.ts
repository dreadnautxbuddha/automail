import { Command } from '@oclif/command'
import { args } from '@oclif/parser/lib';

export default class Cat extends Command {
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
    const { args } = this.parse(Cat);
    console.log(args);
  }
}
