import assert from 'node:assert';
import { describe, it } from 'node:test';

import ffprobePath from './index.js';

describe(
  'Path loading test',
  () => {
    it(
      'Should get the path of the installed binaries',
      () => {
        assert.ok(ffprobePath);
        assert.ok(typeof ffprobePath === 'string');
      },
    );
  },
);
