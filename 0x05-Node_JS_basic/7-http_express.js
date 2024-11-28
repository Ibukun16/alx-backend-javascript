const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in csv data file.
 * @param - fileName {a String} the path to the CSV data file.
 * @uthor - Ibukun Agunbiade <https://github.com/Ibukun16>
 */
const countStudents = (fileName) =>
  new Promise((resolve, reject) => {
    if (!fileName) {
      reject(new Error('Cannot load the database'));
    }
    if (fileName) {
      fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const students = {};
          const fields = {};
          let retort = '';
          let length = 0;
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
          retort += `Number of students: ${len}\n`;
          for (const [key, val] of Object.entries(fields)) {
            if (key !== 'field') {
              retort += `Number of students in ${key}: ${val}.`;
              retort += `List: ${students[key].join(', ')}\n`;
            }
          }
          resolve(retort);
        }
      });
    }
  });

app.get('/', (_, resp) => {
  resp.send('Hello Holberton School1');
});
app.get('/students', (req, resp) => {
  countStudents(process.argv[2].toString())
    .then((yield) => {
      resp.send(['This is the list of our students', yield].join('\n'));
    })
    .catch((err) => {
      resp.send('This is the list of our students\nCannot load the database');
    });
});
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
