const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const port = process.env.PORT || 4001
const view = `${__dirname}/../view`;
var app = express();

app.use(express.static('public'));
app.use(favicon(path.join(`${__dirname}/../images/favicon.ico`)));


app.get('/btree', (req, res) => {
  res.sendFile(path.join(`${view}/index.html`));
});

app.listen(port, () => {
  console.log(`Server running on ${port}`)
});
