<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo title="Shayon Keating – Resume" description="Howdy" />

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Northeastern University</h3>
      <div class="text-neutral-500 mb-0.5">Boston, MA</div>
    </div>
    <p class="byline">M.S. in Bioinformatics</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">Georgia Institute of Technology</h3>
      <div class="text-neutral-500 mb-0.5">Atlanta, GA</div>
    </div>
    <p class="byline">Certificate in Data Science and Analytics</p>
  </div>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">University of Georgia</h3>
      <div class="text-neutral-500 mb-0.5">Athens, GA</div>
    </div>
    <p class="byline">B.S in Microbiology and Immunology</p>
  </div>

  <h4 class="font medium mt-5 mb-2">Relevant Technical Coursework:</h4>
  <ul>
    <li>Collect-Store-Analyze Data (DA5020)</li>
    <li>Data Structures and Algorithms (CS5800)</li>
    <li>Bioinformatics Programming (BINF6200)</li>
    <li>Computational Methods 1 (BINF6308)</li>
    <li>Computational Methods 2 (BINF6309)</li>
    <li>Statistics for Bioinformatics (STAT6200)</li>
    <li>'Omics in Bioinformatics Programming (BINF6420)</li>
    <li>Co-op Work Experience (BINF6964)</li>
    <li>Ethics in Biological Research (BIOL6381)</li>
    <li>Probability and Statistics (STAT2000)</li>
  </ul>
</section>

<section class="layout-md py-1">
  <h2 class="heading2">Technical Skills</h2>
  <ul>
    <li>
      <b>Languages:</b> Python, R, SQL, Linux/Bash, Javascript, Typescript, CSS,
      HTML
    </li>
    <li>
      <b>Libraries:</b> pandas, matplotlib, numpy, pytorch, tensorflow, scikit-learn,
      pyspark
    </li>
    <li>
      <b>Frameworks:</b> react, node.js, next.js, react-native, d3, svelte kit, flask
    </li>
    <li>
      <b>Developer Tools:</b> Git, Docker, Visual Studio, Jupyter Notebook
    </li>
    <li>
      <b>Data Storage:</b> AWS, Azure, Snowflake
    </li>
  </ul>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Principal Associate Scientist"
    company="Strand Therapeutics"
    url="https://strandtx.com"
    dates="April 2023 – February 2024"
    location="Boston, MA"
  >
    <li>
      Strand Therapeutics is an early stage genetic medicine company focused on
      delivering mRNA circuits to the body. I worked on the delivery side of the
      company.
    </li>
    <li>
      Developed a nanoparticle tracking database, enhancing R&D data management
      through automated data retrieval of structured and unstructured data via
      ETL processes, leveraging PySpark alongside AWS Lambda and S3. This
      initiative supported data-driven decision- making between the executive
      team and R&D, aligning with the companys product development roadmap.
    </li>
    <li>
      Led the design and execution of automated nanoparticle assays using
      robots, significantly reducing R&D time from 10 to 2 hours a week and
      fostered a data-centric approach to product development. Integrated data
      from Benchling into Azure Data Lake.
    </li>
  </Workplace>

  <Workplace
    title="Research Associate II"
    company="Poseida Therapeutics"
    url="https://poseida.com"
    dates="January 2022 – April 2023"
    location="San Diego, CA"
  >
    <li>
      Poseida Therapeutics is clinical stage biopharmaceutical company focused
      on developing gene and cell therapies using a non viral delivery platform.
    </li>
    <li>
      Led screening efforts of a 10,000+ chemical library by automating data
      analysis for a high-throughput multi-dimensional assay. Utilized jupyter
      notebooks, pandas, scikit-learn, matplotlib, and PostgreSQL for data
      processing/schema design and developed a Tableau dashboard connected to
      the database. Achieved a 50% project time reduction through this automated
      data pipeline.
    </li>
    <li>
      Enhanced nanoparticle targeting by applying different statistical models
      in Design of Experiments (DOE). Utilized matplotlib, scikit- learn, pyDOE,
      and PyTorch for regression and normalization to identify the most
      effective formulation. Achieved a 5-fold improvement in lead product
      efficacy.
    </li>
  </Workplace>

  <Workplace
    title="Research Associate"
    company="Guide Therapeutics x Beam Therapeutics"
    url="https://investors.beamtx.com/news-releases/news-release-details/beam-therapeutics-announces-acquisition-guide-therapeutics"
    dates="January 2020 – January 2022"
    location="Atlanta, GA"
  >
    <li>
      Guide Therapeutics was a seed stage startup focused on in-vivo barcoding
      of mRNA in order to determine highly effective lipid nano particles. This
      company was bought by Beam Therapeutics in February 2021.
    </li>
    <li>
      Analysis of high dimensional data. Utilized pandas, scipy, and R to
      preprocess and clean data for analysis automation, then used TSNE and UMAP
      for bio-distribution and immune cell distribution. Allowed for automated
      triggered analysis running on AWS Lambda and storage with S3. Reduced time
      for analysis by over 90% and allowed for scalability.
    </li>
    <li>
      Enabled successful transfer of high throughput lipid nanoparticle
      screening platform from GuideTx to BeamTx through acquisition.
    </li>
  </Workplace>
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
