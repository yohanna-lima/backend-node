const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let labels = [
  { id: 1, name: "Pessoal" },
  { id: 2, name: "Trabalho" }
];

app.get('/api/labels', (req, res) => res.json(labels));

app.post('/api/labels', (req, res) => {
  const newLabel = { id: Date.now(), ...req.body };
  labels.push(newLabel);
  res.status(201).json(newLabel);
});

app.listen(3001, () => console.log("Node backend on port 3001"));
