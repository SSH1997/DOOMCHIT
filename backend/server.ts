const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: '1234',
  database: 'ddb',
  host: 'localhost',
  port: 3306
});

app.get('/test', (req, res) => {
  connection.query('SELECT * FROM test',(err, results, fields) => {
    const result = results[0];

    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
