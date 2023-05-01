const express = require('express');
const bodyParser = require('body-parser');
const chatRouter = require('./routes/chat');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.use('/chat', chatRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});