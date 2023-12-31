const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/redirect', (req, res) => {
  res.sendFile(__dirname + '/redirect.html');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
