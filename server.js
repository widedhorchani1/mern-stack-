const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();

const URI = process.env.URI;
mongoose
  .connect(URI)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/myapp", require("./routes/user"));

const Port = 5000 || process.env.Port;
app.listen(Port, (err) => {
  if (err) throw err;
  console.log("server is running");
});
