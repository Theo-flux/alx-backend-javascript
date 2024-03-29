const http = require('http');
const { readFile } = require('fs');

const PORT = 1245;
const HOSTNAME = 'localhost';

function countStudents(fileName) {
  const course = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    const response = [];
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(course, field[3])) {
              course[field[3]].push(field[0]);
            } else {
              course[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        response.push(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            response.push(`Number of students in ${key}: ${value}. List: ${course[key].join(', ')}`);
          }
        }
        resolve(response.join('\n'));
      }
    });
  });
}

module.exports = countStudents;

const app = http.createServer((req, res) => {
  const { url } = req;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((data) => {
        res.end(data);
      })
      .catch(() => {
        res.statusCode = 404;
        res.send('Cannot load the database');
      });
  }
});

app.listen(PORT, HOSTNAME, () => {});

module.exports = app;
