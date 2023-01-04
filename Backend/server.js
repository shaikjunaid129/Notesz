const express = require('express');
const notes = require('./data/notes.js');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('API is Working');
});

app.get('/api/notes', (req, res) => {
  res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const singleNote = notes.find((item) => item._id === req.params.id);
  res.send(singleNote);
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
