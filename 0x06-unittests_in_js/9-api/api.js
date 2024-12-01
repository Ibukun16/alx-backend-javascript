const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, resp) => {
  resp.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, resp) => {
  const id = req.params.id;

  resp.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
