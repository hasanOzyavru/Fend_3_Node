let data = [{ name: "Somewhere", temperature: 30 }];

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/app", (req, res) => {
  data.push(req.body);
  res.send("Done");
});

app.get("/app", (req, res) => {
  res.send(data);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
