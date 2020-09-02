const express = require("express");
const app = express();
const path = require('path');

const PORT = 5000;

// Set react as static page
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'client', 'build', 'index.html'));
});

app.listen(PORT, function(){
    console.log("Server is running on PORT " + PORT);
})