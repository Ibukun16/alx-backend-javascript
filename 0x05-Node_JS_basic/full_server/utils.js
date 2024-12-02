const fs = require('fs');

/**
 * Read the data of students from a CSV data file.
 * @param fileName - {a String}- The path to the CSV data file.
 * @author Ibukun Agunbiade <https://github.com/Ibukun16>
 *
 * @return {Promise<{
 *  String: {firstName: String, lastName: String, age: number(int)}[]
 * }>}
 */
const readDatabase = (fileName) => new Promise((resolve, reject) => {
  if (!fileName) {
    reject(new Error('Cannot load the database'));
  }
  if (fileName) {
    fs.readFile(fileName, { encoding: 'utf-8' }, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.toString('utf-8').trim().split('\n');
        const header = lines[0].split(',');
        const studentNames = header.slice(0, header.length - 1);
        const dataBody = lines.slice(1);
        const students = {};

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
        resolve(students);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
