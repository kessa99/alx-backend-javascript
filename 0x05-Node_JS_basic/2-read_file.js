const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.split('\n').filter((line) => line.trim() !== '');

    if (students.length === 0) {
      throw new Error('Cannot load the database');
    }

    students.shift();

    const fieldCounts = {};
    const fieldStudents = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (!fieldStudents[field]) {
        fieldCounts[field] = 0;
        fieldStudents[field] = [];
      }

      fieldCounts[field] += 1;
      fieldStudents[field].push(firstname);
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field];
        const list = fieldStudents[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
