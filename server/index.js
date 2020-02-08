const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('client'));

const hosts = {
  player: 3001,
  chats: 3002,
  carousel: 3003,
  channels: 3004
};

function handleHosts(type, req, res) {
  if (type in hosts) {
    return fetch(`http://${req.hostname}:${hosts[type]}${req.url}`)
      .then((results) => results.json())
      .then((results) => res.send(results));
  };
}

app.get('/api/player/:Id', (req, res) => {
  return handleHosts('player', req, res);
});

app.get('/api/chats/:videoId', (req, res) => {
  return handleHosts('chats', req, res);
});

app.get('/videos/:videoId', (req, res) => {
  return handleHosts('carousel', req, res);
});

app.get('/filter/:videoId/:categoryId', (req, res) => {
  return handleHosts('carousel', req, res);
});

app.get('/api/channels/:videoId', (req, res) => {
  return handleHosts('channels', req, res);
});

const log = (txt) => {
  console.log(new Date().toString(), txt);
};

app.listen(port, () => log(`
proxy listening on port ${port}`));