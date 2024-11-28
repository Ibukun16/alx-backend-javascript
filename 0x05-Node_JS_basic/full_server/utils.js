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
const readDatabase = (fileName) =>
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
          const lines = data.toString('utf-8').trim().split('\n').slice(1, -1);
          const header = data
            .split('\n')
            .slice(0, 1)[0]
            .toString('utf-8')
            .trim()
            .split(',');
          const firstNameIdx = header.findIndex((ele) => ele === 'firstname');
          const fieldIdx = header.findIndex((ele) => ele === 'field');
          const students = {};
          const fields = {};
          const all = {};

          lines.forEach((line) => {
            const col = line.split(',');
            if (!fields[col[fieldIdx]]) {
              fields[col[fieldIdx]] = 0;
            } else {
              fields[col[fieldIdx]] += 1;
            }
            if (!students[col[fieldIdx]]) {
              students[col[fieldIdx]] = '';
            } else {
              students[col[fieldIdx]] += students[col[fieldIdx]]
                ? `, ${col[firstNameIdx]}`
                : col[firstNameIdx];
            }
          });
          for (const key in Object.entries(fields)) {
            if (Object.hasOwnProperty.call(fields, key)) {
              const val = fields[key];
              all[key] = {
                students: `List: ${students[key]}`,
                val,
              };
            }
          }
          resolve(all);
        }
      });
    }
  });

export default readDatabase;
module.exports = readDatabase;
