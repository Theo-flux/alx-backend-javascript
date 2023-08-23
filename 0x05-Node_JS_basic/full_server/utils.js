const { readFile } = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const firstNameObj = {};
    const field = new Set();
    readFile(filePath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const dataArr = data.toString().split('\n');
        for (let i = 0; i < dataArr.length; i += 1) {
          if (dataArr[i]) {
            const colArr = dataArr[i].toString().split(',');

            if (colArr[3] !== 'field') {
              field.add(colArr[3]);
            }

            if (field.has(colArr[3])) {
              if (
                Object.prototype.hasOwnProperty.call(firstNameObj, colArr[3])
              ) {
                firstNameObj[colArr[3]].push(colArr[0]);
              } else {
                firstNameObj[colArr[3]] = [colArr[0]];
              }
            }
          }
        }
        resolve([field, firstNameObj]);
      }
    });
  });
}

module.exports = readDatabase;
