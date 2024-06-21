const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // console.log('CSV file content:', data);

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    if (lines.length === 0) {
      reject(new Error('Cannot load the database'));
      return;
    }

    lines.shift();
    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents += 1;
      }
    });

    let result = `Number of students: ${totalStudents}`;
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const list = students[field].join(', ');
        result = `Number of students in ${field}: ${students[field].length}. List: ${list}`;
      }
    }
    resolve(result);
  });
});

module.exports = countStudents;
