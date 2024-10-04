const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstname: "Pratik", lastName: "Singh Deo" });
});

app.post("/user", (req, res) => {
  // saving data to DB
  res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully!");
});

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("test");
});

app.listen(3000, () => {
  console.log("Server is Successfull");
});
