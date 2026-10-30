import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatEuro } from '../site/lib/format.js';

test('formats a whole amount in euros', () => {
  const out = formatEuro(1250, 'en-IE');
  assert.match(out, /€1,250\.00/);
});

test('keeps two decimals', () => {
  assert.match(formatEuro(0.5, 'en-IE'), /€0\.50/);
});

test('rejects values that are not numbers', () => {
  assert.throws(() => formatEuro(NaN), TypeError);
  assert.throws(() => formatEuro(Infinity), TypeError);
});

test('uses European Portuguese format by default', () => {
  assert.match(formatEuro(1250), /^1250,00\s€$/);
  assert.match(formatEuro(0), /^0,00\s€$/);
  assert.match(formatEuro(-3.5), /^-3,50\s€$/);
});
