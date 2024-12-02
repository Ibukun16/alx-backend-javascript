const express = require('express');
const mapRoute = require('./routes/index');

const app = express();
const PORT = 1245;

mapRoute(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
