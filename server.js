const express = require('express');

//Create Our App
let app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Express is up on 3000 port');
});
