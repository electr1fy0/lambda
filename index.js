const express = require("express");
const port = 3000;
const app = express();

app.get("/meow", (req, res) => {
  res.status(200).send({ name: "gulaabi", shaam: "gulaabi" });
});

app.get("/bark", (req, res) => res.send("bark?"));

app.listen(port, () => {
  console.log(`App is jogging on ${port}`);
});
