const process = require('node:process');
process.stdout.write('Welcome to Hoblberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});