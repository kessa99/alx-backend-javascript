# NodeJs Basic

## Excecuting basic Javascript with NodeJs
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
