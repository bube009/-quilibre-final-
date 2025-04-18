const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/api/frequencies', (req, res) => {
  const filePath = path.join(__dirname, 'frequencies.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erreur lecture du fichier.');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Serveur THQV en ligne sur http://localhost:${PORT}`);
});