const http = require('http');

const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    console.log(`Database file path: ${process.argv[2]}`);
    countStudents(process.argv[2])
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.write(error.message);
        res.end();
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
