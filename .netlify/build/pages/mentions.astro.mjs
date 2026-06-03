import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ByvLmRog.mjs';
import 'piccolore';
import { $ as $$LandingLayout } from '../chunks/LandingLayout_u4Sf7Gb9.mjs';
export { renderers } from '../renderers.mjs';

const $$Mentions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "title": "CGU" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-full relative z-10 mb-12 lg:mb-16"> <!-- SECTION TITRE --> <section class="grille relative z-10 mt-16 lg:mt-32"> <div class="col-full bg-bleu-claire rounded-[32px] p-6 lg:p-16 text-center"> <h1 class="font-display text-2xl lg:text-titre-md text-bleu-marine leading-tight">
Conditions Générales d'Utilisation
</h1> <p class="text-sm lg:text-corp-lg text-bleu-marine/80 mt-4 max-w-2xl mx-auto">
Dernière mise à jour : Juin 2026. Découvrez les règles régissant l'utilisation de Be Drippy.
</p> </div> </section> <!-- SECTION CONTENU (Grille de cards) --> <section class="grille relative z-10 mt-8 lg:mt-16"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full"> ${[
    { title: "1. But de l'application", text: "Be Drippy est une application con\xE7ue pour simplifier la gestion de votre vestiaire au quotidien : organisation, suggestions IA bas\xE9es sur la m\xE9t\xE9o et espace communautaire." },
    { title: "2. Nature du service", text: "Assistant de mode et d'organisation. Nos suggestions sont g\xE9n\xE9r\xE9es par IA \xE0 titre indicatif ; elles ne constituent pas une obligation de r\xE9sultat esth\xE9tique ou de confort." },
    { title: "3. Services Freemium", text: "Fonctionnalit\xE9s de base (vestiaire, aide vestimentaire) gratuites. Fonctions exclusives (Espace Communaut\xE9) via abonnement Premium." },
    { title: "4. Communaut\xE9 & Mod\xE9ration", text: "Espace bienveillant. Pseudonyme recommand\xE9, interdiction des insultes, harc\xE8lement, contenus ill\xE9gaux ou publicit\xE9s non autoris\xE9es. Sanction : bannissement." },
    { title: "5. Donn\xE9es personnelles", text: "Collecte limit\xE9e \xE0 votre vestiaire et pr\xE9f\xE9rences apr\xE8s accord. Donn\xE9es s\xE9curis\xE9es, non revendues. Droit d'acc\xE8s, modification et suppression via les param\xE8tres." },
    { title: "6. \xC2ge requis", text: "Utilisation r\xE9serv\xE9e aux personnes \xE2g\xE9es d'au moins 15 ans." },
    { title: "7. Liens externes", text: "Nous d\xE9clinons toute responsabilit\xE9 concernant le contenu des sites tiers ou partenaires vers lesquels Be Drippy peut renvoyer." },
    { title: "8. Propri\xE9t\xE9 intellectuelle", text: "Logo, design, algorithmes et textes sont la propri\xE9t\xE9 exclusive de Be Drippy. Reproduction interdite sans accord \xE9crit." },
    { title: "9. Modification des CGU", text: "Nous pouvons mettre \xE0 jour ces r\xE8gles. Vous serez averti via l'application ; toute utilisation apr\xE8s mise \xE0 jour vaut acceptation des nouvelles r\xE8gles." },
    { title: "10. Litiges", text: "Soumis au droit fran\xE7ais. En cas de d\xE9saccord, solution amiable privil\xE9gi\xE9e, \xE0 d\xE9faut tribunaux fran\xE7ais comp\xE9tents." }
  ].map((item) => renderTemplate`<div class="bg-bleu-claire rounded-[32px] p-8 flex flex-col gap-4"> <h3 class="font-display text-lg lg:text-titre-sm text-bleu-marine leading-tight">${item.title}</h3> <p class="text-sm lg:text-corp-md text-bleu-marine/80 leading-relaxed">${item.text}</p> </div>`)} </div> </section> <!-- SECTION CALL TO ACTION --> <section class="grille relative z-10 mt-8 lg:mt-16"> <div class="col-full bg-bleu-marine rounded-[32px] p-8 lg:p-16 flex flex-col items-center lg:flex-row justify-between gap-6 shadow-2xl relative overflow-hidden text-center lg:text-left"> <div class="relative z-10"> <h2 class="font-display text-xl lg:text-titre-md text-white leading-tight mb-2">
Des questions sur nos CGU ?
</h2> <p class="text-sm lg:text-corp-lg text-white/80 max-w-lg">
N'hésitez pas à nous contacter à contact@bedrippy.fr
</p> </div> <a href="/" class="bg-jaune text-bleu-marine font-display text-sm lg:text-corp-md uppercase tracking-wider px-8 py-4 rounded-full w-full lg:w-auto text-center z-10 hover:scale-105 transition-transform">
Retour à l'accueil
</a> </div> </section> </div> ` })}`;
}, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/mentions.astro", void 0);

const $$file = "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/mentions.astro";
const $$url = "/mentions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mentions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
