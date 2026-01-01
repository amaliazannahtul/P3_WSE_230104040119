// Client-Server Architecture
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Client-Server" });
});

app.listen(3000, () => {
  console.log("Client-Server running");
});
