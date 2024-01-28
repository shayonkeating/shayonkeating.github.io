import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute, g as add_classes, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { marked } from "marked";
import strftime from "strftime";
const Calendar_days = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "3",
        "y": "4",
        "width": "18",
        "height": "18",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "y1": "2",
        "x2": "16",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "y1": "2",
        "x2": "8",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "y1": "10",
        "x2": "21",
        "y2": "10"
      }
    ],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M16 14h.01" }],
    ["path", { "d": "M8 18h.01" }],
    ["path", { "d": "M12 18h.01" }],
    ["path", { "d": "M16 18h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calendar-days" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CalendarDays = Calendar_days;
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Star$1 = Star;
var title$2 = "Climate Change x Housing";
var date$2 = "2023-08";
var repo$2 = "shayonkeating/climatechange";
var topics$2 = [
  "Python",
  "SQL",
  "React.js",
  "Jupyter Notebooks"
];
var lead$2 = "blah blah blah";
var image$2 = null;
var content$2 = "SQL database and analysis for determining where to live with climate change\ncause she aint going anywhere\n\n**Links: [GitHub]**";
const housingclimate = {
  title: title$2,
  date: date$2,
  repo: repo$2,
  topics: topics$2,
  lead: lead$2,
  image: image$2,
  content: content$2
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$2,
  date: date$2,
  default: housingclimate,
  image: image$2,
  lead: lead$2,
  repo: repo$2,
  title: title$2,
  topics: topics$2
}, Symbol.toStringTag, { value: "Module" }));
var title$1 = "LNP Database";
var date$1 = /* @__PURE__ */ new Date(17052768e5);
var repo$1 = "shayonkeating/lnp_database";
var topics$1 = [
  "Python",
  "SQL",
  "React.js",
  "Jupyter Notebooks"
];
var lead$1 = "blah blah blah";
var image$1 = null;
var content$1 = "Finding the right particle can be hard, until its not\n\n**Links: [GitHub]**";
const lnp_database = {
  title: title$1,
  date: date$1,
  repo: repo$1,
  topics: topics$1,
  lead: lead$1,
  image: image$1,
  content: content$1
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$1,
  date: date$1,
  default: lnp_database,
  image: image$1,
  lead: lead$1,
  repo: repo$1,
  title: title$1,
  topics: topics$1
}, Symbol.toStringTag, { value: "Module" }));
var title = "Schnar Map";
var date = "2024-01";
var repo = "shayonkeating/schnarmap";
var topics = [
  "Python",
  "SQL",
  "React.js"
];
var lead = "Find the schnar, hit the pow";
var image = null;
var content = "Interactive map for hitting the pow\n\n**Links: [GitHub]**";
const schnarmap = {
  title,
  date,
  repo,
  topics,
  lead,
  image,
  content
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content,
  date,
  default: schnarmap,
  image,
  lead,
  repo,
  title,
  topics
}, Symbol.toStringTag, { value: "Module" }));
const Markdown_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".md-output.svelte-19wf98v p{margin-bottom:1rem\n}.md-output.svelte-19wf98v strong{font-weight:600\n}.md-output.svelte-19wf98v code{font-size:95%\n}",
  map: null
};
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let html;
  let { source } = $$props;
  marked.use({
    renderer: {
      link(href, title2, text) {
        let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
        if (title2) {
          out += ' title="' + title2 + '"';
        }
        out += ">" + text + "</a>";
        return out;
      }
    }
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  $$result.css.add(css$2);
  html = marked.parse(source, { smartLists: true, smartypants: true });
  return `<div class="md-output svelte-19wf98v"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END -->
</div>`;
});
const utc = strftime.utc();
function formatTime(format, date2) {
  return utc(format, new Date(date2));
}
const Project_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pill.svelte-1d8a62h{display:flex;align-items:center;font-size:0.875rem;line-height:1.25rem;font-weight:500;margin-right:0.375rem;margin-bottom:0.5rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding-left:0.375rem;padding-right:0.375rem;padding-top:1px;padding-bottom:1px\n}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { images } = $$props;
  let { stars = null } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.stars === void 0 && $$bindings.stars && stars !== void 0)
    $$bindings.stars(stars);
  $$result.css.add(css$1);
  return `
<h3 class="text-black text-xl font-semibold mb-2"><span class="mr-1">${escape(data.title)}</span>
  <small class="whitespace-nowrap text-neutral-500 text-base font-normal">${escape(formatTime("%B %Y", data.date))}</small></h3>


<div class="flex flex-wrap mb-1"><a class="pill hover:!bg-neutral-200 transition-colors svelte-1d8a62h" href="${"https://github.com/" + escape(data.repo, true) + "/stargazers"}">${validate_component(Star$1, "Star").$$render($$result, { size: 14, class: "fill-current" }, {}, {})}
    ${stars?.[data.repo] !== void 0 ? `<span class="ml-1">${escape(stars[data.repo].toLocaleString())}</span>` : `<span>​</span>`}</a>
  ${each(data.topics, (tag) => {
    return `<div class="pill svelte-1d8a62h">${escape(tag)}</div>`;
  })}</div>


<div class="space-y-4"><div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12"><div class="col-span-3 md:col-span-2"><p class="text-lg font-light mb-3">${escape(data.lead)}</p>
      ${validate_component(Markdown, "Markdown").$$render($$result, { source: data.content }, {}, {})}</div>
    <div class="col-span-3 md:col-span-1"><a rel="external"${add_attribute("href", images[`../../projects/${data.image}`]?.default, 0)}><img${add_attribute("src", images[`../../projects/${data.image}`]?.default, 0)} alt="${escape(data.title, true) + " preview image"}"${add_classes((data.image_border ? "border" : "").trim())}></a></div></div>

  ${data.subimages ? `<div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">${each(data.subimages, (image2) => {
    return `<div class="col-span-full md:col-span-1"><a rel="external"${add_attribute("href", images[`../../projects/${image2}`]?.default, 0)}><img${add_attribute("src", images[`../../projects/${image2}`]?.default, 0)} alt="${escape(data.title, true) + " subimage"}"></a>
        </div>`;
  })}</div>` : ``}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1qrsmpk{display:flex;align-items:center;--tw-text-opacity:1;color:rgb(163 163 163 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}button.svelte-1qrsmpk:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))\n}button.active.svelte-1qrsmpk{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))\n}",
  map: null
};
function trimName(id) {
  return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectsByDate;
  let projectsByTitle;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const projects = /* @__PURE__ */ Object.assign({ "../../projects/housingclimate.md": __vite_glob_0_0, "../../projects/lnp_database.md": __vite_glob_0_1, "../../projects/schnarmap.md": __vite_glob_0_2 });
  const images = /* @__PURE__ */ Object.assign({});
  let stars = null;
  $$result.css.add(css);
  projectsByDate = Object.keys(projects).sort((a, b) => projects[b].date - projects[a].date);
  projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });
  [...projectsByTitle].sort((a, b) => {
    const starsA = 0;
    const starsB = 0;
    return starsB - starsA;
  });
  $$unsubscribe_page();
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Shayon Keating – Projects",
      description: "Open source projects"
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Open Source Work</h2>

  <p class="text-lg mb-4">Below is some of the work that I am proud of and want to show off. Feel free to interact
    with it below.
  </p></section>

<div class="bg-gray-800 text-neutral-200 dark"><section class="layout-md py-12"><h2 class="heading2 text-white">Table of Contents</h2>
    <ul class="sm:columns-2">${each(projectsByTitle, (id) => {
    return `<li><a class="link" href="${"#" + escape(trimName(id), true)}">${escape(projects[id].title)}</a>
        </li>`;
  })}</ul></section></div>

<div class="bg-neutral-50 border-b border-neutral-200 py-4"><div class="flex justify-center space-x-6"><button class="${["svelte-1qrsmpk", "active"].join(" ").trim()}">${validate_component(CalendarDays, "CalendarDays").$$render(
    $$result,
    {
      size: 18,
      strokeWidth: 1.8,
      class: "mr-1.5"
    },
    {},
    {}
  )} by Date
    </button>
    <button class="${["svelte-1qrsmpk", ""].join(" ").trim()}">${validate_component(Star$1, "Star").$$render(
    $$result,
    {
      size: 18,
      strokeWidth: 1.8,
      class: "mr-1.5"
    },
    {},
    {}
  )} by Stars
    </button></div></div>

${each(projectsByDate, (id) => {
    return `<section class="py-10"${add_attribute("id", trimName(id), 0)}><div class="mx-auto max-w-[1152px] px-4 sm:px-6">${validate_component(Project, "Project").$$render($$result, { data: projects[id], images, stars }, {}, {})}</div>
  </section>`;
  })}`;
});
export {
  Page as default
};
