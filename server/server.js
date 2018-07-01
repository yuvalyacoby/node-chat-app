const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;
var app = express();


app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
