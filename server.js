const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Application started and Listening on port 3000');
});

// server your css as static
let staticDir = path.resolve(__dirname, 'static');
let pathToHtml = path.resolve(__dirname, 'static', 'index.html');

app.use(express.static(staticDir));

app.get('/', (req, res) => {
  res.sendFile(pathToHtml);
});
