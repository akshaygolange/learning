require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
// console.log(process.env.port, "<-PORT");

app.get("/", (req, res) => {
  res.send("Hi, I'm comin.. from /!");
});
app.get("/welcome", (req, res) => {
  res.send("<h1>Hi, I'm comin.. from welcome!</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
