const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('client'));

const apis = {
  player: 3001,
  chats: 3002,
  carousel: 3003,
  channels: 3004
};

function handleAPI(type, req, res) {
  if (type in apis) {
    return fetch(`http://${req.hostname}:${apis[type]}${req.url}`)
      .then((results) => results.json())
      .then((results) => res.send(results));
  };
}

app.get('/api/player/:Id', (req, res) => {
  return handleAPI('player', req, res);
});

app.get('/api/chats/:videoId', (req, res) => {
  return handleAPI('chats', req, res);
});

app.get('/videos/:videoId', (req, res) => {
  return handleAPI('carousel', req, res);
});

app.get('/filter/:videoId/:categoryId', (req, res) => {
  return apiHandler('carousel', req, res);
});

app.get('/api/channels/:videoId', (req, res) => {
  return handleAPI('channels', req, res);
});

const log = (txt) => {
  console.log(new Date().toString(), txt);
};

app.listen(port, () => log(`
proxy listening on port ${port}`));