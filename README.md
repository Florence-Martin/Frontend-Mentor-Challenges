# 🎨 Frontend Mentor Challenges

Ce repository regroupe plusieurs challenges réalisés à partir de **Frontend Mentor** pour améliorer mes compétences en frontend. 🚀

---

## 🌐 Challenges disponibles

| Challenge                   | Niveau        | Aperçu                                                 | Lien en ligne                                                                    |
| --------------------------- | ------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| **3-column-preview-card**   | NEWBIE        | 🔗 [challenge](./apps/3-column-preview-card/)          | 🚀 [Voir en ligne](https://3-column-preview-card-swart-nu.vercel.app/)           |
| **time-tracking-dashboard** | JUNIOR        | 🔗 [challenge](./apps/time-tracking-dashboard/)        | 🚀 [Voir en ligne](https://time-tracking-dashboard-rho-nine.vercel.app/)         |
| **github-user-search-app**  | JUNIOR        | 🔗 [premium-challenge](./apps/github-user-search-app/) | 🚀 [Voir en ligne](https://github-user-search-app-lovat-seven.vercel.app/)       |
| **personal-blog**           | INTERMEDIAIRE | 🔗 [premium-challenge](./apps/personal-blog/)          | 🚀 [Voir en ligne](https://frontend-mentor-challenges-personal-blog.vercel.app/) |

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

Cela effectue :

🔥 **Suppression du dossier `node_modules`**  
🔥 **Suppression du fichier `package-lock.json`**  
📦 **Réinstallation complète de toutes les dépendances pour l’ensemble de la monorepo** (y compris les apps et packages dans `apps/*` et `packages/*` si elles sont gérées via les workspaces).

---

## 📌 Pourquoi ce script est utile ?

✅ Il assure un environnement propre après un `git pull`, une mise à jour de dépendances ou un changement de version de Node ou de Next.js.

✅ Il évite les erreurs de compatibilité entre les versions de packages.

✅ Il est particulièrement utile dans un **monorepo**, où plusieurs apps partagent certaines dépendances.

---

🛠️ Exemple complet

```shell
# Nettoyage complet du monorepo
npm run clean-install

```

---

## 🚀 Déploiement sur Vercel

J’utilise l'intégration **Git automatique** de Vercel.

---

## ⚠️ Important - Configuration pour les apps en monorepo

Chaque app (par exemple **`personal-blog`**) doit avoir ses propres **"Build and Deployment Settings"** configurés directement sur l’interface Vercel.

### Exemple de configuration pour `personal-blog`

- **Root Directory** :  
   `apps/personal-blog`

- **Build Command** :

  ```bash
  npm run build --workspace=personal-blog
  ```

- **Install Command** :

  ```bash
  npm install
  ```

- **Development Command** (optionnel) :
  ```bash
  npm run dev --workspace=personal-blog
  ```

---

## 📩 Contact

💡 **Une suggestion, une question ?** Contactez-moi sur [LinkedIn](https://www.linkedin.com/in/florence-martin-922b3861/) 🚀
