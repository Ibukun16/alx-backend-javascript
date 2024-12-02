const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

/**
 * Binds the route to the appropriate handler
 * in the given Express application.
 * @param {Express app} The Express application.
 * @author Ibukun Agunbiade <https://github.com/Ibukun16>
 */

const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
