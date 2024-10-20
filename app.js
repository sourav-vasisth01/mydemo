// app.js - Basic Express Web Server

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from AWS CodeCommit!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
