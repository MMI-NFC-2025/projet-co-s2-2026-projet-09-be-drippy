import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ByvLmRog.mjs';
import 'piccolore';
import { $ as $$LandingLayout } from '../chunks/LandingLayout_u4Sf7Gb9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "title": "Accueil", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col w-full -mt-32 lg:-mt-32 relative z-10 mb-12 lg:mb-16" data-astro-cid-j7pv25f6> <section class="w-full h-[50vh] lg:h-[70vh] relative z-0" data-astro-cid-j7pv25f6> <img src="/img/herolanding.avif" alt="Fond Hero Be Drippy" class="absolute inset-0 w-full h-full object-cover object-center" data-astro-cid-j7pv25f6> </section> <!-- SECTION CARD 1 (Bleue) --> <section class="grille relative z-10 mt-8 lg:mt-16" data-astro-cid-j7pv25f6> <div class="col-full bg-bleu-claire rounded-[32px] p-6 lg:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative" data-astro-cid-j7pv25f6> <div class="lg:w-1/2 flex flex-col items-center lg:items-start gap-4 lg:gap-6 relative z-20 text-center lg:text-left" data-astro-cid-j7pv25f6> <h1 class="font-display text-2xl lg:text-titre-md text-bleu-marine leading-tight" data-astro-cid-j7pv25f6>
Ne vous laissez plus surprendre par la météo
</h1> <p class="text-sm lg:text-corp-lg text-bleu-marine/90 leading-relaxed font-medium max-w-sm lg:max-w-md" data-astro-cid-j7pv25f6>
Be Drippy analyse les prévisions heure par heure pour vous suggérer la tenue parfaite. 
            Fini la panique du matin ou les regrets de l'après-midi : votre style s'adapte en temps réel.
</p> <a href="/app/auth" class="mt-2 bg-jaune text-bleu-marine font-display text-sm lg:text-corp-md uppercase tracking-wider px-6 py-4 lg:px-10 lg:py-5 rounded-full hover:scale-105 transition-transform" data-astro-cid-j7pv25f6>
Démarrer mon vestiaire intelligent
</a> </div> <div class="lg:w-1/2 flex justify-center w-full relative" data-astro-cid-j7pv25f6> <img src="public/img/phone.png" alt="Interface de l'application Be Drippy" class="w-[500px] lg:w-[800px] h-auto object-contain relative lg:-mt-56 lg:-mb-12 z-30" data-astro-cid-j7pv25f6> </div> </div> </section> <!-- SECTION CARD 2 (Jaune) --> <section class="grille relative z-10 mt-8 lg:mt-16" data-astro-cid-j7pv25f6> <div class="col-full bg-jaune rounded-[32px] p-6 lg:p-16 relative overflow-hidden flex items-center justify-center" data-astro-cid-j7pv25f6> <div class="hidden lg:flex absolute top-[55%] left-0 w-full items-center z-0 px-4" data-astro-cid-j7pv25f6> <div class="h-[3px] bg-white flex-1" data-astro-cid-j7pv25f6></div> <svg class="w-10 h-10 text-white -ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <path d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full relative z-10" data-astro-cid-j7pv25f6> <div class="bg-bleu-claire rounded-[32px] p-6 lg:p-8 flex flex-col gap-4 lg:gap-6" data-astro-cid-j7pv25f6> <h3 class="font-display text-lg lg:text-titre-sm text-bleu-marine text-center leading-tight" data-astro-cid-j7pv25f6>
Numérisez votre<br data-astro-cid-j7pv25f6>vestiaire
</h3> <div class="bg-white rounded-[24px] p-6 lg:p-8 flex-1" data-astro-cid-j7pv25f6> <p class="text-sm lg:text-corp-lg text-bleu-marine leading-relaxed text-left" data-astro-cid-j7pv25f6>
Prenez quelques photos pour transformer votre armoire en catalogue numérique. Notre IA organise automatiquement vos vêtements.
</p> </div> </div> <div class="bg-bleu-claire rounded-[32px] p-6 lg:p-8 flex flex-col gap-4 lg:gap-6" data-astro-cid-j7pv25f6> <h3 class="font-display text-lg lg:text-titre-sm text-bleu-marine text-center leading-tight" data-astro-cid-j7pv25f6>
L'intelligence<br data-astro-cid-j7pv25f6>météo
</h3> <div class="bg-white rounded-[24px] p-6 lg:p-8 flex-1 border-[3px] border-[#38bdf8]" data-astro-cid-j7pv25f6> <p class="text-sm lg:text-corp-lg text-bleu-marine leading-relaxed text-left" data-astro-cid-j7pv25f6>
Notre algorithme croise la météo en temps réel avec votre inventaire. Be Drippy sélectionne uniquement les pièces adaptées.
</p> </div> </div> <div class="bg-bleu-claire rounded-[32px] p-6 lg:p-8 flex flex-col gap-4 lg:gap-6" data-astro-cid-j7pv25f6> <h3 class="font-display text-lg lg:text-titre-sm text-bleu-marine text-center leading-tight" data-astro-cid-j7pv25f6>
Partagez votre<br data-astro-cid-j7pv25f6>Drippy
</h3> <div class="bg-white rounded-[24px] p-6 lg:p-8 flex-1" data-astro-cid-j7pv25f6> <p class="text-sm lg:text-corp-lg text-bleu-marine leading-relaxed text-left" data-astro-cid-j7pv25f6>
Rejoignez la communauté pour sauvegarder et diffuser vos meilleurs looks et vous inspirer des tendances locales.
</p> </div> </div> </div> </div> </section> <!-- SECTION BANDE DÉFILANTE --> <section class="w-full bg-bleu-marine py-6 mt-8 lg:mt-16 overflow-hidden flex whitespace-nowrap border-y border-white/10 relative" data-astro-cid-j7pv25f6> <div class="animate-marquee flex gap-8 lg:gap-16 items-center px-6" data-astro-cid-j7pv25f6> <span class="font-display text-sm lg:text-titre-sm text-jaune uppercase tracking-widest" data-astro-cid-j7pv25f6>Garde-robe Intelligente</span> <span class="text-white text-sm lg:text-titre-sm" data-astro-cid-j7pv25f6>✦</span> <span class="font-display text-sm lg:text-titre-sm text-jaune uppercase tracking-widest" data-astro-cid-j7pv25f6>Météo en temps réel</span> <span class="text-white text-sm lg:text-titre-sm" data-astro-cid-j7pv25f6>✦</span> <span class="font-display text-sm lg:text-titre-sm text-jaune uppercase tracking-widest" data-astro-cid-j7pv25f6>Style sur-mesure</span> </div> <div class="animate-marquee flex gap-8 lg:gap-16 items-center px-6" aria-hidden="true" data-astro-cid-j7pv25f6> <span class="font-display text-sm lg:text-titre-sm text-jaune uppercase tracking-widest" data-astro-cid-j7pv25f6>Garde-robe Intelligente</span> <span class="text-white text-sm lg:text-titre-sm" data-astro-cid-j7pv25f6>✦</span> <span class="font-display text-sm lg:text-titre-sm text-jaune uppercase tracking-widest" data-astro-cid-j7pv25f6>Météo en temps réel</span> <span class="text-white text-sm lg:text-titre-sm" data-astro-cid-j7pv25f6>✦</span> <span class="font-display text-sm lg:text-titre-sm text-jaune uppercase tracking-widest" data-astro-cid-j7pv25f6>Style sur-mesure</span> </div> </section> <!-- SECTION OFFRES --> <section class="grille relative z-10 mt-8 lg:mt-16" data-astro-cid-j7pv25f6> <div class="col-full bg-bleu-claire rounded-[32px] p-6 lg:p-16 flex flex-col items-center relative" data-astro-cid-j7pv25f6> <h2 class="font-display text-xl lg:text-titre-md text-bleu-marine mb-4 text-center leading-tight" data-astro-cid-j7pv25f6>
Choisissez votre style
</h2> <p class="text-sm lg:text-corp-lg text-bleu-marine/80 text-center max-w-2xl mb-8" data-astro-cid-j7pv25f6>
Que vous cherchiez simplement à vous organiser ou à inspirer toute la communauté.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl" data-astro-cid-j7pv25f6> <div class="bg-white rounded-[24px] p-6 lg:p-10 flex flex-col border border-transparent shadow-sm" data-astro-cid-j7pv25f6> <h3 class="font-display text-lg lg:text-titre-sm text-bleu-marine mb-2" data-astro-cid-j7pv25f6>Basic Drippy</h3> <div class="flex items-end gap-2 mb-6" data-astro-cid-j7pv25f6> <span class="font-display text-3xl lg:text-titre-lg text-bleu-marine leading-none" data-astro-cid-j7pv25f6>0€</span> </div> <ul class="flex flex-col gap-3 flex-1 text-sm lg:text-corp-md text-bleu-marine" data-astro-cid-j7pv25f6> <li class="flex items-start gap-2" data-astro-cid-j7pv25f6>✓ Garde-robe illimitée</li> <li class="flex items-start gap-2" data-astro-cid-j7pv25f6>✓ Auto-tagging IA par photo</li> </ul> </div> <div class="bg-bleu-marine rounded-[24px] p-6 lg:p-10 flex flex-col relative shadow-xl" data-astro-cid-j7pv25f6> <h3 class="font-display text-lg lg:text-titre-sm text-white mb-2" data-astro-cid-j7pv25f6>Premium Drippy</h3> <div class="flex items-end gap-2 mb-6" data-astro-cid-j7pv25f6> <span class="font-display text-3xl lg:text-titre-lg text-jaune leading-none" data-astro-cid-j7pv25f6>4.99€</span> </div> <ul class="flex flex-col gap-3 flex-1 text-sm lg:text-corp-md text-white" data-astro-cid-j7pv25f6> <li class="flex items-start gap-2" data-astro-cid-j7pv25f6>✓ Accès au réseau social</li> <li class="flex items-start gap-2" data-astro-cid-j7pv25f6>✓ Algorithme météo prédictif</li> </ul> </div> </div> </div> </section> <!-- SECTION CALL TO ACTION FINAL --> <section class="grille relative z-10 mt-8 lg:mt-16" data-astro-cid-j7pv25f6> <div class="col-full bg-bleu-marine rounded-[32px] p-8 lg:p-16 flex flex-col items-center lg:flex-row justify-between gap-6 shadow-2xl relative overflow-hidden text-center lg:text-left" data-astro-cid-j7pv25f6> <div class="relative z-10" data-astro-cid-j7pv25f6> <h2 class="font-display text-xl lg:text-titre-md text-white leading-tight mb-2" data-astro-cid-j7pv25f6>
Prêt à révolutionner vos matins ?
</h2> <p class="text-sm lg:text-corp-lg text-white/80 max-w-lg" data-astro-cid-j7pv25f6>
Rejoignez Be Drippy dès aujourd'hui.
</p> </div> <a href="/app/register" class="bg-jaune text-bleu-marine font-display text-sm lg:text-corp-md uppercase tracking-wider px-8 py-4 rounded-full w-full lg:w-auto text-center z-10" data-astro-cid-j7pv25f6>
Démarrer
</a> </div> </section> </div> ` })} `;
}, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/index.astro", void 0);

const $$file = "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
