const readDatabase = require('../utils');

/**
 * List of supported valid majors
 * Contains the student-related route handlers
 * @author Ibukun Agunbiade <https://github.com/Ibukun16>
 */
class StudentsController {
  static getAllStudents(request, response) {
    const fileName = process.argv[2];

    readDatabase(fileName)
      .then((students) => {
        const output = ['This is the list of our students'];

        const sortFuncs = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };
        for (const [field, grp] of Object.entries(students).sort(sortFuncs)) {
          output.push(
            [
              `Number of students in ${field}: ${grp.length}`,
              'List:',
              grp.map((student) => student.firstname).join(', '),
            ].join(' '),
          );
        }
        response.status(200).send(output.join('\n'));
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const fileName = process.argv[2];
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(fileName)
      .then((students) => {
        let result = '';

        if (Object.keys(students).includes(major)) {
          const grp = students[major];
          result = `List: ${grp
            .map((student) => student.firstname)
            .join(', ')}`;
        }
        response
          .status(200)
          .send(result || 'No student found for the major given');
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
