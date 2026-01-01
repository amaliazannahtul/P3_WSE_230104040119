// API Gateway
app.use("/api", (req, res) => {
  res.json({ message: "Gateway OK" });
});
