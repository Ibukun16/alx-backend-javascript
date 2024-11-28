/**
 * This module contains the miscellaneous route handlers.
 * @Author Ibukun Agunbiade <https://github.com/Ibukun16
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
