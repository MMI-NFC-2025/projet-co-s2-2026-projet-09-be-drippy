import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ByvLmRog.mjs';
import 'piccolore';
import { $ as $$AppLayout } from '../../chunks/AppLayout_D5Yn7mJV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Parametre = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "R\xE9glages" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed inset-0 bg-bleu-claire z-0"></div> <div class="min-h-screen flex flex-col relative overflow-x-hidden pt-4"> <div class="w-full flex-grow flex flex-col relative mt-8 lg:mt-12"> <!-- ARRIÈRE-PLAN BLEU MARINE (Le fameux cercle / pilule) --> <div class="absolute inset-0 flex flex-col pointer-events-none z-0"> <div class="w-full aspect-square lg:aspect-[4/1] bg-bleu-marine rounded-full lg:rounded-t-[8rem] lg:rounded-b-none shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"></div> <div class="w-full flex-grow bg-bleu-marine -mt-[50%] lg:-mt-[12%]"></div> </div> <!-- CONTENEUR PRINCIPAL EN GRILLE --> <div class="relative z-10 w-full flex flex-col lg:flex-row lg:items-start px-4 lg:px-12 max-w-7xl mx-auto pt-[calc(50vw-7rem)] lg:pt-16 pb-24 gap-16 lg:gap-12"> <!-- COLONNE GAUCHE : TITRE ET INFOS --> <div class="w-full lg:w-1/3 flex flex-col gap-16 lg:gap-12"> <div class="w-full flex flex-col items-center lg:bg-bleu-claire lg:rounded-[3rem] lg:px-8 lg:py-10 lg:shadow-2xl transition-all lg:border-4 lg:border-white/50"> <h1 class="text-3xl lg:text-4xl font-black font-display tracking-wide uppercase text-white lg:text-bleu-marine text-center mb-6 lg:mb-8 px-4 w-full drop-shadow-md lg:drop-shadow-none">Réglages</h1> <p class="text-white lg:text-bleu-marine font-bold text-center text-base mb-8 lg:mb-4 drop-shadow-md lg:drop-shadow-none px-2">
Gérez votre compte, vos préférences et votre abonnement Be Drippy.
</p> </div> </div> <!-- COLONNE DROITE : LES CARTES BLEU CLAIR --> <div class="w-full lg:w-2/3 flex flex-col gap-16 lg:gap-0"> <div class="w-full flex-grow bg-bleu-claire rounded-[3rem] p-6 lg:p-12 shadow-2xl border-4 border-white/50 flex flex-col items-center relative text-bleu-marine"> <!-- SECTION ABONNEMENT --> <h2 class="text-3xl lg:text-4xl font-black uppercase tracking-widest text-bleu-marine mb-8 w-full text-center font-display">Abonnement</h2> <!-- Conteneur style "Ma Tenue" avec fond semi-transparent --> <div class="flex flex-col items-center justify-center gap-2 mb-12 w-full max-w-lg bg-white/40 p-6 rounded-3xl shadow-inner border border-white/50"> <p class="text-bleu-marine mb-5 font-black uppercase tracking-widest">Statut : <span id="status-text" class="text-bleu-marine">Gratuit</span></p> <button id="btn-toggle-premium" class="w-full bg-jaune text-bleu-marine font-bold text-sm lg:text-base py-4 px-6 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 uppercase tracking-wider">
Passer Premium (4,99€)
</button> </div> <!-- SECTION NAVIGATION --> <h2 class="text-3xl lg:text-4xl font-black uppercase tracking-widest text-bleu-marine mb-8 w-full text-center font-display">Options</h2> <div class="flex flex-col w-full max-w-lg gap-4"> <!-- Bouton CGU --> <a href="/app/cgu" class="w-full bg-white text-bleu-marine border border-white/50 px-6 py-4 rounded-full font-black transition-all hover:ring-4 hover:ring-jaune flex items-center justify-between shadow-sm hover:scale-105 active:scale-95 text-base group"> <span>Conditions d'utilisation</span> <span class="text-jaune group-hover:translate-x-1 transition-transform">→</span> </a> <!-- Bouton Contact --> <a href="/app/contact" class="w-full bg-white text-bleu-marine border border-white/50 px-6 py-4 rounded-full font-black transition-all hover:ring-4 hover:ring-jaune flex items-center justify-between shadow-sm hover:scale-105 active:scale-95 text-base group"> <span>Support technique</span> <span class="text-jaune group-hover:translate-x-1 transition-transform">→</span> </a> <!-- Ligne de séparation discrète --> <div class="w-full h-[2px] bg-white/50 my-4 rounded-full"></div> <!-- Bouton Suppression (Rouge profil) --> <button id="btn-delete" class="w-full bg-rouge text-white border border-white/20 px-6 py-4 rounded-full font-black transition-all hover:bg-red-600 flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 text-base">
Supprimer mon compte définitivement
</button> </div> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/parametre.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/parametre.astro", void 0);

const $$file = "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/parametre.astro";
const $$url = "/app/parametre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Parametre,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
