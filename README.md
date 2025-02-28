# 🎨 Frontend Mentor Challenges

Ce repository regroupe plusieurs challenges réalisés à partir de **Frontend Mentor** pour améliorer mes compétences en frontend. 🚀

---

## 🌐 Challenges disponibles

| Challenge                   | Niveau        | Aperçu                                                 | Lien en ligne                                                              |
| --------------------------- | ------------- | ------------------------------------------------------ | -------------------------------------------------------------------------- |
| **3-column-preview-card**   | NEWBIE        | 🔗 [challenge](./apps/3-column-preview-card/)          | 🚀 [Voir en ligne](https://3-column-preview-card-swart-nu.vercel.app/)     |
| **time-tracking-dashboard** | JUNIOR        | 🔗 [challenge](./apps/time-tracking-dashboard/)        | 🚀 [Voir en ligne](https://time-tracking-dashboard-rho-nine.vercel.app/)   |
| **github-user-search-app**  | JUNIOR        | 🔗 [premium-challenge](./apps/github-user-search-app/) | 🚀 [Voir en ligne](https://github-user-search-app-lovat-seven.vercel.app/) |
| 🚧 **personal-blog** 🚧     | INTERMEDIAIRE | 🔗 [premium-challenge](./apps/personal-blog/)          | 🚀                                                                         |

---

## 🧹 Processus de nettoyage complet de la monorepo

Pour garantir un environnement propre et éviter les erreurs liées aux installations corrompues ou aux conflits de versions, un script de nettoyage complet a été ajouté.

### 1. Script `clean-install` au niveau racine

Dans le fichier `frontend-mentor-challenges/package.json`, un script `clean-install` est disponible :

```json
"scripts": {
    "clean-install": "rm -rf node_modules package-lock.json && npm install"
}
```

➡️ Usage

#### Depuis la racine de la monorepo (frontend-mentor-challenges), exécutez :

```shell
npm run clean-install
```

Cela supprime :

- Le dossier node\*modules
- Le fichier package-lock.json
- Puis réinstalle toutes les dépendances pour l’ensemble de la monorepo (y compris les apps et packages dans apps/\* et packages/\_ si elles sont gérées via les workspaces).

📌 Pourquoi ce script est utile ?

- Il assure un environnement propre après un git pull, une mise à jour de dépendances ou un changement de version de Node ou de Next.js.
- Il évite les erreurs de compatibilité entre les versions de packages.
- Il est particulièrement utile en monorepo, où plusieurs apps partagent certaines dépendances.

🛠️ Exemple complet

```shell
# Nettoyage complet du monorepo
npm run clean-install

```

---

### 🚀 Déploiement sur Vercel

Jutiliser l'intégration Git automatique de Vercel.

---

## 📮 Contact

💡 **Une suggestion, une question ?** Contactez-moi sur [LinkedIn](https://www.linkedin.com/in/florence-martin-922b3861/) 🚀

```

```
