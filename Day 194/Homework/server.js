const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const DATA_FILE = "items.json";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (err) {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

app.get("/items", (req, res) => {
  res.json(readData());
});

app.get("/items/:id", (req, res) => {
  const items = readData();
  const item = items.find((i) => i.id === parseInt(req.params.id));
  item ? res.json(item) : res.status(404).send("Item not found");
});

app.post("/items", (req, res) => {
  const items = readData();
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  writeData(items);
  res.json(newItem);
});

app.post("/items/bulk", (req, res) => {
  const items = readData();
  const newItems = req.body.map((item) => ({ id: Date.now() + Math.random(), ...item }));
  const updatedItems = [...items, ...newItems];
  writeData(updatedItems);
  res.json(updatedItems);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
