const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory array to store users
const users = [];

// Route: /
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home</title>
    </head>
    <body>
      <h1>Welcome to the Server!</h1>
    </body>
    </html>
  `);
});

// Route: /users (GET)
app.get('/users', (req, res) => {
  res.json(users);
});

// Route: /users (POST)
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: 'User added successfully!', users });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});