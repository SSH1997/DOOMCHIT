const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const mysql = require("mysql2");
const { client_id, client_secret } = require("./env.ts");

const app = express();
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "ddb",
  host: "localhost",
  port: 3306,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/test", (req, res) => {
  connection.query("SELECT * FROM test", (err, results, fields) => {
    const result = results[0];

    res.send(result);
  });
});

app.get("/githublogin", async (req, res) => {
  const code = req.query.code;

  const response = await axios.post(
    "https://github.com/login/oauth/access_token",
    { code, client_id, client_secret },
    { headers: { accept: "application/json" } }
  );

  const token = response.data.access_token;

  const { data } = await axios.get("https://api.github.com/user", {
    headers: { Authorization: `token ${token}` },
  });

  res.cookie("id", data.id);
  res.redirect("http://localhost:5500");
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
