// Authentication Service (SOA)
const express = require("express");
const app = express();

app.post("/login", (req, res) => {
  res.json({ token: "dummy-token" });
});

app.listen(4000);
