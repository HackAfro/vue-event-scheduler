require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
const port = process.env.PORT || 4001;
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


app.post('/schedule', (req, res) => {
  const {body} = req;
  const data = {
    ...body,
    // set the selected property of the body to true
  };
  // trigger a new-entry event on the vote-channel
  pusher.trigger('schedule', 'new-event', data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
