/* src/pages/api/analyze.js */
export const prerender = false;

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');
    const name = formData.get('name');

    if (!image) {
      return new Response(JSON.stringify({ error: "Image manquante" }), { status: 400 });
    }

    const nameLower = name ? name.toString().toLowerCase() : "";


    const dictUnePiece = ['robe', 'combinaison', 'salopette', 'kimono', 'abaya', 'qamis', 'combishort', 'nuisette', 'ensemble', 'costume'];
    const dictVeste = ['veste', 'manteau', 'doudoune', 'blouson', 'trench', 'parka', 'blazer', 'coupe-vent', 'k-way', 'gilet', 'cardigan', 'surchemise', 'bomber', 'poncho', 'saharienne', 'perfecto'];
    const dictBas = ['pantalon', 'jean', 'short', 'jupe', 'legging', 'jogging', 'survêtement', 'bermuda', 'cargo', 'chino', 'pantacourt', 'cycliste'];
    const dictChaussure = ['chaussure', 'sneaker', 'basket', 'botte', 'bottine', 'sandale', 'mocassin', 'escarpin', 'talon', 'tong', 'espadrille', 'derby', 'claquette', 'crocs'];
    

    const dictFroid = ['manteau', 'doudoune', 'pull', 'sweat', 'hoodie', 'polaire', 'écharpe', 'bonnet', 'hiver', 'neige', 'ski', 'thermique', 'col roulé', 'laine', 'cachemire', 'fourrure', 'épais', 'gros', 'velours'];
    const dictChaud = ['t-shirt', 'short', 'débardeur', 'été', 'plage', 'léger', 'lin', 'crop-top', 'tong', 'sandale', 'combishort', 'bermuda', 'maillot', 'soleil', 'sans manche'];
    const dictPluie = ['imperméable', 'k-way', 'pluie', 'botte', 'waterproof', 'gore-tex', 'coupe-vent'];

    const containsAny = (text, words) => words.some(word => text.includes(word));

    let detectedCategory = "haut"; 
    
    if (containsAny(nameLower, dictUnePiece)) detectedCategory = "une_piece";
    else if (containsAny(nameLower, dictVeste)) detectedCategory = "veste";
    else if (containsAny(nameLower, dictBas)) detectedCategory = "bas";
    else if (containsAny(nameLower, dictChaussure)) detectedCategory = "chaussure";

    let detectedWeather = "neutre"; 
    
    
    if (nameLower.includes('capuche') || nameLower.includes('hoodie') || nameLower.includes('sweat')) {
      
      if (containsAny(nameLower, dictPluie)) {
        detectedWeather = "pluie";
      } else {
        
        detectedWeather = "froid";
      }
    } 

    else if (containsAny(nameLower, dictFroid)) detectedWeather = "froid";
    else if (containsAny(nameLower, dictPluie)) detectedWeather = "pluie";
    else if (containsAny(nameLower, dictChaud)) detectedWeather = "chaud";

  
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