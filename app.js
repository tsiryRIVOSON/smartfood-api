// Fichier : app.js
// Version refactorisée = code propre

const express = require('express');
const app = express();
app.use(express.json());

// Fonction 1 : Ajout supplément taille Maxi
function ajouterSupplementTaille(prix, taille) {
  if (taille === 'Maxi') {
    return prix + 2;
  }
  return prix;
}

// Fonction 2 : Ajout supplément Vegan
function ajouterSupplementVegan(prix, estVegan) {
  if (estVegan === true) {
    return prix + 1.5;
  }
  return prix;
}

// Fonction 3 : Frais de livraison longue distance
function ajouterFraisLivraison(prix, distanceKm) {
  if (distanceKm > 5) {
    return prix + 4;
  }
  return prix;
}

// Fonction 4 : Dessert gratuit si commande > 30€
function appliquerDessertGratuit(prix) {
  if (prix > 30) {
    return prix - 5;
  }
  return prix;
}

// Fonction 5 : Taxe heure de pointe (12h-14h)
function appliquerTaxeHeurePointe(prix, heure) {
  if (heure >= 12 && heure <= 14) {
    return prix * 1.1;
  }
  return prix;
}

// Route principale
app.post('/api/food-order', function(req, res) {
  var taille = req.body.taille;
  var estVegan = req.body.estVegan;
  var distanceKm = req.body.distanceKm;
  var heure = req.body.heure;
  
  // On part du prix de base
  var prix = 10;
  
  // On applique chaque règle une par une
  prix = ajouterSupplementTaille(prix, taille);
  prix = ajouterSupplementVegan(prix, estVegan);
  prix = ajouterFraisLivraison(prix, distanceKm);
  prix = appliquerDessertGratuit(prix);
  prix = appliquerTaxeHeurePointe(prix, heure);
  
  res.json({ 
    total: prix.toFixed(2) 
  });
});

module.exports = app;