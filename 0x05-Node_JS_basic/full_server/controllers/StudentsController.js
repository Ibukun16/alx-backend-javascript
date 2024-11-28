const readDatabase = require('../utils');

/**
 * List of supported valid majors
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers
 * @author Ibukun Agunbiade <https://github.com/Ibukun16>
 */
class StudentsController {
  static getAllStudents(request, response) {
    const fileName = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(fileName)
      .then((data) => {
        let retort = 'This is the list of our students';
        const compareFuncs = (a, b) => {
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };
        for (const field in Object.entries(data).sort(compareFuncs)) {
          if (Object.hasOwnProperty.call(data, field)) {
            const val = data[field];
            retort += `\nNumber of students in ${field}: ${val.val}. List: ${val.students}`;
          }
        }
        response.send(retort);
      })
      .catch((err) => {
        response.send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const fileName = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(fileName)
      .then((data) => {
        let printData = '';

        if (Object.keys(data).includes(major)) {
          const group = data[major];
          printData = `List: ${group
            .map((students) => students.firstname)
            .join(', ')}`;
        }
        response.status(200).send(printData);
        response.status(500).send('Major parameter must be CS or SWE');
      })
      .catch((err) => {
        response.send(err.message);
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
