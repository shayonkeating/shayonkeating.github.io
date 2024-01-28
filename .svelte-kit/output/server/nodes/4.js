

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.815ada1f.js","_app/immutable/chunks/index.4b1fc7b4.js","_app/immutable/chunks/Seo.0bc8bc84.js","_app/immutable/chunks/index.5bd55edd.js"];
export const stylesheets = ["_app/immutable/assets/4.badbca58.css"];
export const fonts = [];
