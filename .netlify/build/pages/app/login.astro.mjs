import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_ByvLmRog.mjs';
import 'piccolore';
import { $ as $$AppLayout } from '../../chunks/AppLayout_D5Yn7mJV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Connexion" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed inset-0 z-50 bg-bleu-claire flex flex-col items-center justify-end lg:justify-center overflow-hidden"> <div class="absolute top-10 w-full flex justify-center lg:hidden z-0 pointer-events-none"> <img src="/logo.svg" alt="Logo Be Drippy" class="w-48 drop-shadow-md"> </div> <div class="w-full md:max-w-md lg:max-w-5xl h-[85vh] lg:h-[600px] flex flex-col lg:flex-row relative lg:bg-bleu-marine lg:rounded-[3rem] lg:shadow-2xl lg:overflow-hidden"> <div class="w-full aspect-square lg:aspect-auto lg:h-full lg:w-1/2 bg-bleu-marine rounded-full lg:rounded-none z-0 relative flex flex-col items-center justify-center lg:bg-bleu-claire"> <div class="hidden lg:flex flex-col items-center justify-center z-20"> <img src="/logo.svg" alt="Logo Be Drippy" class="w-72"> </div> <div class="absolute top-[12%] w-full flex flex-col items-center justify-center lg:hidden z-20"> <a href="/app/auth" class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-bleu-marine shadow-md transition-transform active:scale-95 mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> </a> <h2 class="text-white text-[28px] font-black">Se connecter</h2> </div> </div> <div class="w-full flex-grow bg-bleu-marine z-20 relative -mt-[50%] lg:mt-0 lg:w-1/2 flex flex-col"> <div class="w-full pt-[20%] lg:hidden shrink-0 pointer-events-none"></div> <div class="w-full flex-grow flex flex-col justify-start lg:justify-center items-center px-8 lg:px-16 relative z-30 pb-6 lg:pb-0"> <div class="hidden lg:flex w-full items-center gap-4 mb-8"> <a href="/app/auth" class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-bleu-marine shadow-md hover:bg-gray-100 transition-colors shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg> </a> <h2 class="text-white text-[32px] font-black">Se connecter</h2> </div> <form id="loginForm" class="flex flex-col gap-6 w-full mt-4 lg:mt-0"> <div class="flex flex-col gap-2 w-full"> <label for="email" class="text-white font-bold text-lg ml-1">Email</label> <input type="email" name="email" id="email" placeholder="votre@email.com" required class="p-4 rounded-full text-bleu-marine font-medium bg-white focus:outline-none focus:ring-4 focus:ring-bleu-claire/50 w-full placeholder:text-gray-400 shadow-inner"> </div> <div class="flex flex-col gap-2 w-full"> <label for="password" class="text-white font-bold text-lg ml-1">Mot de passe</label> <input type="password" name="password" id="password" placeholder="••••••••" required class="p-4 rounded-full text-bleu-marine font-medium bg-white focus:outline-none focus:ring-4 focus:ring-bleu-claire/50 w-full placeholder:text-gray-400 shadow-inner"> </div> <p id="errorMessage" class="text-jaune font-bold text-center text-sm hidden"></p> <button type="submit" class="w-full bg-jaune hover:bg-yellow-200 text-bleu-marine font-extrabold text-2xl py-4 rounded-full text-center transition-all active:scale-95 shadow-md mt-4 lg:mt-4">
Se connecter
</button> </form> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/login.astro", void 0);

const $$file = "/Users/perruchot/Documents/GitHub/projet-co-s2-2026-projet-09-be-drippy/src/pages/app/login.astro";
const $$url = "/app/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
