'use strict';

const express = require('express');
const ecstatic = require('../lib/ecstatic');
const http = require('http');

const app = express();

app.use(ecstatic({
  root: `${__dirname}/dist`,
  showdir: true,
  autoIndex: true,
}));

http.createServer(app).listen(8080);

console.log('Listening on :8080');
