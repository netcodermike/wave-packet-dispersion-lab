import assert from 'node:assert/strict';
import { velocities, sample } from './app.mjs';
assert.deepEqual(velocities(2,.25),{phase:.5,group:1});
assert.equal(sample(2,2,2,.25).envelope,1);
assert.ok(sample(4,2,2,.25).envelope<1);
assert.deepEqual(sample(0,0,2,.25),{envelope:1,signal:1});
