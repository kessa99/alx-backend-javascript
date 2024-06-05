const fs = require('fs');

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    const lines = data.trim().split('\n');
    const fieldsObj = {};

    for (let i = 1; i < lines.length; i += 1) {
      const row = lines[i].split(',');
      const name = row[0];
      const field = row[3];

      if (!fieldsObj[field]) {
        fieldsObj[field] = [];
      }
      fieldsObj[field].push(name);
    }
    resolve(fieldsObj);
  });
});

module.exports = readDatabase;
