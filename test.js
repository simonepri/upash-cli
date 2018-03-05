import test from 'ava';
import execa from 'execa';
import argon2 from '@upash/argon2';
import scrypt from '@upash/scrypt';
import bcrypt from '@upash/bcrypt';
import pbkdf2 from '@upash/pbkdf2';

test('should hash with argon2', async t => {
  const result = await execa('./cli.js', ['hash', 'argon2', 'Hello World']);
  const match = await argon2.verify(result.stdout, 'Hello World');
  t.true(match);
});

test('should verify with argon2', async t => {
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

test('should hash with scrypt', async t => {
  const result = await execa('./cli.js', ['hash', 'scrypt', 'Hello World']);
  const match = await scrypt.verify(result.stdout, 'Hello World');
  t.true(match);
});

test('should verify with scrypt', async t => {
  const hash = await scrypt.hash('Hello World');
  const result = await execa('./cli.js', [
    'verify',
    'scrypt',
    hash,
    'Hello World',
  ]);
  const match = result.stdout;
  t.is(match, 'true');
});

test('should hash with bcrypt', async t => {
  const result = await execa('./cli.js', ['hash', 'bcrypt', 'Hello World']);
  const match = await bcrypt.verify(result.stdout, 'Hello World');
  t.true(match);
});

test('should verify with bcrypt', async t => {
  const hash = await bcrypt.hash('Hello World');
  const result = await execa('./cli.js', [
    'verify',
    'bcrypt',
    hash,
    'Hello World',
  ]);
  const match = result.stdout;
  t.is(match, 'true');
});

test('should hash with pbkdf2', async t => {
  const result = await execa('./cli.js', ['hash', 'pbkdf2', 'Hello World']);
  const match = await pbkdf2.verify(result.stdout, 'Hello World');
  t.true(match);
});

test('should verify with pbkdf2', async t => {
  const hash = await pbkdf2.hash('Hello World');
  const result = await execa('./cli.js', [
    'verify',
    'pbkdf2',
    hash,
    'Hello World',
  ]);
  const match = result.stdout;
  t.is(match, 'true');
});
