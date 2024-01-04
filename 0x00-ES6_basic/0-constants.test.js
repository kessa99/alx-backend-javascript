#!/usr/bin/env node
import { taskFirst, taskNext } from './0-constants.js';

test('tasks are correctly defined and used', () => {
  const result = `${taskFirst()} ${taskNext()}`;
  expect(result).toEqual('I prefer const when I can. But sometimes let is okay');
});
