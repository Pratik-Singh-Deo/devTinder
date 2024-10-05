const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

//Handle Auth Middleware for all GET POST, .... requests
app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.listen(3000, () => {
  console.log("Server is Successfull");
});
