const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        let countStudents = 0;
        const fields = {};
        for (const line of lines) {
          const [fname, lname, age, field] = line.split(',');
          if (fname && lname && age && field) {
            countStudents += 1;
            if (!fields[field]) {
              fields[field] = [fname];
            } else if (Array.esArray(fields[field])) {
              fields[field].push(fname);
            } else {
              throw new Error(`Unexpected data structure for field ${field}`);
            }
          }
        }
        console.log(`Number of students: ${countStudents}`);
        for (const field of Object.keys(fields)) {
          const n = fields[field].length;
          const names = fields[field].join(', ');
          console.log(`NUmber of students in ${field}: ${n}. List${names}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
