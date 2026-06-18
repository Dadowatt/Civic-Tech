# Plateforme de Signalement Citoyen - Civic-Tech

## 1. Présentation du projet

La Plateforme de Signalement Citoyen est une application web développée avec Angular permettant aux habitants de signaler des incidents locaux (lampadaire cassé, problème de voirie, assainissement, sécurité, etc.) afin de faciliter la communication entre les citoyens et les services municipaux. L'application permet de créer un signalement via un formulaire sécurisé avec des validations strictes, de consulter la liste des incidents existants, d'afficher le détail d'un incident et de soutenir une cause en augmentant le nombre de soutiens. Les données sont persistées grâce au stockage local du navigateur afin de conserver les signalements après un rafraîchissement de la page.

## 2. Lien de déploiement

https://civic-tech-incidents.netlify.app/

## 3. Technologies utilisées

* Angular
* TypeScript
* HTML5
* CSS3
* Bootstrap
* Bootstrap Icons
* Reactive Forms Angular
* RxJS
* LocalStorage

## 4. Installation et lancement

### Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :

* Node.js
* npm
* Angular CLI

### Vérifier les versions installées

```bash
node -v
npm -v
ng version
```

### Cloner le projet

```bash
git clone https://github.com/Dadowatt/Civic-Tech.git
```

### Accéder au dossier du projet

```bash
cd Civic-Tech
```

### Installer les dépendances

```bash
npm install
```

### Installer Bootstrap et Bootstrap Icons

```bash
npm install bootstrap bootstrap-icons
```

### Lancer l'application en local

```bash
ng serve
```

L'application sera accessible à l'adresse suivante :

```text
http://localhost:4200
```

## 5. Architecture et découpage du projet

L'application suit une architecture basée sur les composants Angular.

### Composant Parent

* `AppComponent`

### Composants Enfants

* `IncidentFormComponent` : permet de créer un nouveau signalement.
* `IncidentCardComponent` : affiche un résumé des informations d'un signalement.
* `IncidentDetailComponent` : affiche les détails complets d'un signalement.

### Organisation du projet

```text
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
│
├── services
│   └── incident.service.ts
│
├── app.routes.ts
└── app.component.ts
```

### Relations entre les composants

```text
AppComponent
│
├── IncidentFormComponent
├── IncidentCardComponent
└── IncidentDetailComponent
```

## 6. Gestion des données

Les données principales de l'application sont gérées par le service `IncidentService`.

* Les signalements sont stockés dans le `LocalStorage` du navigateur.
* Lorsqu'un utilisateur crée un nouveau signalement, les données sont enregistrées dans le `LocalStorage`.
* Au chargement de l'application, le service récupère les données enregistrées afin de restaurer les signalements existants.
* Les informations relatives à un incident sont définies dans le fichier `models/incident.interface.ts`.
* Cette approche permet de conserver les données même après un rechargement de la page, sans avoir besoin d'une base de données externe.

```
```
