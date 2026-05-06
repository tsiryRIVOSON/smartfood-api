// Fichier : __tests__/commande.test.js

const request = require('supertest');
const app = require('../app');

describe('Tests de la route /api/food-order', function() {
  
  test('Prix de base = 10 euros', async function() {
    const reponse = await request(app)
      .post('/api/food-order')
      .send({
        taille: 'Normal',
        estVegan: false,
        distanceKm: 2,
        heure: 10
      });
    
    expect(reponse.body.total).toBe('10.00');
  });
  
  test('Taille Maxi ajoute 2 euros', async function() {
    const reponse = await request(app)
      .post('/api/food-order')
      .send({
        taille: 'Maxi',
        estVegan: false,
        distanceKm: 2,
        heure: 10
      });
    
    expect(reponse.body.total).toBe('12.00');
  });
  
  test('Option Vegan ajoute 1.50 euro', async function() {
    const reponse = await request(app)
      .post('/api/food-order')
      .send({
        taille: 'Normal',
        estVegan: true,
        distanceKm: 2,
        heure: 10
      });
    
    expect(reponse.body.total).toBe('11.50');
  });
  
  test('Livraison > 5km ajoute 4 euros', async function() {
    const reponse = await request(app)
      .post('/api/food-order')
      .send({
        taille: 'Normal',
        estVegan: false,
        distanceKm: 6,
        heure: 10
      });
    
    expect(reponse.body.total).toBe('14.00');
  });
  
  test('Dessert gratuit si commande > 30 euros', async function() {
    const reponse = await request(app)
      .post('/api/food-order')
      .send({
        taille: 'Maxi',
        estVegan: true,
        distanceKm: 10,
        heure: 10
      });
    
    // 10 + 2 + 1.5 + 4 = 17.50 (pas > 30, donc pas de dessert)
    expect(reponse.body.total).toBe('17.50');
  });
  
  test('Taxe heure de pointe +10%', async function() {
    const reponse = await request(app)
      .post('/api/food-order')
      .send({
        taille: 'Normal',
        estVegan: false,
        distanceKm: 2,
        heure: 13
      });
    
    // 10 + 10% = 11.00
    expect(reponse.body.total).toBe('11.00');
  });
  
});