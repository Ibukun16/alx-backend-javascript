const fs = require('fs');

/**
 * Counts the student in csv file
 * @param fileName - {a String} The path to the csv datafile.
 * @author Ibukun Agunbiade <https://github.com/Ibukun16>
 */

const countStudents = (fileName) =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, { encoding: 'utf-8' }, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const lines = data.toString('utf-8').trim().split('\n');
        const students = {};
        const fields = {};
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

        console.log(`Number of students: ${dataBody.length}`);
        for (const [key, val] of Object.entries(students)) {
          const category = val.map((student) => student.firstname).join(', ');
          console.log(
            `Number of students in ${key}: ${val.length}. List: ${category}`,
          );
        }
        resolve(data);
      }
    });
  });

module.exports = countStudents;
