const { readFile } = require('fs');

function countStudents(fileName) {
  const course = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
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
        console.log(`Number of course: ${l}`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(
              `Number of course in ${key}: ${value}. List: ${course[key].join(
                ', ',
              )}`,
            );
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
