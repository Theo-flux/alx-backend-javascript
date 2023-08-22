const fs = require('fs');

function countcourse(path) {
  try {
    let course = {};
    const content = fs.readFileSync(path, 'utf-8');
    const arr = content.toString().split('\n').slice(1);
    let NUMBER_OF_STUDENT = 0;

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

    console.log('Number of course: ' + NUMBER_OF_STUDENT);
    for (const [key, value] of Object.entries(course)) {
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(", ")}`)
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countcourse;
