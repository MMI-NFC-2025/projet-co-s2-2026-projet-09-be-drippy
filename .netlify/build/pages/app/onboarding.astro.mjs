import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ByvLmRog.mjs';
import 'piccolore';
import { $ as $$AppLayout } from '../../chunks/AppLayout_D5Yn7mJV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Onboarding = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Bienvenue" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed inset-0 bg-bleu-claire z-0"></div>   <div class="fixed inset-0 z-10 p-6 flex items-center justify-center overflow-y-auto"> <!-- LA CARTE UNIQUE BLEU MARINE --> <!-- Prend la taille de son contenu (max-w-md), avec un large padding (p-8 lg:p-12) --> <div class="w-full max-w-md bg-bleu-marine rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl p-8 lg:p-12 relative flex flex-col items-center"> <form id="onboarding-form" class="w-full flex flex-col gap-6"> <!-- Photo de profil --> <div class="flex flex-col items-center mb-2"> <label class="block text-white font-black uppercase tracking-wider text-sm mb-4 text-center">Photo de profil</label> <div class="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full border-4 border-dashed border-white/30 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center overflow-hidden cursor-pointer shadow-inner"> <span id="upload-icon" class="text-3xl lg:text-4xl">👤</span> <img id="avatar-preview" src="" class="absolute inset-0 w-full h-full object-cover hidden"> <input type="file" id="avatar" name="avatar" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"> </div> </div> <!-- Nom/Pseudo --> <div> <label for="name" class="block text-white font-black uppercase tracking-wider text-xs lg:text-sm mb-2 ml-2">Votre Prénom ou Pseudo *</label> <input type="text" id="name" name="name" required placeholder="Ex: Lucas" class="w-full bg-white rounded-full px-6 py-4 font-bold focus:outline-none focus:ring-4 focus:ring-bleu-claire/50 text-bleu-marine shadow-inner placeholder-gray-400 text-sm lg:text-base"> </div> <!-- Ville --> <div> <label for="city" class="block text-white font-black uppercase tracking-wider text-xs lg:text-sm mb-2 ml-2">Votre Ville (Pour la météo) *</label> <input type="text" id="city" name="city" required placeholder="Ex: Paris" class="w-full bg-white rounded-full px-6 py-4 font-bold focus:outline-none focus:ring-4 focus:ring-bleu-claire/50 text-bleu-marine shadow-inner placeholder-gray-400 text-sm lg:text-base"> </div> <p id="error-msg" class="hidden text-jaune font-bold text-center text-sm"></p> <button type="submit" id="submit-btn" class="w-full bg-jaune text-bleu-marine font-extrabold text-lg lg:text-xl py-4 rounded-full shadow-lg hover:scale-[1.02] transition-transform active:scale-95 mt-4">
Commencer
</button> </form> </div> </div> ` })} ${renderScript($$result, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/onboarding.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/onboarding.astro", void 0);

const $$file = "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/onboarding.astro";
const $$url = "/app/onboarding";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Onboarding,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
