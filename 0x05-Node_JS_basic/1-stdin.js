process.stdout.write('Welcome to Hoblberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  } else {
    process.stdin.emit('end');
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
