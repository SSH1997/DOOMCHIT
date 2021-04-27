const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/test', (req, res) => {
  res.send({test: 'success'});
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
