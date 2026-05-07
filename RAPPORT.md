# Rapport de Projet - SmartFood API (Sujet 11)
## TP Qualimétrie et Dette Technique

**Équipe :** 

-ANDRIANJAKA Anjarasoa Fitahiana   1097 H-F

-RIVOSON Tsiry Nomenjanahary       3825

-RAINIKALA Takoza Jean Christelos  3870 

**Date :** 07/05/2026  
**Dépôt GitHub :** [https://github.com/tsiryRIVOSON/smartfood-api](https://github.com/tsiryRIVOSON/smartfood-api)

---

## 1. Contexte

API de commande de nourriture SmartFood développée avec Node.js/Express.
Route : `POST /api/food-order`

---

## 2. Captures d'écran

### Capture 1 : Dashboard SonarCloud AVANT (Dette élevée, V(G) rouge, 0% coverage)


![Capture 1 Avant](capture1.png)

| Métrique | Valeur |
|----------|--------|
| Complexité Cyclomatique V(G) | 29 |
| Dette Technique | 1 heure |
| Couverture | 0% |
| Fiabilité | C |

---

### Capture 2 : Pipeline GitHub Actions qui ÉCHOUE (Le Gardien)

![Capture 2 Échec](capture2.png)

---

### Capture 3 : Dashboard SonarCloud APRÈS (Code propre, Note A, >70% coverage)

![Capture 3 Après](capture3.png)

| Métrique | Valeur |
|----------|--------|
| Complexité Cyclomatique V(G) | 12 |
| Dette Technique | 25 minutes |
| Couverture | 95.3% |
| Fiabilité | A |

---

### Capture 4 : Pipeline GitHub Actions qui RÉUSSIT

![Capture 4 Succès](capture4.png)

---

## 3. Analyse GQM (Goal, Question, Metric)

### Goal (Objectif)
Réduire la dette technique et améliorer la qualité du code de l'API SmartFood.

### Question
Comment transformer un code complexe et non testé en un code maintenable respectant les standards industriels ?

### Metric (Métriques)
| Métrique | Avant | Après | Progression |
|----------|-------|-------|-------------|
| Complexité V(G) | 29 | 12 | -58% |
| Couverture | 0% | 95.3% | +95.3% |
| Dette technique | 1h | 25min | -58% |
| Fiabilité | C | A | +2 niveaux |

### Techniques de refactoring utilisées
1. **Extraction de fonctions** : La fonction unique `calculerPrixTotal()` a été découpée en 5 fonctions distinctes (une par règle métier)
2. **Élimination des conditions imbriquées** : Remplacement des `if/else` imbriqués par des fonctions indépendantes
3. **Suppression du code mort** : Suppression de la ligne inutile `prix = prix;`
4. **Tests unitaires** : Création de 5 tests avec Jest couvrant toutes les règles métier

---

## 4. Conclusion

Ce TP a démontré l'importance de la qualimétrie dans un cycle de développement :
1. **Identifier** la dette technique (ESLint, SonarCloud)
2. **Bloquer** le code de mauvaise qualité (Quality Gate, GitHub Actions)
3. **Corriger** en toute sécurité (tests unitaires avant refactoring)
4. **Valider** l'amélioration par des métriques objectives