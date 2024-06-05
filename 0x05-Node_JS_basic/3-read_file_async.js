const fs = require('fs');

const { resolve } = require('path');

const  countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (firstname && field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }
      });

      const fields = Object.keys(students);
      let result = `Number of students: ${lines.ength - 1}\n`;
      fields.forEach((field) => {
        result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      resolve(result);
    });
  });
}

module.exports = countStudents;
