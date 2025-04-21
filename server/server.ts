import express from "express";

const app = express();
const port = 4000;

app.get("/time", (req, res) => {
  const now = new Date().toISOString();
  console.log("/time called", now);
  res.json({ time: now });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
