# NodeJs Basic

## 1-EXECUTING BASIC JAVASCRIPT WITH NODEJS
* print with STDOUT 
```javascript
function displayMessage(msg) {
  process.sdtout.write(msg + '\n')
}
```

* print with console.log
```javascript
function displayMessage(msg) {
  console.log(msg);
}
```

* print with arrow function
```javascript
const displayMessage = (msg) => {
  return console.log(msg);
}
```
*  for test 
```javascript
npx eslint 0-console.js
```

* for fix simple test 
```javascript
npx elsint 0-console.js --fix
```

## 2- USING PROCESS STDIN
```javascript
// diplay message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// the user should be able to imput their name on a new line

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write('Your name is: ${name}');
  }
});

//when the user ends the program
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
```
