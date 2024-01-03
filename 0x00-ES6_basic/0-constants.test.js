#!/usr/bin/env node
const { taskFirst, taskNext } = require('./0-constants.js');

test('use const not var', () => {
  const result = taskFirst();
  expect(result).toBe('I prefer const when I can.');
});
test('use let not var', () => {
  const result = taskNext();
  expect(result).toBe('But sometimes let is okay');
});
