const express = require('express');
const app = express();
const port = 3000;
let counter = 0

app.get('/', (req, res) => {
  res.send('Hello, Lauren!')
});

app.get('/counter', (req, res) => {
  res.send(`Counter value: ${counter}`)
});

app.post('/counter', (req, res) => {
  counter += 1
});

app.delete('/counter', (req, res) => {
  counter = 0
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);