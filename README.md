# 🎨 Frontend Mentor Challenges

Ce repository regroupe plusieurs challenges réalisés à partir de **Frontend Mentor** pour améliorer mes compétences en frontend. 🚀

## 🚀 Déploiement Automatisé avec GitHub Actions

Le déploiement est entièrement géré via **GitHub Actions** pour un contrôle précis et optimisé :

- ✅ **Vercel Auto-Deploy est désactivé** pour éviter les déploiements en double.
- 🚀 **Seules les applications modifiées sont déployées**.
- 📂 **Chaque push sur `main`** déclenche un workflow qui détecte les modifications et ne déploie que les projets concernés.
- 🔍 **Les logs des déploiements sont accessibles dans l’onglet "Actions" de GitHub**.

---

## 🌐 Challenges disponibles

| Challenge                   | Niveau        | Aperçu                                                 | Lien en ligne                                                              |
| --------------------------- | ------------- | ------------------------------------------------------ | -------------------------------------------------------------------------- |
| **3-column-preview-card**   | NEWBIE        | 🔗 [challenge](./apps/3-column-preview-card/)          | 🚀 [Voir en ligne](https://3-column-preview-card-swart-nu.vercel.app/)     |
| **time-tracking-dashboard** | JUNIOR        | 🔗 [challenge](./apps/time-tracking-dashboard/)        | 🚀 [Voir en ligne](https://time-tracking-dashboard-rho-nine.vercel.app/)   |
| **github-user-search-app**  | JUNIOR        | 🔗 [premium-challenge](./apps/github-user-search-app/) | 🚀 [Voir en ligne](https://github-user-search-app-lovat-seven.vercel.app/) |
| 🚧 **personal-blog** 🚧     | INTERMEDIAIRE | 🔗 [premium-challenge](./apps/personal-blog/)          | 🚀                                                                         |

---

## 🛠 Comment fonctionne le workflow GitHub Actions ?

1. **Détection des fichiers modifiés**

   - Seules les apps situées dans `apps/` qui ont été modifiées sont sélectionnées.

2. **Installation des dépendances**

   - `npm install` est exécuté uniquement dans les répertoires des apps à déployer.

### 🚀 Déploiement sur Vercel

Plutôt que d'utiliser l'intégration Git automatique de Vercel, le workflow gère le déploiement de manière optimisée :

- ✅ **Utilisation d’un token sécurisé (`VERCEL_TOKEN`)** stocké dans les secrets GitHub.
- 🔍 **Détection automatique des fichiers modifiés** : seules les apps concernées sont déployées.
- 📂 **Déploiement indépendant** pour chaque app située dans `apps/`, évitant les mises à jour inutiles.
- 🔄 **Meilleure gestion des erreurs** : si une app est supprimée, le workflow l'ignore au lieu de planter.
- 🔥 **Optimisation pour les mono-repos** et **évite les redéploiements inutiles**.

---

## 📮 Contact

💡 **Une suggestion, une question ?** Contactez-moi sur [LinkedIn](https://www.linkedin.com/in/florence-martin-922b3861/) 🚀
