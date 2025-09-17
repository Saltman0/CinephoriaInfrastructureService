# Cinéphoria Infrastructure service
___

Microservice dédié à l'infrastructure du cinéma (salles, sièges, incidents...).

## Installation

### Logiciels
- [Docker](https://www.docker.com/) et [Docker compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org)
- [PNPM](https://pnpm.io/)

### Librairies

Lancez la commande suivante pour générer les librairies nécessaires au bon fonctionnement du microservice :

```bash
  npm run build
```

### Variables d'environnement

Vous aurez besoin de générer un fichier `.env.local` avec des différentes variables d'environnement pour mettre en
marche le microservice **Cinéphoria Infrastructure**.
Un fichier `.env` est disponible dans le projet.

## Déploiement en local

Lancez la commande suivante pour lancer le microservice **Cinéphoria Infrastructure** :

```bash
docker compose up -d --build
```

Le microservice est désormais disponible en local.