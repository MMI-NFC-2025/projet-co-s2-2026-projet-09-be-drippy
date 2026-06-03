export { renderers } from '../../renderers.mjs';

/* src/pages/api/analyze.js */
const prerender = false;

async function POST({ request }) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');
    const name = formData.get('name');

    if (!image) {
      return new Response(JSON.stringify({ error: "Image manquante" }), { status: 400 });
    }

    const nameLower = name ? name.toString().toLowerCase() : "";

    // ==========================================
    // 🧠 LE CERVEAU DE L'APPLICATION (DICTIONNAIRES)
    // ==========================================

    const dictUnePiece = ['robe', 'combinaison', 'salopette', 'kimono', 'abaya', 'qamis', 'combishort', 'nuisette', 'ensemble', 'costume'];
    const dictVeste = ['veste', 'manteau', 'doudoune', 'blouson', 'trench', 'parka', 'blazer', 'coupe-vent', 'k-way', 'gilet', 'cardigan', 'surchemise', 'bomber', 'poncho', 'saharienne', 'perfecto'];
    const dictBas = ['pantalon', 'jean', 'short', 'jupe', 'legging', 'jogging', 'survêtement', 'bermuda', 'cargo', 'chino', 'pantacourt', 'cycliste'];
    const dictChaussure = ['chaussure', 'sneaker', 'basket', 'botte', 'bottine', 'sandale', 'mocassin', 'escarpin', 'talon', 'tong', 'espadrille', 'derby', 'claquette', 'crocs'];
    
    // Ajout de sweat et hoodie dans froid
    const dictFroid = ['manteau', 'doudoune', 'pull', 'sweat', 'hoodie', 'polaire', 'écharpe', 'bonnet', 'hiver', 'neige', 'ski', 'thermique', 'col roulé', 'laine', 'cachemire', 'fourrure', 'épais', 'gros', 'velours'];
    const dictChaud = ['t-shirt', 'short', 'débardeur', 'été', 'plage', 'léger', 'lin', 'crop-top', 'tong', 'sandale', 'combishort', 'bermuda', 'maillot', 'soleil', 'sans manche'];
    const dictPluie = ['imperméable', 'k-way', 'pluie', 'botte', 'waterproof', 'gore-tex', 'coupe-vent'];

    const containsAny = (text, words) => words.some(word => text.includes(word));

    // ==========================================
    // ⚙️ LOGIQUE D'ANALYSE
    // ==========================================

    let detectedCategory = "haut"; 
    
    if (containsAny(nameLower, dictUnePiece)) detectedCategory = "une_piece";
    else if (containsAny(nameLower, dictVeste)) detectedCategory = "veste";
    else if (containsAny(nameLower, dictBas)) detectedCategory = "bas";
    else if (containsAny(nameLower, dictChaussure)) detectedCategory = "chaussure";

    let detectedWeather = "neutre"; 
    
    // --- RÈGLE SPÉCIALE POUR LA CAPUCHE ---
    if (nameLower.includes('capuche') || nameLower.includes('hoodie') || nameLower.includes('sweat')) {
      // Si c'est un truc de pluie à capuche
      if (containsAny(nameLower, dictPluie)) {
        detectedWeather = "pluie";
      } else {
        // Sinon c'est un sweat classique pour le froid
        detectedWeather = "froid";
      }
    } 
    // Sinon, on applique la logique normale
    else if (containsAny(nameLower, dictFroid)) detectedWeather = "froid";
    else if (containsAny(nameLower, dictPluie)) detectedWeather = "pluie";
    else if (containsAny(nameLower, dictChaud)) detectedWeather = "chaud";

    // Règle spéciale robes/shorts d'été
    if ((detectedCategory === "une_piece" || detectedCategory === "bas") && containsAny(nameLower, ['robe', 'jupe', 'short']) && detectedWeather === "neutre") {
        if (!containsAny(nameLower, ['laine', 'hiver', 'velours', 'pull'])) {
            detectedWeather = "chaud"; 
        }
    }

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
