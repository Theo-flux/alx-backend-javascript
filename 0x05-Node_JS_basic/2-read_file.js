const fs = require('fs');

function countStudents(path) {
  const course = {};
  let NUMBER_OF_STUDENT = 0;
  try {
    const content = fs.readFileSync(path, 'utf-8');
    const arr = content.toString().split('\n');

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i]) {
        NUMBER_OF_STUDENT += 1;
        const field = arr[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(course, field[3])) {
          course[field[3]].push(field[0]);
        } else {
          course[field[3]] = [field[0]];
        }
      }
    }

    NUMBER_OF_STUDENT = NUMBER_OF_STUDENT - 1;

    console.log(`Number of course: ${NUMBER_OF_STUDENT}`);
    for (const [key, value] of Object.entries(course)) {
      if (key !== 'field') {
        console.log(
          `Number of students in ${key}: ${value.length}. List: ${value.join(
            ', ',
          )}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
