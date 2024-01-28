

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8b95a0e4.js","_app/immutable/chunks/index.4b1fc7b4.js","_app/immutable/chunks/stores.5805e1be.js","_app/immutable/chunks/singletons.117a9b73.js","_app/immutable/chunks/Icon.53b59da5.js","_app/immutable/chunks/Seo.0bc8bc84.js"];
export const stylesheets = ["_app/immutable/assets/3.ae31a64c.css"];
export const fonts = [];
