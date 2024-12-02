const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const dataFile = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in csv data file.
 * @param - fileName {a String} the path to the CSV data file.
 * @uthor - Ibukun Agunbiade <https://github.com/Ibukun16>
 */
const countStudents = (fileName) => new Promise((resolve, reject) => {
  if (!fileName) {
    reject(new Error('Cannot load the database'));
  }
  if (fileName) {
    fs.readFile(fileName, { encoding: 'utf-8' }, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const students = {};
        const retort = [];
        const lines = data.toString('utf-8').trim().split('\n');
        const header = lines[0].split(',');
        const dataBody = lines.slice(1);
        const studentNames = header.slice(0, header.length - 1);

        for (const eachRow of dataBody) {
          const studentRec = eachRow.split(',');
          const studentValues = studentRec.slice(0, studentRec.length - 1);
          const field = studentRec[studentRec.length - 1];
          if (!Object.keys(students).includes(field)) {
            students[field] = [];
          }
          const studentEntry = studentNames.map((name, idx) => [
            name,
            studentValues[idx],
          ]);
          students[field].push(Object.fromEntries(studentEntry));
        }
        retort.push(`Number of students: ${dataBody.length}`);
        for (const [key, val] of Object.entries(students)) {
          retort.push(
            [
              `Number of students in ${key}: ${val.length}.`,
              'List:',
              val.map((student) => student.firstname).join(', '),
            ].join(' '),
          );
        }
        resolve(retort.join('\n'));
      }
    });
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const response = ['This is the list of our students'];

  countStudents(dataFile)
    .then((output) => {
      response.push(output);
      const respText = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', respText.length);
      res.statusCode = 200;
      res.write(Buffer.from(respText));
    })
    .catch((error) => {
      response.push(error instanceof Error ? error.message : error.toString());
      const respText = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', respText.length);
      res.statusCode = 200;
      res.write(Buffer.from(respText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
