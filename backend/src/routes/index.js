const express = require('express');
const router = express.Router();

// Importez ici vos autres fichiers de routes
const crudRoutes = require('./crud');

// Route de base pour vérifier que l'API fonctionne
router.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API" });
});

// Utilisez les routes CRUD
router.use('/items', crudRoutes);

// Vous pouvez ajouter d'autres routes ici si nécessaire

module.exports = router;
