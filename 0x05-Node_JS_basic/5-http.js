const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';

/**
 * Counts the sudents in a CSV data file
 * @param - {a String} fileName The path to the CSV data file.
 * @author Ibukun Agunbiade <https://github.com/Ibukun16>
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
          let length = 0;
          let output = '';
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
          output += `Number of students: ${len}\n`;
          for (const [key, val] of Object.entries(fields)) {
            if (key !== 'field') {
              output += `Number of students in ${key}: ${val}. `;
              output += `List: ${students[key].join(', ')}\n`;
            }
          }
          resolve(output);
        }
      });
    }
  });

const app = http.createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    resp.write('Hello Holberton School!');
    resp.end();
  }
  if (req.url === '/students') {
    resp.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        const result = output.slice(0, -1);
        resp.end(result);
      })
      .catch((err) => {
        resp.statusCode = 404;
        resp.end('Cannot load the database');
      });
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
