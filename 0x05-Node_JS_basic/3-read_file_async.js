const fs = require('fs');
const { resolve } = require('path');

const  countStudents = (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(Error('Cannot load the database'));
      } else {
        const fields = new Set();
        const stuents = [];
        data = data.trim().split('\n');
        const newlines = [];
        for (let i = 1; i < data.length; i++) {
          newlines.push(data[i]);
        }
        newlines.forEach(elt => {
          let line = elt.split(',');
          if (line.length === 4) {
            fields.add(line[3]);
            countStudents.push(line);
          }
        });
        console.log(`Number of students: ${students.length}`);
        fields.forEach(elt => {
          const studie = students.filter((student) => student[3] === elt);
          const name = studie.map(ws => ws[0]);
          console.log(`Number of students in ${elt}: ${studie.length}. List: ${name.join(', ')}`);
        });
      }
    });
  });
}

module.exports = countStudents;
