export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = false;
    task2 = true;
    if (task && task2) {
      return [task, task2];
    }
  }

  return [task, task2];
}
