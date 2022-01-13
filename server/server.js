const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const mockResponse = {
  foo:'bar',
  bar:'foo'
};

const cookieparser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieparser());

app.use(express.static(DIST_DIR));

app.get('/api', (req,res) => {
  res.send(mockResponse);
});

app.get('/', (req,res) => {
  res.sendFile(HTML_FILE);
});

app.use('*', (req, res) => {
  return res.sendStatus(404);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, function() {
  console.log('App listening on port: ' + port);
});
