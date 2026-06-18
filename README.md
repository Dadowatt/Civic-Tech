# Plateforme de Signalement Citoyen - Civic-Tech

## 1. Présentation du projet

La Plateforme de Signalement Citoyen est une application web développée avec Angular permettant aux habitants de signaler des incidents locaux (lampadaire cassé, problème de voirie, assainissement, sécurité, etc.) afin de faciliter la communication entre les citoyens et les services municipaux. L'application permet de créer un signalement via un formulaire sécurisé avec des validations strictes, consulter la liste des incidents existants, afficher le détail d'un incident et soutenir une cause en augmentant le nombre de soutiens. Les données sont persistées grâce au stockage local du navigateur afin de conserver les signalements après un rafraîchissement de la page.

## 2. Lien du projet de déploiement:

https://civic-tech-incidents.netlify.app/

## 3. Technologies utilisées

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap
- Bootstrap Icons
- Reactive Forms Angular
- RxJS
- LocalStorage


## 4. Installation et lancement

### Prérequis

Avant de lancer le projet, il faut avoir installé :

- Node.js
- npm
- Angular CLI


Vérifier les versions :

```bash
node -v

npm -v

ng version

## 5. Cloner le projet
https://github.com/Dadowatt/Civic-Tech/tree/develop

## Accéder au dossier du projet
cd civic-tech

## 6. Installer les dépendances
npm install

## Installer Bootstrap et Bootstrap Icons 
npm install bootstrap bootstrap-icons

## Lancer l'application en local
ng serve

## L'application sera accessible à l'adresse :
http://localhost:4200


## 7. Architecture et découpage du projet

L'application suit une architecture basée sur les composants Angular.
Organisation principale :

src/app

├── components

│   ├── incident-card
│   │   ├── incident-card.ts
│   │   ├── incident-card.html
│   │   └── incident-card.css
│   │
│   ├── incident-form
│   │   ├── incident-form.ts
│   │   ├── incident-form.html
│   │   └── incident-form.css
│   │
│   └── incident-detail
│       ├── incident-detail.ts
│       ├── incident-detail.html
│       └── incident-detail.css
│

├── models

│   └── incident.interface.ts


├── services

│   └── incident.service.ts


├── app.routes.ts

└── app.component.ts

