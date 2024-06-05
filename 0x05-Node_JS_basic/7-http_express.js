const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = 'localhost';
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  const databasePath = process.argv[2];
  if (!databasePath) {
    res.status(500).send('Database file not found');
    return;
  }

  countStudents(databasePath)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
