

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8544bb16.js","_app/immutable/chunks/index.4b1fc7b4.js","_app/immutable/chunks/stores.5805e1be.js","_app/immutable/chunks/singletons.117a9b73.js","_app/immutable/chunks/Icon.53b59da5.js"];
export const stylesheets = [];
export const fonts = [];
