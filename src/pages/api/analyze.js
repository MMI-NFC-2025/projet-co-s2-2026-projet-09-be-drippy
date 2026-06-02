/* src/pages/api/analyze.js */
export const prerender = false; // Important : C'est une route dynamique serveur

export async function POST({ request }) {
  try {
    // 1. On récupère la photo et le nom envoyés par le formulaire
    const formData = await request.formData();
    const image = formData.get('image');
    const name = formData.get('name');

    if (!image) {
      return new Response(JSON.stringify({ error: "Image manquante" }), { status: 400 });
    }

    // ----------------------------------------------------------------------
    // 🤖 PLACEHOLDER POUR L'IA (OpenAI Vision, Gemini, etc.)
    // C'est ici que nous mettrons le code pour envoyer l'image à l'IA.
    // Pour l'instant, on simule une réponse intelligente basée sur le nom.
    // ----------------------------------------------------------------------
    
    let detectedCategory = "haut"; // par défaut
    let detectedWeather = "neutre"; // par défaut

    const nameLower = name.toString().toLowerCase();

    // Petite logique temporaire en attendant la vraie IA
    if (nameLower.includes('veste') || nameLower.includes('manteau')) {
      detectedCategory = "veste";
      detectedWeather = "froid";
    } else if (nameLower.includes('pantalon') || nameLower.includes('jean')) {
      detectedCategory = "bas";
    } else if (nameLower.includes('chaussure') || nameLower.includes('sneaker')) {
      detectedCategory = "chaussure";
    }

    // 2. On renvoie les tags trouvés au format JSON à notre page web
    return new Response(JSON.stringify({ 
      category: detectedCategory, 
      weather_tag: detectedWeather 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Erreur API Analyse:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
}