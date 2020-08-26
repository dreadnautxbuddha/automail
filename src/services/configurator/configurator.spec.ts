import { expect } from "chai";
import Configurator from './configurator';

describe('configurator', () => {
  describe('name validation', () => {
    it('should throw error when no name is set', () => {
      let config = {
        name: '',
        schedule: '* * * * *',
        nodemailer: {
          transportOptions: {},
          mailOptions: {},
        },
      };

      expect(() => new Configurator([config]))
        .to
        .throw('Configuration name missing.');
    });

    it('should throw error when name is not unique', () => {
      let configs = [
        {
          name: 'My Configuration',
          schedule: '* * * * *',
          nodemailer: {
            transportOptions: {},
            mailOptions: {},
          },
        },
        {
          name: 'My Configuration',
          schedule: '* * * * *',
          nodemailer: {
            transportOptions: {},
            mailOptions: {},
          },
        }
      ];

      expect(() => new Configurator(configs))
        .to
        .throw('A configuration named "My Configuration" is already registered.');
    });
  });

  describe('schedule validation', () => {
    it('should throw error when invalid schedule is provided', () => {
      let config = {
        name: 'My Configuration',
        schedule: 'invalid-schedule',
        nodemailer: {
          transportOptions: {},
          mailOptions: {},
        },
      };

      expect(() => new Configurator([config]))
        .to
        .throw('"My Configuration" has an invalid schedule.');
    });
  });
});
