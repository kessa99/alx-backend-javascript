const process = require('node:process');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`)
  }
});

process.stdin.on('close', () => {
  process.stdout.write('this important softawre is now closing\n');
});