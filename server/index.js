const path = require('path');
const express = require("express");
// import fetch from 'node-fetch'
const fetch = require('node-fetch-commonjs')
const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from CatWiki!" });
});

app.get("/api/breeds", async (req, res) => {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
    headers: {
      'x-api-key': process.env.API_KEY
    }
  });
  const data = await response.json();
  res.json(data);
});

app.get("/api/images", async (req, res) => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`, {
      headers: {
        'x-api-key': process.env.API_KEY
      }
    });
    const data = await response.json();
    res.json(data);
});

app.get("/api/images/:id", async (req, res) => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${req.params.id}`, {
    headers: {
      'x-api-key': process.env.API_KEY
    }
  });
  const data = await response.json();
  res.json(data);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});