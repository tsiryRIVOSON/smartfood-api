# Contribution Guide - SmartFood API 🍔

Ce document explique comment contribuer correctement au projet SmartFood.


## 1. Cloner le projet

```bash
git clone <URL_DU_REPO>
cd smartfood-api

2. Créer une branche

Chaque membre doit travailler sur une branche séparée :

git checkout -b nom-de-ta-branche

Exemples :

feature-tests
fix-calcul-order
docs-update

3. Installer les dépendances
npm install

4. Lancer le projet
npm start

5. Lancer les tests
npm test

6. Règles de commit

Les commits doivent être clairs et descriptifs :

Exemples :

Ajout validation des règles métier
Correction bug calcul livraison
Ajout tests unitaires API
Mise à jour documentation

❌ Éviter :

test
update
fix

7. Workflow Git
git add .
git commit -m "Description claire de la modification"
git push origin nom-de-la-branche

8. Pull Request

Après le push :

Aller sur GitHub
Créer une Pull Request
Vérifier les modifications
Demander review si nécessaire

9. Bonnes pratiques
Ne pas modifier directement main
Toujours travailler sur une branche
Tester le code avant de push
Respecter la structure du projet
Écrire du code lisible et commenté

10. Objectif du projet

Ce projet vise à :

calculer correctement les commandes SmartFood
appliquer les règles métier
garantir la qualité via tests et CI/CD

Merci pour votre contribution !