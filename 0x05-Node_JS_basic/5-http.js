const http = require('http');
const { readFile } = require('fs');

const PORT = 1245;
const HOSTNAME = 'localhost';

function countStudents(fileName) {
  const course = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    let response = '';
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
        response += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            response += `Number of students in ${key}: ${value}. `;
            response += `List: ${course[key].join(', ')}\n`;
          }
        }
        resolve(response);
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
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents('./database.csv')
      .then(data => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(err => {
        res.statusCode = 400;
        res.end(err);
      });
  }
});

app.listen(PORT, HOSTNAME, () => {});

module.exports = app;
