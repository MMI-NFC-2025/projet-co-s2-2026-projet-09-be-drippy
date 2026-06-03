import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_ByvLmRog.mjs';
import 'piccolore';
import { $ as $$AppLayout } from '../../../chunks/AppLayout_D5Yn7mJV.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Detail = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "D\xE9tail du v\xEAtement" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 max-w-[800px] mx-auto min-h-screen"> <a href="/app/vestiaire" class="inline-flex items-center gap-2 text-gray-400 hover:text-bleu-marine font-bold mb-6 transition-colors mt-8"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Retour au vestiaire
</a> <div id="loading-state" class="text-center py-20 animate-pulse text-gray-400 font-bold">Chargement de la pièce...</div> <div id="error-state" style="display: none;" class="text-center py-20 text-red-500 font-bold">
Vêtement introuvable.
</div> <div id="cloth-details" style="display: none;" class="bg-white rounded-[3rem] p-4 lg:p-8 shadow-xl border border-gray-100 mb-8 mt-2"> <div class="w-full aspect-square rounded-[2rem] overflow-hidden bg-gray-50 mb-6 flex justify-center items-center relative"> <img id="cloth-image" src="" alt="Vêtement" class="w-full h-full object-cover" style="display: none;"> <span id="no-image-text" class="text-gray-400 font-bold uppercase tracking-widest text-sm" style="display: none;">Pas d'image</span> </div> <div class="px-4 pb-2"> <span id="cloth-category" class="bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3 inline-block"></span> <h1 id="cloth-name" class="text-3xl lg:text-4xl font-black text-bleu-marine mb-1"></h1> <p id="cloth-brand" class="text-lg lg:text-xl text-gray-400 font-bold uppercase tracking-wider mb-8"></p> <button id="delete-btn" class="w-full bg-red-50 text-rouge hover:bg-rouge hover:text-white font-extrabold text-lg py-4 rounded-full transition-all active:scale-95 border border-red-100">
Supprimer ce vêtement
</button> </div> </div> </div> ` })} ${renderScript($$result, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/vestiaire/detail.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/vestiaire/detail.astro", void 0);

const $$file = "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/vestiaire/detail.astro";
const $$url = "/app/vestiaire/detail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Detail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
