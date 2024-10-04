const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Test router testing!");
});

app.use("/", (req, res) => {
  res.send("Hello");
});

app.use("/test", (req, res) => {
  res.send("test");
});

app.listen(3000, () => {
  console.log("Server is Successfull");
});
