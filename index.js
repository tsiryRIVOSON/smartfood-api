// Fichier : index.js
// Code volontairement complexe pour générer de la dette technique

const express = require('express');
const app = express();

// Permet de lire les données JSON envoyées au serveur
app.use(express.json());

// Route POST pour commander de la nourriture
app.post('/api/food-order', function(req, res) {
  
  // Récupération des données envoyées par le client
  var taille = req.body.taille;
  var estVegan = req.body.estVegan;
  var distanceKm = req.body.distanceKm;
  var heure = req.body.heure;
  
  // Prix de base = 10 euros
  var prix = 10;
  
  // Cette fonction calcule tout (VOLONTAIREMENT MAL FAITE)
  function calculerPrixTotal() {
    
    // Règle 1 : Si taille Maxi, on ajoute 2 euros
    if (taille === 'Maxi') {
      prix = prix + 2;
    }
    
    // Règle 2 : Si Vegan, on ajoute 1.50 euro pour le steak végétal
    if (estVegan === true) {
      prix = prix + 1.5;
    }
    
    // Règle 3 : Si livraison > 5km, on ajoute 4 euros
    if (distanceKm > 5) {
      prix = prix + 4;
    }
    
    // Règle 4 : Si la commande dépasse 30 euros, dessert gratuit
    if (prix > 30) {
      // On enlève 5 euros (valeur du dessert)
      prix = prix - 5;
      
      // Message inutile juste pour ajouter de la complexité
      if (prix > 30) {
        prix = prix;
      }
    }
    
    // Règle 5 : Heure de pointe (12h-14h), taxe +10%
    if (heure >= 12) {
      if (heure <= 14) {
        var taxe = prix * 0.1;
        prix = prix + taxe;
      }
    }
    
    return prix;
  }
  
  var prixFinal = calculerPrixTotal();
  
  // On renvoie le prix avec 2 décimales
  res.json({ 
    total: prixFinal.toFixed(2) 
  });
  
});

// Démarrage du serveur sur le port 3000
app.listen(3000, function() {
  console.log('Serveur SmartFood démarré sur le port 3000');
});