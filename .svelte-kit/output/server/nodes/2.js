

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ae242387.js","_app/immutable/chunks/index.4b1fc7b4.js","_app/immutable/chunks/Icon.53b59da5.js","_app/immutable/chunks/Seo.0bc8bc84.js"];
export const stylesheets = ["_app/immutable/assets/2.3fb65fdb.css"];
export const fonts = [];
