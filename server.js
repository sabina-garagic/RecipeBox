const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
db.connect();

// GET http://localhost:8080
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.use('/api/recipes', require('./src/recipes'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next(err);
});
// START THE SERVER
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); 




