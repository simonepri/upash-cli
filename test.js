import test from 'ava';
import execa from 'execa';
import argon2 from '@upash/argon2';

test('should hash', async t => {
  const result = await execa('./cli.js', ['hash', 'argon2', 'Hello World']);
  const match = await argon2.verify(result.stdout, 'Hello World');
  t.true(match);
});

test('should verify', async t => {
  const hash = await argon2.hash('Hello World');
  const result = await execa('./cli.js', [
    'verify',
    'argon2',
    hash,
    'Hello World',
  ]);
  const match = result.stdout;
  t.is(match, 'true');
});
