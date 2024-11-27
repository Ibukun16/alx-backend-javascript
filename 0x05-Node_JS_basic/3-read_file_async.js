const fs = require('fs');

/**
 * Counts the student in csv file
 * @param fileName - {a String} The path to the csv datafile.
 * @author Ibukun Agunbiade <https://github.com/Ibukun16>
 */

const countStudents = (fileName) =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
      const students = {};
      const fields = {};
      length = 0;
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.toString('utf-8').trim().split('\n');
        for (let count = 0; count < lines.length; count += 1) {
          if (lines[count]) {
            length += 1;
            const field = lines[count].toString('utf-8').trim().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const len = length - 1;
        console.log(`Number of students: ${len}`);
        for (const [key, val] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(
              `Number of students in ${key}: ${val}. List: ${students[key].join(
                ', ',
              )}`,
            );
          }
        }
        resolve(data);
      }
    });
  });

module.exports = countStudents;
