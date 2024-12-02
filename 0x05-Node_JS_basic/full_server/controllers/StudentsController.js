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
      .then((students) => {
        const retort = ['This is the list of our students'];
        const compareFuncs = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };
        for (const [key, val] of Object.entries(students).sort(compareFuncs)) {
          retort.push(
            [
              `Number of students in ${key}: ${val.length}`,
              'List:',
              val.map((student) => student.firstName).join(', '),
            ].join(' '),
          );
        }
        response.status(200).send(retort.join('\n'));
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
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
      .then((students) => {
        let printData = '';

        if (Object.keys(students).includes(major)) {
          const group = students[major];
          printData = `List: ${group
            .map((students) => students.firstname)
            .join(', ')}`;
        }
        response.status(200).send(printData);
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
