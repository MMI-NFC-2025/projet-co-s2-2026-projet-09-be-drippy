import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Cch1iDxm.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/analyze.astro.mjs');
const _page2 = () => import('./pages/api/remove-bg.astro.mjs');
const _page3 = () => import('./pages/app/auth.astro.mjs');
const _page4 = () => import('./pages/app/cgu.astro.mjs');
const _page5 = () => import('./pages/app/communaute.astro.mjs');
const _page6 = () => import('./pages/app/contact.astro.mjs');
const _page7 = () => import('./pages/app/login.astro.mjs');
const _page8 = () => import('./pages/app/meteo.astro.mjs');
const _page9 = () => import('./pages/app/onboarding.astro.mjs');
const _page10 = () => import('./pages/app/parametre.astro.mjs');
const _page11 = () => import('./pages/app/profile.astro.mjs');
const _page12 = () => import('./pages/app/register.astro.mjs');
const _page13 = () => import('./pages/app/vestiaire/add.astro.mjs');
const _page14 = () => import('./pages/app/vestiaire/detail.astro.mjs');
const _page15 = () => import('./pages/app/vestiaire.astro.mjs');
const _page16 = () => import('./pages/apropos.astro.mjs');
const _page17 = () => import('./pages/contact.astro.mjs');
const _page18 = () => import('./pages/faq.astro.mjs');
const _page19 = () => import('./pages/mentions.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/analyze.js", _page1],
    ["src/pages/api/remove-bg.js", _page2],
    ["src/pages/app/auth.astro", _page3],
    ["src/pages/app/cgu.astro", _page4],
    ["src/pages/app/communaute/index.astro", _page5],
    ["src/pages/app/contact.astro", _page6],
    ["src/pages/app/login.astro", _page7],
    ["src/pages/app/meteo/index.astro", _page8],
    ["src/pages/app/onboarding.astro", _page9],
    ["src/pages/app/parametre.astro", _page10],
    ["src/pages/app/profile/index.astro", _page11],
    ["src/pages/app/register.astro", _page12],
    ["src/pages/app/vestiaire/add.astro", _page13],
    ["src/pages/app/vestiaire/detail.astro", _page14],
    ["src/pages/app/vestiaire/index.astro", _page15],
    ["src/pages/apropos.astro", _page16],
    ["src/pages/contact.astro", _page17],
    ["src/pages/faq.astro", _page18],
    ["src/pages/mentions.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5017c8ef-fdcd-44f7-99ed-e25d9d5cb589"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
