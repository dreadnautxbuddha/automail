import * as fs from 'fs';
import * as mock from 'mock-fs';
import { expect, test } from '@oclif/test';

describe('config:create', () => {

  beforeEach(() => {
    mock({
      'path/to/config/file': mock.directory({
        mode: 755,
      })
    });
  });

  afterEach(() => {
    mock.restore();
  });

  test
    .stderr()
    .command(['config:create', '/invalid/path/to/output/file'])
    .catch(ctx => {
      expect(ctx.message)
        .to
        .equal('No such file or directory /invalid/path/to/output/file');
    })
    .it('should show an error message when dir to path does not exist');

  test
    .stderr()
    .command(['config:create', 'path/to/config/file/config.json'])
    .it('should copy the template file to the given path', ctx => {
      // expect(fs.existsSync('path/to/config/file/config.json')).to.be.true;
    });
});
