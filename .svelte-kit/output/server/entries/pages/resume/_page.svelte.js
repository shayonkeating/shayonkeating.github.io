import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
const Workplace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { company } = $$props;
  let { url } = $$props;
  let { dates } = $$props;
  let { location } = $$props;
  let { defaultHidden = false } = $$props;
  let hidden = defaultHidden;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
    $$bindings.dates(dates);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.defaultHidden === void 0 && $$bindings.defaultHidden && defaultHidden !== void 0)
    $$bindings.defaultHidden(defaultHidden);
  return `<div class="${["mb-8", hidden ? "cursor-pointer" : ""].join(" ").trim()}"><h3 class="text-black text-lg leading-tight mb-1">${escape(title)} at <a class="link"${add_attribute("href", url, 0)}>${escape(company)}</a></h3>
  <p class="font-light mb-2"><span class="whitespace-nowrap">${escape(dates)}</span>
    <span class="px-0.5 text-neutral-500">•</span>
    <span class="whitespace-nowrap">${escape(location)}</span></p>
  ${!hidden ? `<ul class="list-disc pl-7 marker:text-neutral-400">${slots.default ? slots.default({}) : ``}</ul>` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'b.svelte-w75nkw.svelte-w75nkw{font-weight:500\n}ul.svelte-w75nkw.svelte-w75nkw{list-style-type:disc;padding-left:1.75rem\n}ul.svelte-w75nkw .svelte-w75nkw::marker{color:rgb(163 163 163 )\n}ul.svelte-w75nkw.svelte-w75nkw::marker{color:rgb(163 163 163 )\n}.byline.svelte-w75nkw.svelte-w75nkw{font-family:Newsreader, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;font-style:italic\n}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Shayon Keating – Resume",
      description: "Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Education</h2>

  <div class="mb-4"><div class="flex justify-between items-end"><h3 class="text-black text-lg">Northeastern University</h3>
      <div class="text-neutral-500 mb-0.5">Boston, MA</div></div>
    <p class="byline svelte-w75nkw">M.S. in Bioinformatics</p></div>

  <div class="mb-4"><div class="flex justify-between items-end"><h3 class="text-black text-lg">Georgia Institute of Technology</h3>
      <div class="text-neutral-500 mb-0.5">Atlanta, GA</div></div>
    <p class="byline svelte-w75nkw">Certificate in Data Science and Analytics</p></div>

  <div class="mb-4"><div class="flex justify-between items-end"><h3 class="text-black text-lg">University of Georgia</h3>
      <div class="text-neutral-500 mb-0.5">Athens, GA</div></div>
    <p class="byline svelte-w75nkw">B.S in Microbiology and Immunology</p></div>

  <h4 class="font medium mt-5 mb-2">Relevant Technical Coursework:</h4>
  <ul class="svelte-w75nkw"><li class="svelte-w75nkw">Collect-Store-Analyze Data (DA5020)</li>
    <li class="svelte-w75nkw">Data Structures and Algorithms (CS5800)</li>
    <li class="svelte-w75nkw">Bioinformatics Programming (BINF6200)</li>
    <li class="svelte-w75nkw">Computational Methods 1 (BINF6308)</li>
    <li class="svelte-w75nkw">Computational Methods 2 (BINF6309)</li>
    <li class="svelte-w75nkw">Statistics for Bioinformatics (STAT6200)</li>
    <li class="svelte-w75nkw">&#39;Omics in Bioinformatics Programming (BINF6420)</li>
    <li class="svelte-w75nkw">Co-op Work Experience (BINF6964)</li>
    <li class="svelte-w75nkw">Ethics in Biological Research (BIOL6381)</li>
    <li class="svelte-w75nkw">Probability and Statistics (STAT2000)</li></ul></section>

<section class="layout-md py-1"><h2 class="heading2">Professional Experience</h2>

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Principal Associate Scientist",
      company: "Strand Therapeutics",
      url: "https://strandtx.com",
      dates: "April 2023 – Current",
      location: "Boston, MA"
    },
    {},
    {
      default: () => {
        return `<li>Strand Therapeutics is an early stage genetic medicine company focused on delivering
    mRNA circuits to the body. I worked on the delivery side of the company.
  </li>
  <li>Designed and built a lipid nano particle (LNP) databse to track LNPs being developed.
    Utilized benchlings API to access unstructured data and build an LNP database pipeline that 
    makes API calls daily for new entries, extracts the necessary data, transforms the data into 
    a readable format, and loads into a SQL database.
  </li>
  <li>Created the frontend, including a user dashboard, analytics for interacting with the LNP database.
    including a LNP scorecard that shows the needed information for the LNP. Introduced React.js for 
    user interaction to the company.
  </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Research Associate II",
      company: "Poseida Therapeutics",
      url: "https://poseida.com",
      dates: "January 2022 – April 2023",
      location: "San Diego, CA"
    },
    {},
    {
      default: () => {
        return `<li>Poseida Therapeutics is clinical stage biopharmaceutical company focused on developing gene and cell 
    therapies using a non viral delivery platform.
  </li>
  <li>Developed and automated data analysis for a high throughput cell assay using pandas, scikit-learn, and PostGreSQL to 
    determine highly effective chemically distinct excipients for lipid nanoparticle formulations from 
    a small molecule library consisting of 10000+ chemicals.
  </li>
  <li>Developed a LNP targeting Hemopoietic Stem Cells utilizing different statistical models through Design of Experiments (DOE) 
    using SVEM models; matplotlib, scikit-learn, and TensorFlow regressions and normalizations to determine best formulation. 
    Optimized lead formulation five-fold through this methodology. 
  </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Research Associate",
      company: "Guide Therapeutics x Beam Therapeutics",
      url: "https://investors.beamtx.com/news-releases/news-release-details/beam-therapeutics-announces-acquisition-guide-therapeutics",
      dates: "January 2020 – January 2022",
      location: "Atlanta, GA"
    },
    {},
    {
      default: () => {
        return `<li>Guide Therapeutics was a seed stage startup focused on in-vivo barcoding of mRNA in order to determine 
    highly effective lipid nano particles. This company was bought by Beam Therapeutics in February 2021.
  </li>
  <li>I conducted analysis of in-vivo flow cytometry experiments using Flowjo and Python. Utilized pandas and 
    R to preprocess and clean flow cytometry data for analysis automation, then used TSNE and UMAP for biodistribution 
    of lipid-nanoparticles in mouse/rat/non-human primate tissue looking at immune cell distribution.
  </li>`;
      }
    }
  )}</section>

<section class="layout-md py-1"><h2 class="heading2">Technical Skills</h2>
  <ul class="svelte-w75nkw"><li class="svelte-w75nkw"><b class="svelte-w75nkw">Languages:</b> Python, R, SQL, Linux/Bash, Javascript, Typescript, CSS, HTML</li>
    <li class="svelte-w75nkw"><b class="svelte-w75nkw">Libraries:</b> pandas, matplotlib, numpy, pytorch, tensorflow, scikit-learn</li>
    <li class="svelte-w75nkw"><b class="svelte-w75nkw">Frameworks:</b> react, node.js, svelte kit, flask</li>
    <li class="svelte-w75nkw"><b class="svelte-w75nkw">Developer Tools:</b> Git, Docker, Google Cloud Platform, Visual Studio, PyCharm, Jupyter Notebook</li></ul>
</section>`;
});
export {
  Page as default
};
