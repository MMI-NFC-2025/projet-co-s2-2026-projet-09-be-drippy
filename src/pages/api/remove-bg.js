/* src/pages/api/remove-bg.js */
export const prerender = false;

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');

    if (!image) {
      return new Response(JSON.stringify({ error: "Image manquante" }), { status: 400 });
    }

    // Préparation des données pour Remove.bg
    const removeBgForm = new FormData();
    removeBgForm.append('image_file', image);
    removeBgForm.append('size', 'auto'); // Pour optimiser la qualité

    // Appel à l'API de Remove.bg
    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': import.meta.env.REMOVE_BG_API_KEY,
      },
      body: removeBgForm,
    });

    if (!response.ok) {
      throw new Error("Erreur lors du détourage par Remove.bg");
    }

    // Récupération de l'image détourée sous forme de données brutes
    const arrayBuffer = await response.arrayBuffer();

    // On renvoie la nouvelle image directement au format PNG
    return new Response(arrayBuffer, {
      status: 200,
      headers: { 'Content-Type': 'image/png' }
    });

  } catch (error) {
    console.error("Erreur API Remove.bg:", error);
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
}