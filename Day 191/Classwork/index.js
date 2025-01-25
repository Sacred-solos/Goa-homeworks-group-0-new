const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: 'Cars', price: 10000 },
  { id: 2, name: 'Motorcycels', price: 4000 },
  { id: 3, name: 'Bikes', price: 500 },
];

const accounts = [
  { id: 1, username: 'user1', email: 'user1@gmail.com' },
  { id: 2, username: 'user2', email: 'user2@gmail.com' },
  { id: 3, username: 'user3', email: 'user3@gmail.com' },
];
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/accounts', (req, res) => {
  res.json(accounts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});