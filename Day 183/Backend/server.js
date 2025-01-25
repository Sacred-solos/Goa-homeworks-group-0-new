const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Headphones', price: 200 },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});