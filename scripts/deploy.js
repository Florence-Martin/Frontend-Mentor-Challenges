const { execSync } = require("child_process");
const fs = require("fs");

const APPS_DIR = "./apps"; // Répertoire contenant tes challenges

// Récupérer tous les dossiers dans "apps/"
const challenges = fs.readdirSync(APPS_DIR).filter((file) => {
  return fs.statSync(`${APPS_DIR}/${file}`).isDirectory();
});

console.log("🚀 Déploiement des challenges sur Vercel...");

challenges.forEach((challenge) => {
  const challengePath = `${APPS_DIR}/${challenge}`;
  console.log(`📦 Déploiement de ${challenge}...`);

  try {
    execSync(`cd ${challengePath} && vercel --prod --yes`, {
      stdio: "inherit",
    });
    console.log(`✅ ${challenge} déployé avec succès !`);
  } catch (error) {
    console.error(`❌ Erreur lors du déploiement de ${challenge}`, error);
  }
});

console.log("🎉 Tous les challenges ont été déployés !");
