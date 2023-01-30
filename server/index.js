const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from CatWiki!" });
});

app.get("/api/breeds", (req, res) => {
  console.log('breeds')
  fetch(`https://api.thecatapi.com/v1/breeds`, {
    headers: {
      'x-api-key': process.env.API_KEY
    }
  }).then((data) => data.json())
    .then((data) => {
      console.log(data)
      res.json(data)
    })
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});