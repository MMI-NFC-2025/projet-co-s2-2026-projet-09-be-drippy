import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ByvLmRog.mjs';
import 'piccolore';
import { $ as $$AppLayout } from '../../chunks/AppLayout_D5Yn7mJV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Support Technique" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed inset-0 bg-bleu-claire z-0"></div> <div class="min-h-screen flex flex-col relative overflow-x-hidden pt-4"> <div class="w-full flex-grow flex flex-col relative mt-8 lg:mt-12"> <!-- ARRIÈRE-PLAN BLEU MARINE --> <div class="absolute inset-0 flex flex-col pointer-events-none z-0"> <div class="w-full aspect-square lg:aspect-[4/1] bg-bleu-marine rounded-full lg:rounded-t-[8rem] lg:rounded-b-none shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"></div> <div class="w-full flex-grow bg-bleu-marine -mt-[50%] lg:-mt-[12%]"></div> </div> <!-- CONTENEUR PRINCIPAL EN GRILLE --> <div class="relative z-10 w-full flex flex-col lg:flex-row lg:items-start px-4 lg:px-12 max-w-7xl mx-auto pt-[calc(50vw-7rem)] lg:pt-16 pb-24 gap-16 lg:gap-12"> <!-- COLONNE GAUCHE : TITRE ET INFOS --> <div class="w-full lg:w-1/3 flex flex-col gap-16 lg:gap-12"> <div class="w-full flex flex-col items-center lg:bg-bleu-claire lg:rounded-[3rem] lg:px-8 lg:py-10 lg:shadow-2xl transition-all lg:border-4 lg:border-white/50"> <h1 class="text-3xl lg:text-4xl font-black font-display tracking-wide uppercase text-white lg:text-bleu-marine text-center mb-6 lg:mb-8 px-4 w-full drop-shadow-md lg:drop-shadow-none">Support</h1> <p class="text-white lg:text-bleu-marine font-bold text-center text-base mb-8 lg:mb-4 drop-shadow-md lg:drop-shadow-none px-2">
Un problème avec votre vestiaire ? Une suggestion pour Be Drippy ? Envoyez-nous un message !
</p> <a href="/app/parametre" class="w-full bg-white/20 lg:bg-white/50 text-white lg:text-bleu-marine border border-white/20 lg:border-none px-6 py-3 rounded-full font-bold transition-colors hover:scale-105 active:scale-95 text-base shadow-sm text-center mt-4">
← Retour aux réglages
</a> </div> </div> <!-- COLONNE DROITE : LE FORMULAIRE --> <div class="w-full lg:w-2/3 flex flex-col gap-16 lg:gap-0"> <div class="w-full flex-grow bg-bleu-claire rounded-[3rem] p-6 lg:p-12 shadow-2xl border-4 border-white/50 flex flex-col items-center relative text-bleu-marine"> <h2 class="text-3xl lg:text-4xl font-black uppercase tracking-widest text-bleu-marine mb-8 w-full text-center font-display">Nous contacter</h2> <form id="contact-form" class="w-full max-w-lg flex flex-col gap-6"> <!-- Champ Sujet --> <div class="w-full"> <label class="block text-bleu-marine text-xs font-black uppercase tracking-widest mb-2 ml-2">Sujet</label> <select class="w-full bg-white rounded-full px-6 py-4 text-bleu-marine font-bold focus:outline-none focus:ring-4 focus:ring-jaune shadow-inner text-base appearance-none cursor-pointer border border-transparent"> <option>Problème technique (IA, Bugs...)</option> <option>Question sur l'abonnement Premium</option> <option>Suggestion d'amélioration</option> <option>Autre</option> </select> </div> <!-- Champ Message --> <div class="w-full mb-2"> <label class="block text-bleu-marine text-xs font-black uppercase tracking-widest mb-2 ml-2">Votre Message</label> <textarea required rows="5" placeholder="Décrivez votre demande en détail ici..." class="w-full bg-white rounded-3xl px-6 py-4 text-bleu-marine font-bold focus:outline-none focus:ring-4 focus:ring-jaune shadow-inner text-base resize-none placeholder-bleu-marine/40 border border-transparent"></textarea> </div> <!-- Bouton d'envoi --> <div class="flex flex-col items-center w-full"> <button type="submit" class="w-full max-w-[280px] bg-jaune text-bleu-marine px-6 py-4 rounded-full font-black uppercase tracking-wider transition-all hover:bg-yellow-400 hover:scale-105 active:scale-95 text-base shadow-md">
Envoyer
</button> </div> <!-- Message de confirmation --> <div id="success-msg" class="hidden flex flex-col items-center w-full mt-2"> <p class="text-bleu-marine font-black text-center bg-white/60 border border-white px-6 py-3 rounded-full shadow-sm w-full max-w-[280px]">
✅ Message envoyé avec succès !
</p> </div> </form> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/contact.astro", void 0);

const $$file = "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/contact.astro";
const $$url = "/app/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
