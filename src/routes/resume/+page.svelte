<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
</script>

<Seo
  title="Shayon Keating – Resume"
  description="Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
/>

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
      <b>Libraries:</b> pandas, matplotlib, numpy, pytorch, tensorflow, scikit-learn
    </li>
    <li><b>Frameworks:</b> react, node.js, svelte kit, flask</li>
    <li>
      <b>Developer Tools:</b> Git, Docker, Visual Studio, Jupyter Notebook
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
      Enhanced R&D data management by creating a nanoparticle tracking database, 
      automated data retrieval using benchling's API, and set up ETL processes to store data in SQL. 
      Conducted analytics using Matplotlib and Pandas, and introduced React.js 
      for internal website development, improving communication between R&D and leadership.
    </li>
    <li>
      Automated nanoparticle assays with robotic liquid handlers, collaborated with 
      engineers on the script, and integrated data into Benchling and Azure Datalake 
      using Python. Reduced R&D time from 10 to 2 hours per week and eliminated data 
      quality and integrity issues.
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
      Lead screening efforts of a 10,000+ chemical library by automating data analysis for a 
      high-throughput multi-dimensional assay. Utilized pandas, scikit-learn, matplotlib, 
      and PostGreSQL for data processing and developed a Tableau dashboard connected to 
      the SQL database. Achieved a 50% project time reduction through this automated data pipeline.
    </li>
    <li>
      Enhanced nanoparticle targeting for specific stem cells by applying gaussian models in 
      Design of Experiments (DOE). Utilized matplotlib, scikit-learn, pyDOE, and PyTorch for 
      regression and normalization to identify the most effective formulation. Achieved a five-fold 
      improvement in lead nanoparticle efficacy.
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
      Analysis of in vivo experiments using Flowjo and Python. Utilized pandas and R to 
      preprocess and clean high dimensional data for analysis automation, then used TSNE and 
      UMAP for biodistribution in mouse/rat/non-human primate tissue looking at immune cell distribution. 
      Allowed for automated analysis using pandas and matplotlib. Reducing time spent on 
      analysis from 6-8 hours to 1.
    </li>
    <li>
      Enabled successful transfer of high throughput lipid nanoparticle screening platform from 
      GuideTx to BeamTx through acquisition.
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
