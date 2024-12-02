const fs = require('fs');

/**
 * A function that Read the content of a CSV file
 * @param fileName - {a string}, the path to the csv data file.
 * @uthor Ibukun Agunbiade <https://github.com/Ibukun16>
 */
const countStudents = (fileName) => {
  if (!fs.existsSync(fileName)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(fileName).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lines = fs
    .readFileSync(fileName, { encoding: 'utf-8' })
    .toString('utf-8')
    .trim()
    .split('\n');
  const header = lines[0].split(',');
  const dataBody = lines.slice(1);
  const students = {};
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
};

module.exports = countStudents;
