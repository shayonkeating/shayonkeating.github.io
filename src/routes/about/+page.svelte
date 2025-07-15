<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo title="Shayon Keating – About" description="Howdy" />

<section class="layout-md py-12">
  <div class="flex flex-col md:flex-row items-start gap-8">
    <div class="flex-1">
      <p class="text-m">
        I'm a data engineer with a passion for turning raw data into clean,
        AI-ready datasets. I’ve built pipelines, tools, and scalable systems for
        the biotech, pharmaceutical, and consumer product industries.
      </p>
      <p class="text-m mt-4">
        Outside of work I enjoy running on trails, hiking and backpacking into
        the wilderness, camping out of my car, rock climbing (95% indoors while
        working on my mental fortitude to go outside), skiing down mountains
        (personal favorite mountain is Mammoth!), photographing my adventures,
        eating <a
          href="https://eatchulatacos.com/"
          class="text-black-600 hover:text-blue-200"
          target="_blank"
          rel="noopener noreferrer"
          title="Click for the best taco rec">good food</a
        >, and having even better
        <a
          href="https://www.darkhorsecoffeeroasters.com/"
          class="text-black-600 hover:text-blue-200"
          target="_blank"
          rel="noopener noreferrer"
          title="Click for the best coffee shop rec">coffee</a
        >.
      </p>
      <p class="text-m mt-4">
        I currently live in San Diego, California with my partner Mary and my
        two cats (Jasper and Tabasco).
      </p>
    </div>

    <div class="flex-shrink-0 w-full md:w-1/2">
      <img
        src="/IMG_0215.jpg"
        alt="Shayon Keating"
        class="w-full h-auto rounded-xl"
      />
    </div>
  </div>
</section>

<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
