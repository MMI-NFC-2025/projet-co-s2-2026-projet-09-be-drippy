export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");
    if (!image) {
      return new Response(JSON.stringify({ error: "Image manquante" }), { status: 400 });
    }
    const removeBgForm = new FormData();
    removeBgForm.append("image_file", image);
    removeBgForm.append("size", "auto");
    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": "ki2nM5DnffTC3GwThQv3WTAN"
      },
      body: removeBgForm
    });
    if (!response.ok) {
      throw new Error("Erreur lors du détourage par Remove.bg");
    }
    const arrayBuffer = await response.arrayBuffer();
    return new Response(arrayBuffer, {
      status: 200,
      headers: { "Content-Type": "image/png" }
    });
  } catch (error) {
    console.error("Erreur API Remove.bg:", error);
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
