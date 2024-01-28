import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.a47d64c9.js","_app/immutable/chunks/index.4b1fc7b4.js","_app/immutable/chunks/index.5bd55edd.js","_app/immutable/chunks/stores.5805e1be.js","_app/immutable/chunks/singletons.117a9b73.js"];
export const stylesheets = ["_app/immutable/assets/0.87e1ef29.css"];
export const fonts = ["_app/immutable/assets/newsreader-vietnamese-400-italic.15c2d816.woff2","_app/immutable/assets/newsreader-all-400-italic.b234bc8e.woff","_app/immutable/assets/newsreader-latin-ext-400-italic.5bf368d2.woff2","_app/immutable/assets/newsreader-latin-400-italic.c935023f.woff2"];
