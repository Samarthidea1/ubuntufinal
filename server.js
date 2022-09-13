const express = require('express');
const PORT = 8000;
const app = express();
app.get('/', (req, res) => {
  res.send('Heyy fd? !!!');
});
app.listen(PORT);
console.log(`Running on ${PORT}`);

