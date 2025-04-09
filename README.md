Parfait ! Voici un exemple de fichier `README.md` que tu peux mettre à la racine de ton projet. Il explique comment le projet fonctionne, comment l’installer et l’exécuter :

---

### 📁 `README.md`

```markdown
# 📦 TP Node.js API avec Express

Ce projet est une petite API Node.js utilisant Express. Il permet :
- d'afficher une liste d'équipes dans un tableau HTML stylé
- d'ajouter une nouvelle équipe via un formulaire
- de consulter les données brutes JSON via une API REST

---

## 🚀 Lancer le projet

### Étapes :

1. Cloner le projet ou extraire le ZIP.
2. Ouvrir un terminal dans le dossier.
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Lancer le serveur :
   ```bash
   node index.js
   ```
5. Aller sur [http://localhost:3000](http://localhost:3000)

---

## 🌐 Fonctionnalités

### 📄 `GET /`
- Affiche un tableau HTML avec toutes les équipes
- Contient un formulaire pour en ajouter une

### 📄 `POST /ajouter`
- Permet d’ajouter une nouvelle équipe via le formulaire

### 📄 `GET /equipes`
- Renvoie la liste complète des équipes au format JSON

---

## 📚 Exemple de données (`equipe.json`)
```json
[
  { "id": 1, "nom": "FC Barcelone", "ville": "Barcelone" },
  { "id": 2, "nom": "Real Madrid", "ville": "Madrid" }
]
```

---

## 💡 À venir 
- Supprimer une équipe
- Modifier une équipe
- Sauvegarde dans base de données

---

## 👨‍💻 Auteur

Projet réalisé par **Mohamed LABJAOUI** – avril 2025

