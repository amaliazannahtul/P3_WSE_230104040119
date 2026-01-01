// Data Service (SOA)
const express = require("express");
const app = express();

app.get("/data", (req, res) => {
  res.json({ data: "Secure data" });
});

app.listen(5000);
