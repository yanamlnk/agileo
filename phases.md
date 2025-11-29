# **Phases du Projet – Vue d’Ensemble (18 mois)**

## Table des matières

1. [Phase 1 – MVP “Texte” (Mois 1 à 6)](#phase-1--mvp-texte-mois-1-à-6)
2. [Phase 2 – MVP “Fichier Audio” (Mois 7 à 12)](#phase-2--mvp-fichier-audio-mois-7-à-12)
3. [Phase 3 – Polissage “Temps Réel” & UX (Mois 13 à 18)](#phase-3--polissage-temps-réel--ux-mois-13-à-18)
4. [Résumé simple des 3 phases](#résumé-simple-des-3-phases)


## ** Phase 1 – MVP “Texte” (Mois 1 à 6)**

**Objectif principal :** construire un premier assistant fonctionnel basé uniquement sur *du texte*, afin de valider le concept et les briques essentielles.

### **Entrée**

* Prompt textuel uniquement

### **Sortie**

* Génération automatique de user stories
* Création de cartes Trello via l’API

### **Contenu & objectifs pédagogiques**

* Développer le **backend API** de base
* Définir un **prompt engineering** stable pour transformer un texte en user stories
* Implémenter l’intégration **Trello (OAuth + création cartes)**
* Concevoir la première **interface Web** (champ prompt → US générées → Trello)
* Mettre en place le **pipeline CI/CD**, conteneurisation, et bases UX

### **Finalité de la phase**

Valider le **cœur du projet** :

> « On donne du texte → l’IA génère des user stories → elles apparaissent dans Trello. »
> C’est une première preuve de valeur solide, déjà utilisable par des équipes.

---

## ** Phase 2 – MVP “Fichier Audio” (Mois 7 à 12)**

**Objectif principal :** étendre le MVP pour accepter des fichiers audio et générer les user stories à partir de transcriptions.

### **Entrée**

* Upload de fichiers audio (MP3 / WAV)

### **Traitement**

* Transcription via **Whisper API**
* Pipeline IA **asynchrone** (pas encore de mode temps réel)

### **Sortie**

* User stories générées automatiquement à partir de la transcription
* Cartes Trello correspondantes

### **Contenu & objectifs pédagogiques**

* Développer le **module de transcription**
* Créer un système d’**upload fichier** + suivi du traitement
* Ajuster le pipeline NLP pour travailler à partir d’une conversation réelle
* Améliorer la gestion des erreurs, du cache IA, et des doublons
* Améliorer l’interface :

  * Transcription visible
  * US associées
  * Validation + envoi Trello

### **Finalité de la phase**

Débloquer le vrai différenciateur du projet :

> L’application comprend une **discussion** et génère automatiquement les user stories.

C’est la première version qui reflète la vision finale du produit.

---

## ** Phase 3 – Polissage “Temps Réel” & UX (Mois 13 à 18)**

**Objectif principal :** atteindre une expérience fluide, professionnelle, proche d’un outil commercial.

### **Entrée**

* Enregistrement **direct** via le navigateur (bouton “Start Recording”)

### **Nouvelles fonctionnalités clés**

* **Transcription en temps réel**
* Génération continue d’US durant la conversation
* **Dashboards & reporting visuel** (labels, membres, progression…)

### **Contenu & objectifs pédagogiques**

* Intégration du streaming audio
* Amélioration UX : fluidité, clarté, vitesse
* Reporting avancé : tableaux de bord, graphiques, exports
* Optimisation IA :

  * temps de latence
  * segmentation conversationnelle
  * détection d’intentions améliorée
* Stabilisation et corrections finales pour la démonstration de fin d’année

### **Finalité de la phase**

Livrer une version **mature**, capable d’impressionner en démonstration :

> “L’outil écoute la réunion en direct, comprend la discussion, génère les user stories, les classe, et les envoie dans Trello.”

C’est la version qui doit convaincre les étudiants votants et les encadrants.

---

# **Résumé simple des 3 phases**

| Phase                    | Durée      | Focus                            | Pourquoi elle est clé                      |
| ------------------------ | ---------- | -------------------------------- | ------------------------------------------ |
| **1 – Texte**            | Mois 1-6   | Prompt → US → Trello             | Valider le concept et les bases techniques |
| **2 – Audio (fichiers)** | Mois 7-12  | Transcription audio → US         | Débloquer la vraie innovation du projet    |
| **3 – Temps réel / UX**  | Mois 13-18 | Streaming, locuteurs, dashboards | Transformer le MVP en produit convaincant  |
