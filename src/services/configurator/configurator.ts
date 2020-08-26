import { Configuration } from './types/configuration';
import cron from 'cron-validate';

export default class Configurator {

  /**
   * A list of configuration names that have been registered to the configurator.
   *
   * @type {String[]}
   */
  protected configNames: string[] = [];

  constructor(protected config: Configuration[]) {
    this.config.forEach(_config => this.validate(_config));
  }

  /**
   * Validates the given configuration to ensure that it meets the requirements.
   *
   * @param config
   *
   * @returns {void}
   */
  protected validate(config: Configuration): void {
    let name = config.name;

    if (name.trim() === '') {
      throw new Error('Configuration name missing.');
    } else if (this.configNames.includes(name)) {
      throw new Error(
        `A configuration named "${name}" is already registered.`
      );
    } else if (cron(config.schedule).isError()) {
      throw new Error(`"${name}" has an invalid schedule.`);
    } else {
      this.configNames.push(name);
    }
  }
}
