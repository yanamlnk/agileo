## Table des matières

1. [Gestion de projet — Description détaillée](#1-gestion-de-projet--description-détaillée)
    - 1.1 [Planification & Coordination](#11-planification--coordination)
    - 1.2 [Réunions & Suivi](#12-réunions--suivi)
    - 1.3 [Mise en place des outils & de l’infrastructure](#13-mise-en-place-des-outils--de-linfrastructure)
    - 1.4 [Gestion Agile & Processus d'équipe](#14-gestion-agile--processus-déquipe)
2. [Ingénierie des exigences — Description détaillée](#2-ingénierie-des-exigences--description-détaillée)
    - 2.1 [Collecte des exigences](#21-collecte-des-exigences)
    - 2.2 [Définition des User Stories](#22-définition-des-user-stories)
    - 2.3 [Exigences d’architecture](#23-exigences-darchitecture)
    - 2.4 [Exigences légales & sécurité](#24-exigences-légales--sécurité)
3. [Architecture Système & Logicielle — Description détaillée](#3-architecture-système--logicielle--description-détaillée)
    - 3.1 [Architecture haut niveau](#31-architecture-haut-niveau)
    - 3.2 [Architecture Backend](#32-architecture-backend)
    - 3.3 [Architecture Frontend](#33-architecture-frontend)
    - 3.4 [Architecture IA & NLP](#34-architecture-ia--nlp)
4. [DevOps & Infrastructure — Description détaillée](#4-devops--infrastructure--description-détaillée)
    - 4.1 [Gestion des environnements](#41-gestion-des-environnements)
    - 4.2 [Conteneurisation](#42-conteneurisation)
    - 4.3 [CI/CD](#43-cicd)
    - 4.4 [Hébergement](#44-hébergement)
    - 4.5 [Monitoring & Logs](#45-monitoring--logs)
    - 4.6 [Scalabilité](#46-scalabilité)
5. [Développement Backend — Description détaillée](#5-développement-backend--description-détaillée)
    - 5.1 [Backend général](#51-backend-général)
    - 5.2 [Services Audio & Texte](#52-services-audio--texte)
    - 5.3 [Moteur US](#53-moteur-us)
    - 5.4 [Intégration Trello](#54-intégration-trello)
    - 5.5 [Reporting](#55-reporting)
6. [Développement Frontend — Description détaillée](#6-développement-frontend--description-détaillée)
  - 6.1 [UI – Général](#61-ui--général)
  - 6.2 [Interface prompt](#62-interface-prompt)
  - 6.3 [Enregistrement audio](#63-enregistrement-audio)
  - 6.4 [Analyse de conversation](#64-analyse-de-conversation)
  - 6.5 [Rapports](#65-rapports)
7. [Base de données & stockage — Description détaillée](#7-base-de-données--stockage--description-détaillée)
  - 7.1 [Base de données](#71-base-de-données)
  - 7.2 [Stockage](#72-stockage)
8. [Développement IA/NLP — Description détaillée](#8-développement-ianlp--description-détaillée)
  - 8.1 [Préparation données](#81-préparation-données)
  - 8.2 [Transcription audio](#82-transcription-audio)
  - 8.3 [NLP](#83-nlp)
  - 8.4 [Génération US](#84-génération-us)
9. [Tests & Assurance Qualité — Description détaillée](#9-tests--assurance-qualité--description-détaillée)
  - 9.1 [Stratégie](#91-stratégie)
  - 9.2 [Backend](#92-backend)
  - 9.3 [Frontend](#93-frontend)
  - 9.4 [Intégration](#94-intégration)
  - 9.5 [Acceptation – Beta](#95-acceptation--beta)
10. [Documentation — Description détaillée](#10-documentation--description-détaillée)
  - 10.1 [Documentation technique](#101-documentation-technique)
  - 10.2 [Documentation utilisateur](#102-documentation-utilisateur)
  - 10.3 [Documentation développeur](#103-documentation-développeur)
11. [Déploiement, Démonstration & Préparation de Présentation — Description détaillée](#11-déploiement-démonstration--préparation-de-présentation--description-détaillée)
  - 11.1 [Étude de marché](#111-étude-de-marché)
  - 11.2 [Modèle économique](#112-modèle-économique)
  - 11.3 [Déploiement](#113-déploiement)
  - 11.4 [Présentation scolaire](#114-présentation-scolaire)

# **1. Gestion de projet — Description détaillée**

## **1.1 Planification & Coordination**

### **1.1.1 Définir le périmètre et les contraintes du projet**

Clarification des objectifs du projet, des fonctionnalités incluses et exclues, et des limites techniques, temporelles et humaines. Cette étape garantit que toute l’équipe partage la même vision et évite les dérives de périmètre.

### **1.1.2 Créer le planning global (feuille de route sur 1,5 an)**

Élaboration d’un calendrier de haut niveau indiquant les grandes phases du projet, leurs dates estimées et les dépendances clés. Ce planning servira de guide général pour suivre l’avancement et adapter les priorités.

### **1.1.3 Décider des ressources nécessaires**

Identification des compétences requises (techniques, design, gestion) ainsi que du matériel et des outils nécessaires. Cette étape permet de répartir efficacement les tâches selon les forces de chacun.

### **1.1.4 Évaluation des risques & plan de mitigation**

Analyse des risques potentiels (retards, contraintes techniques, surcharge de travail) et préparation d’un plan de réponses pour limiter leur impact. Cela garantit une meilleure résilience face aux imprévus.

### **1.1.5 Définir la structure des sprints et la gestion du backlog**

Organisation du travail en cycles courts (sprints) et mise en place d’un backlog clair, priorisé et toujours à jour. Cela assure un rythme constant d’avancées mesurables et une bonne visibilité sur les prochaines tâches.

### **1.1.6 Établir les standards de documentation**

Définition d’un ensemble de règles simples pour documenter le code, les décisions techniques et les processus. L’objectif est d'assurer cohérence, clarté et transmission facile de l’information entre tous les membres de l’équipe.

---

## **1.2 Réunions & Suivi**

### **1.2.1 Mettre en place la structure de communication et de reporting**

Choix des canaux de communication (chat, réunions, documents partagés) et définition de la fréquence des mises à jour. Cela assure que chacun reste informé et que l’information circule efficacement.

### **1.2.2 Réunions hebdomadaires de sprint**

Sessions rapides pour faire le point sur ce qui a été fait, ce qui reste à faire et les obstacles rencontrés. Ces réunions dynamisent l’équipe et permettent d'ajuster rapidement le travail.

### **1.2.3 Revues mensuelles d’avancement**

Présentation mensuelle des résultats obtenus, des livrables atteints et des prochaines étapes. C’est l’occasion de vérifier si le projet respecte sa trajectoire globale.

### **1.2.4 Évaluation des risques & mitigation**

Réexamen régulier des risques au fur et à mesure que le projet avance. Si de nouveaux risques apparaissent, des actions correctives sont ajoutées rapidement pour en limiter l’impact.

---

## **1.3 Mise en place des outils & de l’infrastructure**

### **1.3.1 Configuration du dépôt Git**

Mise en place du dépôt source, des branches principales, des règles de fusion et des protections nécessaires. Objectif : garantir une collaboration fluide et éviter les conflits de code.

### **1.3.2 Squelette du workflow CI**

Création d’un premier pipeline d’intégration continue permettant d’automatiser les tests, la compilation ou la validation du code. Cela améliore la qualité du projet dès le début.

### **1.3.3 Tableaux Trello internes pour le développement**

Configuration des tableaux Kanban pour suivre les tâches, leur avancée et les priorités. C’est un outil simple et visuel pour maintenir l’organisation de l’équipe.

---

## **1.4 Gestion Agile & Processus d'équipe**

### **1.4.1 Définition des cycles de "Sprints" (Itérations de 2 semaines)**

Détermination d’un rythme régulier pour la livraison de nouvelles fonctionnalités. Chaque sprint doit fournir un résultat concret permettant de mesurer l’avancement.

### **1.4.2 Rotation des rôles (Scrum Master, Product Owner)**

Mise en place d’un système où les membres de l’équipe se relaient dans les rôles de coordination et de priorisation. Cela donne une expérience complète à chacun et répartit équitablement les responsabilités.

---

# **2. Ingénierie des exigences — Description détaillée**

## **2.1 Collecte des exigences**

### **2.1.1 Analyse des solutions similaires (analyse concurrentielle)**

Étude des assistants de gestion de projet existants (IA de transcription, générateurs de tâches, outils Trello/Notion, etc.) afin d’identifier leurs limites. Cette analyse permet de définir clairement ce que notre solution apporte de nouveau : génération automatique de user stories à partir de discussions en temps réel.

### **2.1.2 Identifier les personas utilisateurs**

Définition des profils types qui utiliseront l’application : chefs de projet, développeurs, étudiants en gestion, équipes Scrum, etc. Chaque persona aide à comprendre les besoins réels : gagner du temps, réduire les oublis, clarifier les décisions d’équipe.

### **2.1.3 Identifier les exigences fonctionnelles**

Recensement des fonctionnalités essentielles :

* Analyse d’un prompt texte pour générer des user stories
* Enregistrement audio et analyse de conversation
* Interface Web simple pour naviguer entre prompt, audio et résultats
* Intégration complète avec Trello (création automatique de cartes)
* Génération de rapports basés sur labels, membres ou statuts.

### **2.1.4 Identifier les exigences non fonctionnelles**

Définition des contraintes techniques : rapidité d’analyse, précision de la transcription, robustesse, performance, respect du RGPD, simplicité d’usage, interfaces réactives. Ces exigences garantissent que le système reste fluide et fiable pour les utilisateurs.

---

## **2.2 Définition des User Stories**

### **2.2.1 US pour prompt → générateur d’US**

Création de user stories décrivant l’expérience utilisateur lorsqu’il saisit un texte pour générer des US. Objectif : définir clairement les étapes, les retours du système et les critères d’acceptation.

### **2.2.2 US pour transcription audio → générateur d’US**

Définition des user stories liées à l’enregistrement audio, à la conversion du discours en texte et à la génération automatique d’histoires. Cette partie couvre l’interface, le traitement du son, et la présentation des US générées.

### **2.2.3 US pour l’intégration Trello**

Rédaction des user stories décrivant comment l’utilisateur peut connecter son compte, accepter ou rejeter une US et la synchroniser instantanément avec Trello. Cela inclut les permissions, les labels, et les champs automatiques.

### **2.2.4 US pour la navigation UI web**

Conception des user stories sur la manière dont l’utilisateur navigue dans l’application : page d’accueil, section prompt, section audio, page des US générées, paramètres Trello, etc.

### **2.2.5 Affinement des critères d’acceptation**

Définition précise et mesurable des conditions nécessaires pour valider chaque US. Ces critères assurent la cohérence, limitent les ambiguïtés et facilitent les tests.

---

## **2.3 Exigences d’architecture**

### **2.3.1 Structure de données pour texte capturé**

Définition du format et du stockage du texte issu des prompts ou des transcriptions audio (nettoyé, horodaté, segmenté). Cette structure garantit une bonne qualité pour le modèle qui génère les user stories.

### **2.3.2 Structure pour user stories générées**

Conception d’un modèle de données standardisé pour les US : titre, description, critères d’acceptation, labels, priorité. La structure doit être compatible avec Trello pour faciliter la synchronisation.

### **2.3.3 Exigences de l’API Trello**

Identification des endpoints, des permissions, des contraintes de taux et des formats nécessaires pour créer, modifier ou étiqueter des cartes Trello directement depuis notre application.

### **2.3.4 Architecture système & stack technique**

Choix des technologies principales :

* Backend pour traitement IA / transcription
* Frontend web pour interaction utilisateur
* Pipeline IA pour générer des US
* Choix du cloud, bases de données, services d’hébergement
  L’architecture doit être scalable, modulaire et sécurisée.

### **2.3.5 Privacy by Design & RGPD**

Définition des mécanismes garantissant la protection des données : anonymisation des transcriptions, consentement explicite avant enregistrement, suppression simple des données utilisateur, stockage conforme au RGPD.

---

## **2.4 Exigences légales & sécurité**

### **2.4.1 Revue légale & conformité**

Analyse des obligations légales liées à l’enregistrement audio, à l'utilisation de données personnelles et à l’intégration avec Trello. Documentation des obligations d’information et de consentement.

### **2.4.2 Conformité de sécurité**

Définition des mesures de protection contre les accès non autorisés : authentification sécurisée, limitation des permissions Trello, chiffrement des données sensibles, gestion stricte des clés API.

---

# **3. Architecture Système & Logicielle — Description détaillée**

## **3.1 Architecture haut niveau**

### **3.1.1 Carte de flux de données**

Définition du parcours complet des données :

1. Entrée utilisateur (prompt texte ou enregistrement audio)
2. Traitement IA (transcription, analyse, génération d’US)
3. Stockage temporaire des données
4. Affichage des résultats dans l’interface
5. Envoi des US sélectionnées vers Trello
Ce schéma clarifie comment l’information circule dans tout le système.

### **3.1.2 Diagramme d’architecture**

Représentation visuelle des principaux blocs techniques : frontend web, backend API, moteur IA, base de données, service audio, connecteur Trello. Ce diagramme montre comment ces blocs communiquent entre eux et où se situent les responsabilités principales.

### **3.1.3 Identification des points d’intégration**

Liste des interactions externes indispensables :

* API de transcription audio (STT)
* API du modèle génératif (pour produire les user stories)
* API Trello pour synchroniser les tâches
Identifier ces points permet de définir les contraintes techniques et les mécanismes de sécurité nécessaires.

---

## **3.2 Architecture Backend**

### **3.2.1 Architecture API & endpoints**

Conception d’une API REST structurée, avec des endpoints dédiés :

* Analyse de prompt
* Enregistrement et traitement audio
* Génération d’US
* Connexion Trello et création de cartes
Cette structure rend le backend robuste, clair et facile à étendre.

### **3.2.2 Schéma de base de données**

Définition de la structure des données stockées :

* Sessions de discussion
* Transcriptions audio
* User stories générées
* Informations de connexion Trello
La base doit être optimisée pour stocker temporairement des données analysées et assurer une suppression simple en conformité RGPD.

### **3.2.3 Middleware Trello**

Création d’un module dédié qui gère les échanges avec Trello : authentification OAuth, choix du board, synchronisation des cartes, traitement des erreurs et limitations de l’API. Ce middleware isole toute la logique Trello pour la rendre réutilisable et maintenable.

### **3.2.4 Sécurité & authentification**

Mise en place d’un système sécurisé incluant :

* Gestion des tokens Trello
* Authentification utilisateur (session ou OAuth)
* HTTPS systématique
* Validation stricte des entrées API
Ces mesures protègent les données personnelles et les comptes Trello des utilisateurs.

---

## **3.3 Architecture Frontend**

### **3.3.1 Découpage des composants**

Organisation de l’interface en composants modulaires :

* Zone de saisie pour prompt
* Composant d’enregistrement audio
* Liste des user stories générées
* Tableau d’intégration Trello
* Pages de paramètres / connexion
Cette structure facilite le développement et la maintenance.

### **3.3.2 Structure de routing**

Définition des pages principales du site :

* Accueil / choix du mode (prompt ou audio)
* Page de génération d’US
* Page de résultats audio
* Page de connexion Trello
* Page de rapports
Une navigation simple encourage l’adoption rapide par de nouveaux utilisateurs.

### **3.3.3 Plan d’intégration audio**

Mise en place d’un système front-end pour capturer l’audio via navigateur : démarrage/arrêt de l’enregistrement, affichage du statut, et envoi sécurisé vers le backend. Cette couche garantit une expérience fluide pour la collecte d’informations.

---

## **3.4 Architecture IA & NLP**

### **3.4.1 Choix du moteur STT**

Sélection d’un service de Speech-to-Text fiable (ex. Whisper ou équivalent) offrant une bonne précision, faible latence et support multilingue. L’objectif est d’obtenir une transcription propre avant toute analyse NLP.

### **3.4.2 Pipeline NLP**

Définition du futur pipeline IA :

1. Nettoyage et segmentation du texte
2. Détection de thèmes / intentions dans la conversation
3. Extraction des éléments actionnables
4. Transformation en structure exploitable pour la génération d’US
Ce pipeline sert de colonne vertébrale à l’intelligence du système.

### **3.4.3 Choix modèle de génération d’US**

Sélection du modèle IA (type LLM) capable de transformer du texte brut en user stories claires, cohérentes et complètes. Le choix doit équilibrer qualité de génération, coût d’usage et rapidité de réponse.

---

# **4. DevOps & Infrastructure — Description détaillée**

## **4.1 Gestion des environnements**

### **4.1.1 Définir les environnements**

Définition de trois environnements distincts :

* **Développement** pour coder et tester rapidement
* **Staging** pour valider les fonctionnalités avant publication
* **Production** pour les utilisateurs réels
Cela garantit de la stabilité tout en permettant des améliorations continues.

### **4.1.2 Secrets & variables**

Gestion sécurisée des informations sensibles (API keys Trello, clés IA, tokens utilisateurs). Les secrets sont stockés dans un coffre sécurisé (ex. vault ou variables GitHub/CI) afin d’éviter toute fuite de données.

### **4.1.3 Versioning & tagging**

Mise en place d’un système de versionnage basé sur Git et tags semver (ex. v1.0.0). Chaque release identifie clairement les nouveautés, corrections et évolutions, ce qui facilite le suivi et les déploiements.

---

## **4.2 Conteneurisation**

### **4.2.1 Dockerfiles**

Création d’un Dockerfile optimisé pour le backend (API, IA pipeline) et un autre pour le frontend. Cela permet d’isoler les dépendances et de reproduire l’environnement à l’identique.

### **4.2.2 docker-compose**

Mise en place d’un docker-compose pour lancer simultanément l’API, la base de données et éventuellement un service audio local. Utile pour faciliter les tests et le développement en équipe.

### **4.2.3 Environnement reproductible**

Grâce aux conteneurs, n’importe quel membre du projet peut lancer l’application sans configuration complexe. Cela réduit les erreurs dues aux différences de machines.

---

## **4.3 CI/CD**

### **4.3.1 CI (lint, tests, build)**

Mise en place d’un pipeline de tests automatisés à chaque commit :

* Linting du code
* Tests unitaires
* Build automatique du frontend et backend
Cette étape garantit la qualité continue du projet.

### **4.3.2 CD (déploiement)**

Automatisation du déploiement vers l’environnement de production ou de staging après validation. Le processus réduit les erreurs humaines et accélère la mise à jour du service.

### **4.3.3 Gestion des artefacts**

Stockage des artefacts générés par la CI : images Docker, bundles frontend, modèles IA. Permet de déployer rapidement des versions testées et stables.

---

## **4.4 Hébergement**

### **4.4.1 Plateforme cible**

Choix de la plateforme d’hébergement (par exemple un cloud provider type AWS, Render ou Railway) capable de supporter le backend, le stockage, l’IA et la base de données. L’objectif est de garantir disponibilité et performance.

### **4.4.2 Réseau & sécurité**

Configuration des règles de pare-feu, certificats HTTPS, limitation des ports ouverts. Mise en place de protections contre les attaques courantes (rate limiting, validation d’entrée, restrictions CORS).

---

## **4.5 Monitoring & Logs**

### **4.5.1 Journaux backend**

Collecte détaillée des logs API : requêtes reçues, erreurs, temps de réponse. Ces logs facilitent le diagnostic lorsque l’IA ou l’intégration Trello rencontre un problème.

### **4.5.2 Métriques**

Suivi de métriques clés comme :

* Temps moyen de transcription audio
* Délai de génération des US
* Nombre d’US envoyées à Trello
Ces données permettent d'améliorer la performance globale.

### **4.5.3 Alerting**

Mise en place d’alertes en cas de panne, erreurs fréquentes, ou surcharge du service IA. Cela garantit une réaction rapide en cas de problème.

---

## **4.6 Scalabilité**

### **4.6.1 Analyse de charge**

Évaluation de la capacité du système à supporter de nombreux utilisateurs simultanés, notamment lors des traitements IA (transcription ou génération de user stories). La charge aide à définir les besoins de montée en puissance.

### **4.6.2 Optimisation IA**

Optimisation du pipeline IA pour réduire les coûts et améliorer la rapidité : caching intelligent, traitements par batch, externalisation de la transcription intensive ou utilisation de modèles plus légers si pertinents.

---

# **5. Développement Backend — Description détaillée**

## **5.1 Backend général**

### **5.1.1 Environnement serveur**

Mise en place d’un serveur backend robuste (API REST) gérant les requêtes provenant du frontend : transcription, génération d’US, interaction Trello, export de rapports. L’environnement assure stabilité, performances et compatibilité avec les services IA.

### **5.1.2 Authentification**

Implémentation d’un système d’authentification sécurisé (sessions ou JWT). Les utilisateurs doivent se connecter pour accéder aux fonctionnalités avancées comme l’intégration Trello ou l’historique de réunions.

### **5.1.3 Sessions utilisateur**

Gestion de sessions permettant d’associer chaque transcription, chaque US générée et chaque action Trello à l’utilisateur correspondant. Cela évite les conflits entre utilisateurs et améliore la personnalisation.

### **5.1.4 Rate limiting**

Limitation du nombre de requêtes par utilisateur pour éviter l’abus de l’API, protéger les services IA et garantir une distribution équitable des ressources.

### **5.1.5 Gestion des rôles**

Introduction éventuelle de rôles simples (ex. utilisateur standard, admin) pour différencier les droits d’accès : génération d’US, gestion des paramètres, accès au reporting avancé.

### **5.1.6 API Gateway**

Point d’entrée unifié pour toutes les requêtes backend. L’API Gateway gère la validation, le routage vers les micro-services (audio, NLP, Trello), la sécurité et la transformation des réponses.

---

## **5.2 Services Audio & Texte**

### **5.2.1 Upload audio**

Endpoint permettant d’envoyer un fichier audio après une réunion. Le backend stocke temporairement le fichier avant traitement et vérifie sa conformité (format, taille…).

### **5.2.2 Streaming temps réel**

Système permettant d’envoyer l’audio en direct vers le backend pour transcription en continu. Idéal pour capter des discussions longues sans attendre la fin de l’enregistrement.

### **5.2.3 Intégration Whisper**

Connexion au moteur de transcription (Whisper ou équivalent) pour convertir la discussion audio en texte exploitable. Cette étape garantit une base textuelle de qualité pour l’analyse NLP.

### **5.2.4 Normalisation texte**

Nettoyage et normalisation de la transcription : suppression des hésitations, découpage en phrases, détection des interlocuteurs. Cela améliore la précision du moteur de génération d’US.

### **5.2.5 Module résumé de réunion**

Un sous-module IA génère un résumé clair de la discussion : décisions clés, tâches évoquées, risques identifiés. Ce résumé est affiché avec les user stories générées pour aider l’utilisateur à valider le contenu.

---

## **5.3 Moteur US**

### **5.3.1 Générateur basé prompts**

Module permettant de transformer un texte saisi par l’utilisateur en un ensemble de user stories structurées. Ce mode est conçu pour tester rapidement l’application ou générer des US simples.

### **5.3.2 Pipeline NLP/LLM**

Pipeline complet de traitement du texte :

1. Analyse sémantique de la conversation
2. Extraction des actions et fonctionnalités évoquées
3. Analyse du contexte projet
4. Génération automatique de user stories cohérentes et complètes

### **5.3.3 Règles de formatage**

Application de règles strictes pour structurer les US :

* Format “En tant que…, je veux…, afin de…”
* Critères d’acceptation clairs
* Labels standardisés
Ces règles garantissent des US professionnelles, prêtes pour Trello.

### **5.3.4 Détection doublons**

Système permettant d’identifier et fusionner les US qui se répètent ou se ressemblent. Cela évite la création de tâches en double lors de longues discussions.

### **5.3.5 Classificateur de priorité**

Modèle IA ou règles heuristiques pour estimer la priorité des US générées (haute, moyenne, basse). Ceci aide l’utilisateur à organiser immédiatement le backlog.

### **5.3.6 Scoring & validation**

Mise en place d’un système permettant à l’utilisateur de valider ou corriger chaque user story générée avant qu’elle soit envoyée vers Trello. Cette étape assure que les US finales reflètent bien la discussion ou le prompt.

Le scoring comporte deux volets :

- Story Points & Priorité: l’utilisateur peut attribuer des story points (difficulté estimée) et une priorité.

- L’utilisateur peut évaluer la pertinence ou la qualité de la user story (ex. étoiles ou note simple).

Ces retours servent à améliorer progressivement le moteur de génération, en ajustant soit les prompts envoyés au modèle IA, soit les règles internes.

---

## **5.4 Intégration Trello**

### **5.4.1 OAuth**

Implémentation de l’authentification Trello via OAuth pour permettre à l’utilisateur de connecter son compte en toute sécurité, sans partager directement ses clés API.

### **5.4.2 Moteur de synchronisation**

Module qui envoie automatiquement les US validées vers Trello. Il gère les créations, mises à jour et retours d’erreur de manière transparente.

### **5.4.3 Sélection de board**

Interface backend permettant de récupérer les boards de l'utilisateur et de les présenter dans le frontend pour choisir où importer les US.

### **5.4.4 Création automatique**

Lorsqu’une US est acceptée, le backend crée directement une carte Trello avec titre, description, labels, checklist éventuelle et critères d’acceptation.

### **5.4.5 Mapping labels**

Système permettant d’aligner les labels générés par l’IA avec les labels existants sur le board Trello. Cela garantit une cohérence visuelle et organisationnelle.

### **5.4.6 Ingestion données**

Chargement de données existantes depuis Trello (labels, membres, statistiques) pour permettre la génération de rapports et améliorations IA.

### **5.4.7 Gestion d’erreurs**

Gestion centralisée des erreurs API Trello : limites de rate, permissions insuffisantes, board introuvable, etc. Le backend renvoie des messages clairs au frontend.

### **5.4.8 Synchronisation bidirectionnelle**

Option avancée permettant de récupérer en temps réel les modifications faites sur Trello (par exemple si quelqu’un déplace une carte). Cela permet d’avoir un tableau Trello toujours synchronisé avec l’application.

---

## **5.5 Reporting**

### **5.5.1 Rapport par labels**

Génération automatique d’un rapport regroupant les tâches selon leurs labels (ex. frontend, backend, design). Utile pour visualiser la charge par catégorie.

### **5.5.2 Rapport par membre**

Analyse des tâches assignées à chaque membre pour comprendre la répartition du travail dans l’équipe.

### **5.5.3 Rapport par période**

Vue chronologique des tâches créées, complétées ou déplacées sur une période. Pratique pour suivre l’évolution du projet.

### **5.5.4 Export PDF/CSV**

Fonction permettant de télécharger les rapports sous forme PDF ou CSV. Idéal pour partager des comptes-rendus de réunions ou des synthèses avec des professeurs/chefs de projet.

### **5.5.5 Analytique générale**

Statistiques globales : nombre d’US générées, taux d’acceptation, temps moyen de réponse IA, interactions Trello. Ces métriques aident à évaluer l’efficacité de l’outil et les axes d’amélioration.

---

# **6. Développement Frontend — Description détaillée**

## **6.1 UI – Général**

### **6.1.1 Page d’accueil**

Page d’entrée présentant les deux modes principaux :

* Génération d’US via **prompt texte**
* Génération d’US via **conversation audio**
  L’objectif est d’orienter l’utilisateur rapidement vers l’action désirée.

### **6.1.2 Menu**

Barre de navigation permettant d’accéder facilement aux sections : prompt, audio, résultats, Trello, rapports, paramètres. Un menu clair facilite la prise en main, même pour des utilisateurs non techniques.

### **6.1.3 Authentification**

Interface simple permettant la connexion/déconnexion de l’utilisateur. Nécessaire pour accéder aux fonctionnalités avancées comme l'historique, Trello ou les exports.

### **6.1.4 Paramètres & connexion Trello**

Page dédiée pour connecter son compte Trello via OAuth, gérer les boards disponibles et ajuster les préférences (langue, format des US, mode sombre, etc.).

---

## **6.2 Interface prompt**

### **6.2.1 Soumission du prompt**

Champ de texte permettant de saisir une idée, une demande ou une fonctionnalité. Un bouton “Générer” déclenche l’appel backend et lance la création des user stories.

### **6.2.2 Écran de chargement**

Affichage d’un loader ou animation pendant que l’IA génère les US. Donne une indication claire sur l’avancement du traitement.

### **6.2.3 Affichage US générées**

Présentation des user stories sous forme de cartes : titre, description, critères d’acceptation. L’utilisateur peut modifier, valider, ajouter des story points ou une priorité.

### **6.2.4 Envoi vers Trello**

Bouton permettant d’envoyer les US validées directement vers le board Trello sélectionné. Confirme la création avec un retour clair (succès / erreur).

---

## **6.3 Enregistrement audio**

### **6.3.1 Permissions micro**

Demande d’autorisation navigateur pour enregistrer la voix de l’utilisateur ou du groupe. Le frontend indique clairement si la permission est accordée ou refusée.

### **6.3.2 Boutons start/stop**

Interface simple avec “Start Recording” et “Stop Recording”. L’état de l’enregistrement est affiché visuellement (ex : voyant rouge / timer).

### **6.3.3 Visualiseur d’onde**

Animation représentant la voix en temps réel (onde son ou niveau audio). Cela rassure l’utilisateur sur le fait que l’enregistrement fonctionne.

### **6.3.4 Upload audio**

Option permettant de téléverser un fichier audio plutôt que d’enregistrer en direct (utile si la discussion a été enregistrée sur un smartphone).

---

## **6.4 Analyse de conversation**

### **6.4.1 Transcription**

Affichage de la transcription brute ou nettoyée produite par le backend. L’utilisateur peut relire la discussion et vérifier la qualité de la capture.

### **6.4.2 US suggérées**

Liste des user stories générées automatiquement à partir de la conversation. Chaque US est éditable, modifiable et peut recevoir des story points ou des tags.

### **6.4.3 Actions**

L’utilisateur peut :

* Valider / refuser une US
* Regrouper plusieurs US
* Ajouter une priorité ou des commentaires
  Cette étape remplace la prise de notes manuelle lors des réunions.

### **6.4.4 Tout envoyer vers Trello**

Bouton permettant d’envoyer l’ensemble des US validées dans un seul flux pour gagner du temps, idéal après une longue discussion en équipe.

---

## **6.5 Rapports**

### **6.5.1 Filtres label**

Permet de filtrer les tâches dans les rapports selon leur catégorie (frontend, backend, design, etc.). Clarifie la répartition du travail dans le projet.

### **6.5.2 Filtres membre**

Affiche les tâches assignées par personne pour analyser la charge de travail, utile pour les équipes Scrum ou projets étudiants.

### **6.5.3 Graphiques**

Représentations visuelles (barres, camemberts, timelines) montrant la création de tâches, évolution du backlog, distribution par priorité. Facilite la compréhension globale du projet.

### **6.5.4 Export**

Fonction permettant d’exporter les rapports en PDF ou CSV pour les partager avec les professeurs, tuteurs ou membres de l’équipe.

---

# **7. Base de données & stockage — Description détaillée**

## **7.1 Base de données**

### **7.1.1 Choix BD**

Sélection d’un système de gestion de base de données adapté aux besoins du projet.
Les critères principaux :

* Rapidité pour stocker transcriptions et US
* Bonne gestion des relations (utilisateurs ↔ US ↔ Trello)
* Simplicité d’intégration avec le backend
Un choix typique serait une base SQL (ex. PostgreSQL) pour sa fiabilité et ses capacités relationnelles.

### **7.1.2 Schéma : utilisateurs, transcriptions, US générées, jetons Trello, logs**

Construction d’un schéma organisé autour de tables clés :

* **Utilisateurs** : compte, préférences, connexion Trello
* **Transcriptions** : texte généré depuis l’audio + métadonnées
* **US générées** : contenu, critères, story points, priorités, état (validée ou non)
* **Jetons Trello** : tokens OAuth sécurisés, board sélectionné, permissions
* **Logs** : traces pour audits, diagnostics, suivi des appels IA
Ce schéma garantit une structure claire et évolutive.

### **7.1.3 Sauvegarde & restauration**

Mise en place d’une stratégie de sauvegarde régulière (backup automatique) afin de protéger les données critiques telles que les US générées ou les historiques de réunion. La restauration permet de récupérer rapidement le système en cas de problème.

---

## **7.2 Stockage**

### **7.2.1 Stockage audio**

Stockage temporaire des fichiers audio utilisés pour la transcription.
Principes importants :

* Durée de rétention limitée (RGPD + Privacy by Design)
* Suppression automatique une fois la transcription effectuée
* Utilisation d’un stockage objet (ex. cloud bucket) pour réduire la charge serveur

### **7.2.2 Cache IA**

Mise en place d’un cache pour les résultats IA récurrents :

* Transcriptions déjà traitées
* User stories générées à partir d’un même prompt
* Résultats intermédiaires du pipeline NLP
Ce cache permet de réduire les coûts, accélérer les réponses et éviter des appels IA inutiles.

### **7.2.3 Nettoyage**

Processus automatique supprimant régulièrement :

* Les anciens fichiers audio
* Les caches expirés
* Les logs non essentiels
* Les US temporaires non validées après un certain délai
Cette opération garantit un service rapide, léger et conforme aux règles de protection des données.

---

# **8. Développement IA/NLP — Description détaillée**

## **8.1 Préparation données**

### **8.1.1 Collecte audio**

Réunir des exemples d’audios de discussions de projet : réunions, échanges techniques, brainstormings. Ces données servent à tester la transcription, affiner le pipeline NLP et optimiser la détection d’intentions.

### **8.1.2 Normalisation**

Traitement des audios et textes pour les rendre exploitables :

* Uniformisation du format audio
* Nettoyage du texte (ponctuation, suppression de bruit verbal)
* Alignement audio → texte
Cette étape améliore la qualité des modèles STT et NLP.

### **8.1.3 Dataset d’US**

Création d’un set d’exemples de user stories bien structurées (title, description, critères d’acceptation). Ce dataset aide à calibrer les prompts du LLM, affiner les templates et valider les règles de formatage.

---

## **8.2 Transcription audio**

### **8.2.1 Configuration Whisper**

Paramétrage du moteur STT (Whisper ou équivalent) :

* modèle choisi (base, medium, large)
* vitesse vs précision
* langue prioritaire
  Objectif : obtenir une transcription fidèle, même en environnement bruyant.

### **8.2.2 Benchmark**

Tests comparatifs des performances : précision, rapidité, taux d’erreur, qualité sur plusieurs accents. Ces benchmarks servent à choisir le modèle optimal selon les coûts et les besoins du projet.

### **8.2.3 Filtres anti-bruit**

Application de filtres avant transcription pour réduire les bruits : ventilation, clavier, échos de salle. Cela augmente sensiblement la qualité de la transcription et réduit les erreurs NLP.

### **8.2.4 Cache audio**

Système de cache évitant les transcriptions répétées pour un même fichier audio. Permet de gagner en performances et de réduire les appels IA coûteux.

### **8.2.5 Ajustements précision**

Corrections contextuelles :

* détection des prénoms/membres d’équipe
* correction de termes techniques (ex. “user story”, “sprint”, “backlog”)
* reformulation automatique des phrases floues
Ces ajustements rendent la transcription plus exploitable pour la génération d’US.

---

## **8.3 NLP**

### **8.3.1 Extraction d’entités**

Détection des éléments clés dans la conversation :

* actions
* fonctionnalités
* utilisateurs/personas
* contraintes techniques
Ces entités servent de base à la génération d’US pertinentes.

### **8.3.2 Segmentation**

Découpage du texte de discussion en segments cohérents (thèmes, décisions, points d’action). La segmentation aide à générer plusieurs US bien séparées plutôt qu’un bloc confus.

### **8.3.3 Détection d’intentions**

Identification des intentions exprimées dans la réunion : demande, proposition, problème, tâche, idée à étudier. Le moteur comprend ainsi *ce que l’équipe veut vraiment faire*.

### **8.3.4 Détection de priorité**

Analyse de l’urgence ou de l’importance perçue dans le discours (“il faut absolument…”, “plus tard…”, “optionnel…”). Cette détection suggère automatiquement une priorité pour chaque US générée.

---

## **8.4 Génération US**

### **8.4.1 Templates**

Définition des modèles de user stories :

* format standard “En tant que…, je veux…, afin de…”
* critères d’acceptation en liste
* labels par catégorie
Les templates garantissent une cohérence entre toutes les US générées.

### **8.4.2 LLM**

Utilisation d’un modèle de langage pour transformer les entités, intentions et segments en user stories claires, professionnelles et complètes. Le prompt guide le modèle pour rester structuré et concis.

### **8.4.3 Système hybride**

Combinaison du LLM avec des règles internes (pattern matching, post-processing).
Objectif :

* réduire les hallucinations
* standardiser la forme
* corriger les oublis fréquents
C’est un équilibre entre créativité de l’IA et fiabilité des règles.

### **8.4.4 Suppression doublons**

Analyse sémantique des US générées pour repérer les doublons ou variantes trop proches. L’algorithme fusionne ou supprime les entrées inutiles pour éviter un backlog pollué.

### **8.4.5 Optimisation**

Ajustements continus du prompt, des règles et du pipeline pour améliorer :

* lisibilité des US
* pertinence
* cohérence entre les US d’une même réunion
* temps de génération
Ces optimisations sont guidées par le feedback utilisateur (scores, modifications manuelles).

---

# **9. Tests & Assurance Qualité — Description détaillée**

## **9.1 Stratégie**

### **9.1.1 Tests unitaires**

Vérification isolée des fonctions critiques : endpoints backend, modules NLP, formateurs d’US. Ces tests garantissent que chaque brique du système fonctionne correctement individuellement.

### **9.1.2 Tests intégration**

Validation du bon fonctionnement entre plusieurs modules : STT → NLP, génération → Trello, frontend → backend. L’objectif est de s’assurer que les composants coopèrent sans erreurs.

### **9.1.3 Tests E2E**

Simulations complètes du parcours utilisateur :

1. Page d’accueil → prompt ou audio
2. Génération de user stories
3. Validation
4. Envoi à Trello
Ces tests reproduisent une utilisation réelle pour détecter les bugs fonctionnels.

### **9.1.4 Tests sécurité**

Analyses ciblées pour vérifier la robustesse du système : injections, accès non autorisés, détournement de tokens Trello, protection des données audio. Indispensable pour la conformité RGPD.

---

## **9.2 Backend**

### **9.2.1 Unitaires endpoints**

Tests sur chaque route API : création US, upload audio, synchronisation Trello, génération de rapports. Assure une réponse cohérente et correcte du serveur.

### **9.2.2 Validation IA**

Vérification de la qualité IA :

* cohérence des user stories générées
* détection correcte des priorités
* précision de la transcription
Ces tests garantissent la fiabilité de l’intelligence du système.

### **9.2.3 Tests charge**

Simulation de nombreux utilisateurs simultanés enregistrant de l’audio, générant des US et interagissant avec Trello. Mesure les limites du système et identifie les goulots d’étranglement.

### **9.2.4 Tests sécurité API**

Contrôle des droits d’accès, gestion des tokens Trello, validation des entrées, protection contre les abus (rate limiting). Objectif : éviter les failles et garantir la sécurité totale des interactions.

---

## **9.3 Frontend**

### **9.3.1 Tests composants**

Tests du comportement individuel des composants UI : boutons start/stop, visualiseur audio, affichage des US générées, formulaires, exports.

### **9.3.2 Navigateurs**

Compatibilité avec les navigateurs principaux : Chrome, Firefox, Edge, Safari. Vérifie que l’application fonctionne correctement dans tous les contextes étudiants/projets.

### **9.3.3 Responsivité**

Assure une expérience optimale sur ordinateur portable, tablette et mobile — important car certaines réunions sont enregistrées via smartphones.

### **9.3.4 UX**

Tests spécifiques pour valider la clarté du parcours utilisateur, la lisibilité des cartes US et la facilité de connexion à Trello. Objectif : un outil agréable et intuitif.

---

## **9.4 Intégration**

### **9.4.1 Pipeline STT → NLP → US**

Validation de la chaîne complète : audio → transcription → analyse → user stories. Permet de s’assurer que chaque étape enrichit correctement les données.

### **9.4.2 US → Trello**

Test de la création automatique de cartes Trello à partir des US validées : labels, description, priorité, membres… Vérifie que l’intégration est fiable et cohérente.

### **9.4.3 Précision des rapports**

Contrôle de l’exactitude des statistiques :

* nombre d’US par label
* répartition par membre
* évolution dans le temps
Les rapports doivent refléter fidèlement les données Trello.

---

## **9.5 Acceptation – Beta**

### **9.5.1 Alpha interne**

Tests internes par l’équipe de développement pour identifier les premiers bugs, valider les fonctionnalités et ajuster l’UX avant l’ouverture à l’extérieur.

### **9.5.2 Beta privée**

Petite communauté d’utilisateurs (amis, étudiants, équipe projet) testant l’application en conditions réelles : enregistrement de réunions, création d’US, envoi vers Trello.

### **9.5.3 Feedback**

Collecte structurée des retours utilisateurs :

* pertinence des US
* détection des priorités
* facilité d’utilisation
* qualité de la transcription
Les retours guident les améliorations.

### **9.5.4 Corrections UX**

Améliorations de l’interface en fonction des retours : simplification des boutons, meilleure visibilité des actions, clarification des erreurs.

### **9.5.5 Stabilité & performance**

Phase finale visant à garantir une version stable, rapide et fiable avant la sortie publique. Couvre la charge, les délais IA, les temps de réponse, et la robustesse générale.

---

Here it is — **Section 10: Documentation**, the final section of your WBS explanation.
Clear, structured, aligned with your app’s concept, and written at a level perfect for your student audience.

---

# **10. Documentation — Description détaillée**

## **10.1 Documentation technique**

### **10.1.1 Diagrammes**

Ensemble des schémas expliquant le fonctionnement interne du système :

* Architecture globale
* Flux de données (prompt, audio, Trello)
* Pipeline STT → NLP → génération d'US
Ces diagrammes facilitent la compréhension du projet par les développeurs, les tuteurs et les évaluateurs.

### **10.1.2 Documentation API**

Description des endpoints backend : paramètres, réponses, erreurs possibles.
Inclut :

* endpoints prompt
* upload audio
* génération US
* synchronisation Trello
Cette documentation permet aux développeurs de comprendre comment appeler et intégrer les services.

### **10.1.3 Dictionnaire de données**

Liste structurée de toutes les données manipulées : transcriptions, user stories, priorités, tokens Trello, logs. Pour chaque champ : type, format, usage, règles.
Cela garantit la cohérence entre les équipes backend, IA et frontend.

### **10.1.4 Documentation IA**

Explication du pipeline IA :

* modèle STT choisi
* traitement NLP
* templates
* règles hybrides
* gestion anti-doublons

---

## **10.2 Documentation utilisateur**

### **10.2.1 Guide prompt**

Guide simple expliquant comment rédiger un prompt clair :

* exemples
* bonnes pratiques
* limitations
Permet aux utilisateurs de générer des user stories plus précises dès la première utilisation.

### **10.2.2 Fonction audio**

Instructions pour enregistrer une discussion ou importer un fichier audio.
Explique :

* comment donner accès au micro
* comment savoir si l’enregistrement fonctionne
* comment lire la transcription
Cette partie rassure les utilisateurs novices.

### **10.2.3 Intégration Trello**

Tutoriel expliquant comment connecter son compte, choisir un board, envoyer des US, gérer les labels.

### **10.2.4 Rapports**

Documentation expliquant comment filtrer par label, membre, période, ainsi que comment exporter en PDF ou CSV.

---

## **10.3 Documentation développeur**

### **10.3.1 Onboarding**

Guide pour accueillir un nouveau développeur :

* comment installer le projet
* comment lancer l’environnement local
* comment comprendre l’architecture globale

### **10.3.2 Standards de code**

Règles de style et bonnes pratiques : structure des fichiers, conventions de noms, gestion des erreurs, organisation des modules IA et API.
L'objectif : maintenir une base de code propre et homogène.

### **10.3.3 CI/CD**

Documentation expliquant le pipeline d’intégration et de déploiement : tests, build, conteneurs Docker, déploiement automatique.
Un développeur doit comprendre comment une modification passe du code local → production.

---

# **11. Déploiement, Démonstration & Préparation de Présentation — Description détaillée**

## **11.1 Étude de marché**

### **11.1.1 Groupes cibles**

Identification des profils qui pourraient utiliser l’application :

* équipes projets (étudiants ou professionnels)
* chefs de projet Agile / Scrum Masters
* startups cherchant à accélérer la prise de notes
* entreprises pratiquant des réunions fréquentes
Chaque groupe aide à déterminer les besoins réels et les angles de communication pertinents.

### **11.1.2 Proposition de valeur**

Définition du message central : **« Transformer chaque discussion en actions concrètes »**.
Point forts mis en avant :

* génération instantanée de user stories
* intégration Trello fluide
* gain de temps en réunion
* réduction drastique des tâches oubliées

### **11.1.3 Concurrence**

Analyse des outils existants (assistants IA, générateurs de tâches, plugins Trello).
Objectif : identifier

* ce que les concurrents font bien
* leurs limites (peu de transcription automatique, pas de pipeline complet vers Trello)
* où notre projet se différencie réellement (captation conversationnelle + US intelligentes)

---

## **11.2 Modèle économique**

### **11.2.1 Tarification**

Esquisse d’un modèle :

* version gratuite limitée (prompt → US)
* version premium (transcription audio, intégration complète Trello, rapports avancés)
* modèle “pay-as-you-go” pour les appels IA coûteux
L’objectif : proposer une structure simple, compréhensible, adaptée aux petites équipes.

### **11.2.2 Canaux marketing**

Définition des stratégies de visibilité :

* démonstrations en milieu scolaire / universitaire
* diffusion sur LinkedIn et forums tech
* mise en avant auprès des clubs de gestion de projet
* tutoriels vidéos montrant la génération d’US en direct

### **11.2.3 Estimation coûts**

Évaluation des coûts liés aux outils IA, hébergement cloud, stockage audio, maintenance, ainsi que la charge des utilisateurs.
Cette estimation aide à calibrer le modèle premium et les limites du plan gratuit.

---

## **11.3 Déploiement**

### **11.3.1 Infrastructure**

Mise en place de l’infrastructure backend + frontend + IA : serveurs cloud, base de données, stockage audio.
La structure doit être fiable, sécurisée et facile à maintenir.

### **11.3.2 Déploiement cloud**

Installation dans un environnement cloud :

* build Docker
* déploiement automatique via CI/CD
* configuration des variables d’environnement
Objectif : avoir une application accessible 24/7 pour la démonstration.

### **11.3.3 Monitoring**

Mise en place d’outils permettant de surveiller :

* disponibilité du service
* erreurs API
* temps de réponse IA
Utile pour garantir une démo fluide et détecter les problèmes avant le jour J.

### **11.3.4 CI/CD**

Pipeline permettant de déployer rapidement des corrections ou ajustements sans impacter la stabilité.
Indispensable pour réagir rapidement après les tests internes.

### **11.3.5 Sécurité**

Configuration des protections essentielles : HTTPS, tokens sécurisés, gestion des permissions Trello, stockage conforme RGPD.
Important pour rassurer les évaluateurs et montrer la maturité du projet.

### **11.3.6 Scalabilité**

Vérification que l’infrastructure peut supporter une montée de charge : plusieurs utilisateurs simultanés enregistrant de l’audio ou générant des US.

### **11.3.7 Optimisation coûts**

Ajustements pour réduire la facture cloud et IA :

* cache IA
* suppression automatique des audios
* modèles plus légers en période de faible activité
Montre la réflexion professionnelle autour du projet.

---

## **11.4 Présentation scolaire**

### **11.4.1 Slides**

Création d’un support clair :

* problème → solution
* démo du pipeline
* architecture simplifiée
* résultats / impact
Les slides doivent montrer l’innovation, pas les détails trop techniques.

### **11.4.2 Script de démo**

Définition d’un scénario simple :

1. Écrire un prompt → génération d’US
2. Enregistrer une mini-discussion → transcription + US
3. Envoyer une US vers Trello
4. Montrer un rapport
Permet de prouver la valeur du produit en 2–3 minutes.

### **11.4.3 Q&A technique**

Préparation des réponses aux questions probables :

* comment fonctionne la transcription ?
* quelle architecture IA ?
* sécurité des données ?
* limites connues ?
Aide à démontrer la maîtrise du projet.

### **11.4.4 Répétitions**

Tests de la démo dans des conditions réelles : réseau instable, bruit, latence IA.
Objectif : éviter tout imprévu le jour de la présentation.

### **11.4.5 Présentation finale**

Livraison de la démonstration officielle : pitch, démo live, réponses, conclusion.
Le moment clé où le projet doit être fluide, clair et impressionnant.

---
