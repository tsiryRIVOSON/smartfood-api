const express = require('express');
const app = express();
app.use(express.json());

function ajouterSupplementTaille(prix, taille) {
  if (taille === 'Maxi') {
    return prix + 2;
  }
  return prix;
}

function ajouterSupplementVegan(prix, estVegan) {
  if (estVegan === true) {
    return prix + 1.5;
  }
  return prix;
}

function ajouterFraisLivraison(prix, distanceKm) {
  if (distanceKm > 5) {
    return prix + 4;
  }
  return prix;
}

function appliquerDessertGratuit(prix) {
  if (prix > 30) {
    return prix - 5;
  }
  return prix;
}

function appliquerTaxeHeurePointe(prix, heure) {
  if (heure >= 12 && heure <= 14) {
    return prix * 1.1;
  }
  return prix;
}

app.post('/api/food-order', function(req, res) {
  var taille = req.body.taille;
  var estVegan = req.body.estVegan;
  var distanceKm = req.body.distanceKm;
  var heure = req.body.heure;
  
  var prix = 10;
  prix = ajouterSupplementTaille(prix, taille);
  prix = ajouterSupplementVegan(prix, estVegan);
  prix = ajouterFraisLivraison(prix, distanceKm);
  prix = appliquerDessertGratuit(prix);
  prix = appliquerTaxeHeurePointe(prix, heure);
  
  res.json({ total: prix.toFixed(2) });
});

module.exports = app;