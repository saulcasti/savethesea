const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/savethesea'));


app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/savethesea/index.html'));
});

app.listen(process.env.PORT || 3000);
