<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "Climate Change x Housing",
      href: "/projects#climatechangehousing",
      desc: "Where in the US is soon to be the best place to live.",
    },
    {
      name: "Schnar Map",
      href: "/projects#schnarmap",
      desc: "Find the schanr, hit the pow.",
    },
    {
      name: "LNP Database",
      href: "/projects#lnpdatabase",
      desc: "Finding the right LNP can be tricky, but its not",
      aside: "Built for the Strand Therapeutics LNP discovery Team.",
    },
    {
      name: "Personal Website",
      href: "/projects#personal_website",
      desc: "Personal website hosted on github pages",
    },
  ];
</script>

<Seo
  title="Shayon Keating"
  description="Scientist, engineer, and researcher."
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="g">is a</span> scientist<span class="g">,</span>
  engineer<span class="g">, and</span>
  researcher<span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-3">
    <p>
      I currently work at <a class="link" href="https://www.strandtx.com"
        >Strand Therapeutics</a
      >, a genetic medicine company.
    </p>
    <p>
      I believe in good, simple open source design that allows for a deeper
      understanding of the question trying to be answered and solved. I love
      diving into a problem and getting to figure out the ins and outs of why it
      works.
    </p>
    <p>
      Other than that, I enjoy rock climbing, skiing, surfing, and running in my
      spare time. Feel free to talk to me about photography, your love of
      coffee, or the new JavaScript framework you just used.
    </p>
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Open-source work:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={15} class="inline text-neutral-500" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* vertical nav link on mobile */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
