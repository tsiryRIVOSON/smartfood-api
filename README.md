# SmartFood API

API de commande de nourriture pour restaurant - Projet Qualimétrie & Dette Technique (Sujet 11)

![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18-blue?logo=express)
![Jest](https://img.shields.io/badge/Tests-5/5-success?logo=jest)
![Coverage](https://img.shields.io/badge/Couverture-95.3%25-brightgreen)
![Pipeline](https://img.shields.io/badge/CI/CD-GitHub_Actions-blue?logo=githubactions)



## Table des matières

- [Contexte](#contexte)
- [Équipe](#équipe)
- [Installation](#installation)
- [Lancement](#lancement)
- [Tests](#tests)
- [API](#api)
- [Pipeline CI/CD](#pipeline-cicd)
- [Qualimétrie](#qualimétrie)
- [Structure du projet](#structure-du-projet)



## Contexte

Ce projet a été réalisé dans le cadre d'un TP de **Qualimétrie et Dette Technique**.

**Objectif :** Appliquer un cycle PDCA complet :
1. **Plan** : Coder volontairement une fonction complexe avec dette technique
2. **Do** : Mesurer la qualité avec ESLint et SonarCloud
3. **Check** : Bloquer le code sale avec un pipeline CI/CD
4. **Act** : Refactoriser et tester pour atteindre les standards industriels



##  Équipe

| Nom | Rôle |
|-----|------|
| **Tsiry Nomenjanahary RIVOSON** | Structure du projet, configuration, refactoring |
| **ANDRIANJAKA Anjarasoa Fitahiana** | Ajout du README / documentation du projet |
| **RAINIKALA Takoza Jean Christelos** | créer l'interface de test graphique (test.html) |



##  Installation

```bash
# Cloner le dépôt
git clone https://github.com/tsiryRIVOSON/smartfood-api.git

# Aller dans le dossier
cd smartfood-api

# Installer les dépendances
npm install
________________________________________
🚀 Lancement
bash
# Démarrer le serveur
node index.js

# Le serveur tourne sur : http://localhost:3000
Pour une interface de test graphique, ouvrez test.html dans votre navigateur.
________________________________________
🧪 Tests
bash
# Lancer les tests avec couverture
npm test
Résultat des tests
text
 PASS  __tests__/commande.test.js
  POST /api/food-order
    ✅ Prix de base = 10 euros
    ✅ Taille Maxi = +2 euros
    ✅ Option Vegan = +1.50 euro
    ✅ Livraison > 5km = +4 euros
    ✅ Taxe heure de pointe +10%

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Coverage:    96.77%
________________________________________
📡 API
Endpoint
text
POST /api/food-order
Paramètres
Paramètre	Type	Description	Exemple
taille	string	Taille du menu : Normal ou Maxi	"Maxi"
estVegan	boolean	Option steak végétal	true
distanceKm	number	Distance de livraison en km	6
heure	number	Heure de commande (0-23)	13
Règles métier
Règle	Condition	Effet
Taille Maxi	taille === "Maxi"	+2€
Option Vegan	estVegan === true	+1.50€
Livraison longue	distanceKm > 5	+4€
Dessert gratuit	total > 30€	-5€
Heure de pointe	12h - 14h	+10%
Exemple de requête
bash
curl -X POST http://localhost:3000/api/food-order \
  -H "Content-Type: application/json" \
  -d '{"taille":"Maxi","estVegan":true,"distanceKm":6,"heure":13}'
Réponse
json
{
  "total": "19.25"
}
________________________________________
🔄 Pipeline CI/CD
Le projet utilise GitHub Actions avec une Quality Gate stricte.
yaml
Workflow : Controle Qualité
├── Installation des dépendances
├── ESLint (complexité max: 5)
├── Tests Jest (> 70% couverture)
└── Analyse SonarCloud
Statut du pipeline
https://github.com/tsiryRIVOSON/smartfood-api/actions/workflows/ci.yml/badge.svg
________________________________________
📊 Qualimétrie
Métriques avant/après refactoring
Métrique	Avant	Après	Progression
Complexité V(G)	29	12	-58%
Couverture	0%	95.3%	+95.3%
Dette technique	1h	25min	-58%
Fiabilité	C	A	+2 niveaux
Dashboard SonarCloud
👉 Voir le projet sur SonarCloud
________________________________________
📁 Structure du projet
text
smartfood-api/
├── .eslintrc.json              # Configuration ESLint
├── .gitignore                  # Fichiers ignorés par Git
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline CI/CD
├── __tests__/
│   └── commande.test.js        # Tests unitaires
├── coverage/                   # Rapport de couverture (généré)
├── app.js                      # Code refactorisé (propre)
├── index.js                    # Code initial (avec dette technique)
├── package.json                # Configuration Node.js
├── sonar-project.properties    # Configuration SonarCloud
├── test.html                   # Interface de test
├── README.md                   # Documentation
└── RAPPORT.md                  # Rapport final
________________________________________
🛠️ Technologies utilisées
Outil	Usage
Node.js	Environnement d'exécution
Express	Framework serveur HTTP
Jest	Framework de tests
Supertest	Tests HTTP
ESLint	Linter JavaScript
SonarCloud	Analyse de qualité
GitHub Actions	Pipeline CI/CD
Git	Gestion de versions
________________________________________
📝 Licence
Projet réalisé dans le cadre du Master M2 IA GID 2025-2026.
________________________________________
🔗 Liens
•	GitHub : https://github.com/tsiryRIVOSON/smartfood-api
•	SonarCloud : Dashboard du projet
