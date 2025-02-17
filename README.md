# 🎨 Frontend Mentor Challenges

Ce repository regroupe plusieurs challenges réalisés à partir de **Frontend Mentor** pour améliorer mes compétences en frontend. 🚀

## 🚀 Déploiement Automatisé avec GitHub Actions

Le déploiement est entièrement géré via **GitHub Actions** pour un contrôle précis et optimisé :

- ✅ **Vercel Auto-Deploy est désactivé** pour éviter les déploiements en double.
- 🚀 **Seules les applications modifiées sont déployées** (grâce à un script intelligent).
- 📂 **Chaque push sur `main`** déclenche un workflow qui détecte les modifications et ne déploie que les projets concernés.
- 🔍 **Les logs des déploiements sont accessibles dans l’onglet "Actions" de GitHub**.

---

## 🌐 Challenges disponibles

| Challenge                 | Aperçu                                        | Lien en ligne                                                          |
| ------------------------- | --------------------------------------------- | ---------------------------------------------------------------------- |
| **3-column-preview-card** | 🔗 [challenge](./apps/3-column-preview-card/) | 🚀 [Voir en ligne](https://3-column-preview-card-swart-nu.vercel.app/) |

---

## 🛠 Comment fonctionne le workflow GitHub Actions ?

1. **Détection des fichiers modifiés**

   - Seules les apps situées dans `apps/` qui ont été modifiées sont sélectionnées.

2. **Installation des dépendances**

   - `npm install` est exécuté uniquement dans les répertoires des apps à déployer.

3. **Déploiement intelligent sur Vercel**

   - Le workflow utilise un token sécurisé (`VERCEL_TOKEN`) stocké dans les secrets GitHub.
   - Les apps sont déployées indépendamment via la CLI Vercel.

---

## 📮 Contact

💡 **Une suggestion, une question ?** Contactez-moi sur [LinkedIn](https://www.linkedin.com/in/florence-martin-922b3861/) 🚀
