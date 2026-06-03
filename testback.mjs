// testback.mjs
import PocketBase from 'pocketbase';

// Assure-toi que c'est bien l'URL de ton PocketBase local
const pb = new PocketBase('http://127.0.0.1:8090');

// Fonction asynchrone pour pouvoir utiliser "await"
async function runTest() {
  console.log("==========================================");
  console.log("🚀 DÉBUT DU TEST POCKETBASE (NODE.JS PUR)");
  console.log("==========================================");

  // On génère un email unique pour éviter l'erreur de doublon
  const randomId = Math.floor(Math.random() * 100000);
  const testEmail = `node_test_${randomId}@drippy.com`;
  
  console.log(`Tentative de création avec l'email : ${testEmail}`);

  try {
    // Appel direct à l'API PocketBase
    const record = await pb.collection('users').create({
      email: testEmail,
      password: "password123",
      passwordConfirm: "password123",
    });

    console.log("✅ SUCCÈS ABSOLU ! Le compte a été créé.");
    console.log(`ID du nouveau compte : ${record.id}`);

  } catch (err) {
    console.log("❌ ÉCHEC ! PocketBase a refusé la création.");
    console.log("🔍 DÉTAILS DE L'ERREUR EXACTE :");
    
    // On affiche la réponse JSON détaillée de PocketBase
    if (err.response) {
      console.error(JSON.stringify(err.response, null, 2));
    } else {
      console.error("Erreur de connexion (PocketBase est-il allumé ?) :", err.message);
    }
  }
  console.log("==========================================");
}

// Lancement de la fonction
runTest();