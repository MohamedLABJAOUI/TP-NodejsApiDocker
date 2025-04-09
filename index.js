const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware pour lire les données des formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers CSS statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page HTML avec formulaire
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'api', 'equipe.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erreur serveur');

    const equipes = JSON.parse(data);
    let html = `
      <html>
      <head>
        <title>Liste des équipes</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <h1>Liste des Équipes 🏆</h1>
        <form method="POST" action="/ajouter">
          <input type="text" name="nom" placeholder="Nom de l'équipe" required />
          <input type="text" name="ville" placeholder="Ville" required />
          <button type="submit">Ajouter</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Ville</th>
            </tr>
          </thead>
          <tbody>
    `;

    equipes.forEach(eq => {
      html += `
        <tr>
          <td>${eq.id}</td>
          <td>${eq.nom}</td>
          <td>${eq.ville}</td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </body>
      </html>
    `;

    res.send(html);
  });
});

// Route pour API JSON
app.get('/equipes', (req, res) => {
  const filePath = path.join(__dirname, 'api', 'equipe.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });

    const equipes = JSON.parse(data);
    res.json(equipes);
  });
});

// Route POST pour ajouter une équipe
app.post('/ajouter', (req, res) => {
  const { nom, ville } = req.body;
  const filePath = path.join(__dirname, 'api', 'equipe.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erreur lecture fichier');

    let equipes = JSON.parse(data);
    const newEquipe = {
      id: equipes.length ? equipes[equipes.length - 1].id + 1 : 1,
      nom,
      ville
    };

    equipes.push(newEquipe);
    fs.writeFile(filePath, JSON.stringify(equipes, null, 2), err => {
      if (err) return res.status(500).send('Erreur écriture fichier');
      res.redirect('/');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
