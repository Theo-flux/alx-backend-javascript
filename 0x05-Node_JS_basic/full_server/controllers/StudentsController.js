const readDatabase = require('../utils');

const fileName = process.argv[2].toString();

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(fileName.toString())
      .then((result) => {
        const firstNameObj = result[1];
        const output = ['This is the list of our students'];

        for (const [key, value] of Object.entries(firstNameObj)) {
          output.push(
            `Number of students in ${key}: ${value.length}. List: ${value.join(
              ', ',
            )}`,
          );
        }
        res.statusCode = 200;
        res.send(output.join('\n'));
      })
      .catch(() => {
        res.statusCode = 500;
        res.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major.toString();
    readDatabase(fileName)
      .then((result) => {
        const fields = result[0];
        const firstNameObj = result[1];

        if (fields.has(major)) {
          const output = `List: ${firstNameObj[major].join(', ')}`;
          res.statusCode = 200;
          res.send(output);
        } else {
          res.statusCode = 500;
          res.send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        res.statusCode = 500;
        res.send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
