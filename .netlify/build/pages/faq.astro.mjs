import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ByvLmRog.mjs';
import 'piccolore';
import { $ as $$LandingLayout } from '../chunks/LandingLayout_u4Sf7Gb9.mjs';
export { renderers } from '../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const questions = [
    {
      q: "Comment fonctionne l'analyse m\xE9t\xE9o ?",
      a: "Be Drippy se connecte \xE0 des API m\xE9t\xE9orologiques en temps r\xE9el. Notre algorithme croise ensuite les conditions (temp\xE9rature, vent, humidit\xE9) avec les caract\xE9ristiques techniques de vos v\xEAtements pour vous proposer la tenue id\xE9ale."
    },
    {
      q: "Est-ce que je dois prendre chaque v\xEAtement en photo ?",
      a: "Oui, la prise de photo est n\xE9cessaire pour num\xE9riser votre vestiaire. Cependant, notre IA s'occupe de tagger automatiquement la couleur, la mati\xE8re et le type de v\xEAtement pour vous faire gagner un temps pr\xE9cieux."
    },
    {
      q: "L'application est-elle gratuite ?",
      a: "Nous proposons une version 'Basic' gratuite et compl\xE8te. Pour acc\xE9der \xE0 des fonctionnalit\xE9s avanc\xE9es, comme le calendrier des tenues ou le r\xE9seau social, nous proposons une offre 'Premium' \xE0 4.99\u20AC par mois."
    },
    {
      q: "Mes donn\xE9es sont-elles prot\xE9g\xE9es ?",
      a: "Absolument. Vos photos et vos informations personnelles sont stock\xE9es de mani\xE8re s\xE9curis\xE9e et ne sont jamais revendues \xE0 des tiers. Votre vestiaire num\xE9rique est priv\xE9."
    }
  ];
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "title": "FAQ" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-full -mt-32 relative z-10 mb-12 lg:mb-16"> <section class="w-full h-[40vh] lg:h-[50vh] relative z-0"> <img src="/img/herolanding.avif" alt="FAQ Be Drippy" class="absolute inset-0 w-full h-full object-cover object-center"> </section> <section class="grille relative z-10 mt-12 lg:mt-16"> <div class="col-full bg-bleu-claire rounded-[32px] p-10 lg:p-16 relative"> <h1 class="font-display text-titre-sm lg:text-titre-md text-bleu-marine text-center leading-tight mb-12">
Questions fréquentes
</h1> <div class="flex flex-col gap-6 w-full"> ${questions.map((item) => renderTemplate`<details class="group bg-white rounded-[24px] p-6 lg:p-8 transition-all duration-300 w-full"> <summary class="font-display text-titre-sm text-bleu-marine cursor-pointer list-none flex justify-between items-center"> ${item.q} <span class="text-[#38bdf8] transition-transform group-open:rotate-180"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </span> </summary> <p class="text-corp-md lg:text-corp-lg text-bleu-marine/90 mt-4 leading-relaxed font-semibold"> ${item.a} </p> </details>`)} </div> </div> </section> <section class="grille relative z-10 mt-12 lg:mt-16"> <div class="col-full bg-bleu-marine rounded-[32px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"> <div class="absolute -top-10 -right-10 w-40 h-40 bg-jaune/10 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-bleu-claire/10 rounded-full blur-3xl pointer-events-none"></div> <div class="flex flex-col items-start text-left lg:w-2/3 relative z-10"> <h2 class="font-display text-titre-sm lg:text-titre-md text-white leading-tight mb-4">
D'autres questions ?
</h2> <p class="text-corp-md lg:text-corp-lg text-white/80 max-w-2xl font-semibold">
N'hésitez pas à nous contacter directement via notre formulaire ou sur nos réseaux sociaux.
</p> </div> <div class="lg:w-1/3 flex justify-start lg:justify-end w-full relative z-10"> <a href="/contact" class="bg-jaune text-bleu-marine font-display text-corp-md uppercase tracking-wider px-10 py-5 rounded-full hover:scale-105 transition-transform text-center w-full md:w-auto">
Nous contacter
</a> </div> </div> </section> </div> ` })}`;
}, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/faq.astro", void 0);

const $$file = "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
