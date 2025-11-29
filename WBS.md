# WBS – Projet : Assistant de Gestion de Projet Alimenté par l’IA


# Table des matières

* [1. Gestion de projet](#1-gestion-de-projet)
* [2. Ingénierie des exigences](#2-ingénierie-des-exigences)
* [3. Architecture Système & Logicielle](#3-architecture-système--logicielle)
* [4. DevOps & Infrastructure](#4-devops--infrastructure)
* [5. Développement Backend](#5-développement-backend)
* [6. Développement Frontend](#6-développement-frontend)
* [7. Développement IA/NLP](#7-développement-ianlp)
* [8. Base de données & stockage](#8-base-de-données--stockage)
* [9. Tests & Assurance Qualité](#9-tests--assurance-qualité)
* [10. Documentation](#10-documentation)
* [11. Déploiement, Démonstration & Présentation](#11-déploiement-démonstration--préparation-de-présentation)

---

# 1. Gestion de projet

## 1.1 Planification & Coordination

* 1.1.1 Définir le périmètre et les contraintes du projet
* 1.1.2 Créer le planning global (feuille de route sur 1,5 an)
* 1.1.3 Décider des ressources nécessaires
* 1.1.4 Évaluation des risques & plan de mitigation
* 1.1.5 Définir la structure des sprints et la gestion du backlog
* 1.1.6 Établir les standards de documentation

## 1.2 Réunions & Suivi

* 1.2.1 Mettre en place la structure de communication et de reporting
* 1.2.2 Réunions hebdomadaires de sprint
* 1.2.3 Revues mensuelles d’avancement
* 1.2.4 Évaluation des risques & mitigation

## 1.3 Mise en place des outils & de l’infrastructure

* 1.3.1 Configuration du dépôt Git
* 1.3.2 Squelette du workflow CI
* 1.3.3 Tableaux Trello internes pour le développement

## 1.4 Gestion Agile & Processus d'équipe

* 1.4.1 Définition des cycles de "Sprints" (Itérations de 2 semaines)
* 1.4.2 Rotation des rôles (Scrum Master, Product Owner)

---

# 2. Ingénierie des exigences

## 2.1 Collecte des exigences

* 2.1.1 Analyse des solutions similaires (analyse concurrentielle)
* 2.1.2 Identifier les personas utilisateurs
* 2.1.3 Identifier les exigences fonctionnelles
* 2.1.4 Identifier les exigences non fonctionnelles

## 2.2 Définition des User Stories

* 2.2.1 US pour prompt → générateur d’US
* 2.2.2 US pour transcription audio → générateur d’US
* 2.2.3 US pour l’intégration Trello
* 2.2.4 US pour la navigation UI web
* 2.2.5 Affinement des critères d’acceptation

## 2.3 Exigences d’architecture

* 2.3.1 Structure de données pour texte capturé
* 2.3.2 Structure pour user stories générées
* 2.3.3 Exigences de l’API Trello
* 2.3.4 Architecture système & stack technique
* 2.3.5 Privacy by Design & RGPD

## 2.4 Exigences légales & sécurité

* 2.4.1 Revue légale & conformité
* 2.4.2 Conformité de sécurité

---

# 3. Architecture Système & Logicielle

## 3.1 Architecture haut niveau

* 3.1.1 Carte de flux de données
* 3.1.2 Diagramme d’architecture
* 3.1.3 Identification des points d’intégration

## 3.2 Architecture Backend

* 3.2.1 Architecture API & endpoints
* 3.2.2 Schéma de base de données
* 3.2.3 Middleware Trello
* 3.2.4 Sécurité & authentification

## 3.3 Architecture Frontend

* 3.3.1 Découpage des composants
* 3.3.2 Structure de routing
* 3.3.3 Plan d’intégration audio

## 3.4 Architecture IA & NLP

* 3.4.1 Choix du moteur STT
* 3.4.2 Pipeline NLP
* 3.4.3 Choix modèle de génération d’US

---

# 4. DevOps & Infrastructure

## 4.1 Gestion des environnements

* 4.1.1 Définir les environnements
* 4.1.2 Secrets & variables
* 4.1.3 Versioning & tagging

## 4.2 Conteneurisation

* 4.2.1 Dockerfiles
* 4.2.2 docker-compose
* 4.2.3 Environnement reproductible

## 4.3 CI/CD

* 4.3.1 CI (lint, tests, build)
* 4.3.2 CD (déploiement)
* 4.3.3 Gestion des artefacts

## 4.4 Hébergement

* 4.4.1 Plateforme cible
* 4.4.2 Réseau & sécurité

## 4.5 Monitoring & Logs

* 4.5.1 Journaux backend
* 4.5.2 Métriques
* 4.5.3 Alerting

## 4.6 Scalabilité

* 4.6.1 Analyse de charge
* 4.6.2 Optimisation IA

---

# 5. Développement Backend

## 5.1 Backend général

* 5.1.1 Environnement serveur
* 5.1.2 Authentification
* 5.1.3 Sessions utilisateur
* 5.1.4 Rate limiting
* 5.1.5 Gestion des rôles
* 5.1.6 API gateway

## 5.2 Services Audio & Texte

* 5.2.1 Upload audio
* 5.2.2 Streaming temps réel
* 5.2.3 Intégration Whisper
* 5.2.4 Normalisation texte
* 5.2.5 Module résumé de réunion

## 5.3 Moteur US

* 5.3.1 Générateur basé prompts
* 5.3.2 Pipeline NLP/LLM
* 5.3.3 Règles de formatage
* 5.3.4 Détection doublons
* 5.3.5 Classificateur de priorité
* 5.3.6 Scoring & validation

## 5.4 Intégration Trello

* 5.4.1 OAuth
* 5.4.2 Moteur de synchronisation
* 5.4.3 Sélection de board
* 5.4.4 Création automatique
* 5.4.5 Mapping labels
* 5.4.6 Ingestion données
* 5.4.7 Gestion d’erreurs
* 5.4.8 Synchronisation bidirectionnelle

## 5.5 Reporting

* 5.5.1 Rapport par labels
* 5.5.2 Rapport par membre
* 5.5.3 Rapport par période
* 5.5.4 Export PDF/CSV
* 5.5.5 Analytique générale

---

# 6. Développement Frontend

## 6.1 UI – Général

* 6.1.1 Page d’accueil
* 6.1.2 Menu
* 6.1.3 Authentification
* 6.1.4 Paramètres & connexion Trello

## 6.2 Interface prompt

* 6.2.1 Soumission du prompt
* 6.2.2 Écran de chargement
* 6.2.3 Affichage US générées
* 6.2.4 Envoi vers Trello

## 6.3 Enregistrement audio

* 6.3.1 Permissions micro
* 6.3.2 Boutons start/stop
* 6.3.3 Visualiseur d’onde
* 6.3.4 Upload audio

## 6.4 Analyse de conversation

* 6.4.1 Transcription
* 6.4.2 US suggérées
* 6.4.3 Actions
* 6.4.4 Tout envoyer vers Trello

## 6.5 Rapports

* 6.5.1 Filtres label
* 6.5.2 Filtres membre
* 6.5.3 Graphiques
* 6.5.4 Export

---

# 7. Base de données & stockage

## 7.1 Base de données

* 7.1.1 Choix BD
* 7.1.2 Schéma : utilisateurs, transcriptions, US générées, jetons Trello, logs
* 7.1.3 Sauvegarde & restauration

## 7.2 Stockage

* 7.2.1 Stockage audio
* 7.2.2 Cache IA
* 7.2.3 Nettoyage

---

# 8. Développement IA/NLP

## 8.1 Préparation données

* 8.1.1 Collecte audio
* 8.1.2 Normalisation
* 8.1.3 Dataset d’US

## 8.2 Transcription audio

* 8.2.1 Configuration Whisper
* 8.2.2 Benchmark
* 8.2.3 Filtres anti-bruit
* 8.2.4 Cache audio
* 8.2.5 Ajustements précision

## 8.3 NLP

* 8.3.1 Extraction d’entités
* 8.3.2 Segmentation
* 8.3.3 Détection d’intentions
* 8.3.4 Détection de priorité

## 8.4 Génération US

* 8.4.1 Templates
* 8.4.2 LLM
* 8.4.3 Système hybride
* 8.4.4 Suppression doublons
* 8.4.5 Optimisation

---

# 9. Tests & Assurance Qualité

## 9.1 Stratégie

* 9.1.1 Tests unitaires
* 9.1.2 Tests intégration
* 9.1.3 Tests E2E
* 9.1.4 Tests sécurité

## 9.2 Backend

* 9.2.1 Unitaires endpoints
* 9.2.2 Validation IA
* 9.2.3 Tests charge
* 9.2.4 Tests sécurité API

## 9.3 Frontend

* 9.3.1 Tests composants
* 9.3.2 Navigateurs
* 9.3.3 Responsivité
* 9.3.4 UX

## 9.4 Intégration

* 9.4.1 Pipeline STT → NLP → US
* 9.4.2 US → Trello
* 9.4.3 Précision des rapports

## 9.5 Acceptation – Beta

* 9.5.1 Alpha interne
* 9.5.2 Beta privée
* 9.5.3 Feedback
* 9.5.4 Corrections UX
* 9.5.5 Stabilité & performance

---

# 10. Documentation

## 10.1 Documentation technique

* 10.1.1 Diagrammes
* 10.1.2 Documentation API
* 10.1.3 Dictionnaire de données
* 10.1.4 Documentation IA

## 10.2 Documentation utilisateur

* 10.2.1 Guide prompt
* 10.2.2 Fonction audio
* 10.2.3 Intégration Trello
* 10.2.4 Rapports

## 10.3 Documentation développeur

* 10.3.1 Onboarding
* 10.3.2 Standards de code
* 10.3.3 CI/CD

---

# 11. Déploiement, Démonstration & Préparation de Présentation

## 11.1 Étude de marché

* 11.1.1 Groupes cibles
* 11.1.2 Proposition de valeur
* 11.1.3 Concurrence

## 11.2 Modèle économique

* 11.2.1 Tarification
* 11.2.2 Canaux marketing
* 11.2.3 Estimation coûts

## 11.3 Déploiement

* 11.3.1 Infrastructure
* 11.3.2 Déploiement cloud
* 11.3.3 Monitoring
* 11.3.4 CI/CD
* 11.3.5 Sécurité
* 11.3.6 Scalabilité
* 11.3.7 Optimisation coûts

## 11.4 Présentation scolaire

* 11.4.1 Slides
* 11.4.2 Script de démo
* 11.4.3 Q&A technique
* 11.4.4 Répétitions
* 11.4.5 Présentation finale

---
