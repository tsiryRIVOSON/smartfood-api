const request = require('supertest');
const app = require('../app');

describe('POST /api/food-order', function() {
  
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
  
  test('Taille Maxi = +2 euros', async function() {
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
  
  test('Option Vegan = +1.50 euro', async function() {
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
  
  test('Livraison > 5km = +4 euros', async function() {
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
  
  test('Taxe heure de pointe +10%', async function() {
    const reponse = await request(app)
      .post('/api/food-order')
      .send({
        taille: 'Normal',
        estVegan: false,
        distanceKm: 2,
        heure: 13
      });
    expect(reponse.body.total).toBe('11.00');
  });
  
});