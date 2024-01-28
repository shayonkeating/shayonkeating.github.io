import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
import { S as Seo } from "../../chunks/Seo.js";
const Arrow_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "7",
        "y1": "17",
        "x2": "17",
        "y2": "7"
      }
    ],
    ["polyline", { "points": "7 7 17 7 17 17" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowUpRight = Arrow_up_right;
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".g.svelte-1idxs6r{--tw-text-opacity:1;color:rgb(163 163 163 / var(--tw-text-opacity))\n}.project-pair.svelte-1idxs6r{margin-left:-0.75rem;margin-right:-0.75rem;display:grid;row-gap:0.25rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.project-pair.svelte-1idxs6r:hover{--tw-bg-opacity:1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))\n}@media(min-width: 640px){.project-pair.svelte-1idxs6r{grid-template-columns:1fr 2fr\n    }}aside.svelte-1idxs6r{margin-top:0.125rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(115 115 115 / var(--tw-text-opacity))\n}@media(max-width: 420px){#eric-is.svelte-1idxs6r{margin-top:-2.5rem\n    }}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const featuredProjects = [
    {
      name: "Climate Change x Housing",
      href: "/projects#climatechangehousing",
      desc: "Where in the US is soon to be the best place to live."
    },
    {
      name: "Schnar Map",
      href: "/projects#schnarmap",
      desc: "Find the schanr, hit the pow."
    },
    {
      name: "LNP Database",
      href: "/projects#lnpdatabase",
      desc: "Finding the right LNP can be tricky, but its not",
      aside: "Built for the Strand Therapeutics LNP discovery Team."
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Shayon Keating",
      description: "Scientist, engineer, and researcher."
    },
    {},
    {}
  )}

<p class="layout-md text-black text-xl leading-tight font-light mb-16 svelte-1idxs6r" id="eric-is"><span class="g svelte-1idxs6r">is a</span> scientist<span class="g svelte-1idxs6r">,</span>
  engineer<span class="g svelte-1idxs6r">, and</span><br>
  researcher<span class="g svelte-1idxs6r">.</span></p>

<div class="layout-md text-lg space-y-14"><div class="space-y-3"><p>I currently work at <a class="link" href="https://www.strandtx.com">Strand Therapeutics</a>, a
      genetic medicine company.
    </p>
    <p>I believe in good, simple open source design that allows for a deeper understanding of the question trying
      to be answered and solved. I love diving into a problem and getting to figure out the ins and outs of why it 
      works. 
    </p>
    <p>Other than that, I enjoy rock climbing, skiing, surfing, and running in my spare time. Feel free to talk 
      to me about photography, your love of coffee, or the new JavaScript framework you just used.
    </p></div>

  <div class="leading-snug space-y-4"><p class="pb-2">Open-source work:</p>

    ${each(featuredProjects, (project) => {
    return `<a class="project-pair svelte-1idxs6r"${add_attribute("href", project.href, 0)}><div class="text-black font-medium">${escape(project.name)}
          ${validate_component(ArrowUpRight, "ArrowUpRight").$$render(
      $$result,
      {
        size: 15,
        class: "inline text-neutral-500"
      },
      {},
      {}
    )}</div>
        <div><p>${escape(project.desc)}</p>
          ${project.aside ? `<aside class="svelte-1idxs6r">${escape(project.aside)}</aside>` : ``}</div>
      </a>`;
  })}</div>
</div>`;
});
export {
  Page as default
};
