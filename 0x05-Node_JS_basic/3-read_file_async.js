const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    console.log('CSV file content:', data);

    const lines = data.trim().split('\n');
    console.log('Number of lines:', lines.lenght);
    const students = {};

    lines.forEach((line, index) => {
      console.log('Line:', index + 1, line);
      if (index === 0) return;
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }
    });

    const fields = Object.keys(students);
    let result = `Number of students: ${lines.length - 1}\n`;
    fields.forEach((field) => {
      result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
    });
    resolve(result);
  });
});

module.exports = countStudents;
