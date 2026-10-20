import {
  SocialProfile,
  ImpactWorkload,
  ExperienceRole,
  FeaturedProject,
  SkillCategory,
} from "@/types/portfolio";

export const PROFILE_DATA = {
  name: "Harsh Kumar Singh",
  monogram: "HKS",
  role: "Software Engineer",
  organization: "PayPal",
  location: "Bengaluru, Karnataka, India",
  email: "harshs0891@gmail.com",
  resumePdfPath: "/resume/Harsh_Kumar_Singh_Resume.pdf",
  eyebrowBadge: "SOFTWARE ENGINEER @ PAYPAL · IIIT LUCKNOW '26",
  heroHeadline: "Engineering High-Throughput Data Systems & Full-Stack Products.",
  heroSubheadline:
    "I’m Harsh Kumar Singh, a Software Engineer at PayPal in Bengaluru. I specialize in optimizing large-scale distributed workloads across Apache Spark, BigQuery, and Cloud Bigtable—from cutting production query bytes billed by 99.88% to migrating 30M+ transaction pipelines—while building end-to-end AI web applications.",
  aboutNarrative: [
    "My engineering approach is shaped by a simple conviction: software should be both architecturally sound under load and genuinely useful to the people relying on it.",
    "Graduating from the Indian Institute of Information Technology, Lucknow (B.Tech in Computer Science and Business, 8.87 CGPA), I built my algorithmic foundation solving 1200+ competitive programming problems and earning national selections as a Flipkart Grid 5.0 Finalist and Amazon ML Summer School 2024 cohort member.",
    "At PayPal—first as a Software Engineering Intern in 2025 and now as a full-time Software Engineer—I engineer and optimize high-volume financial data systems. Whether migrating a 28–30 million transaction reporting pipeline to Apache Spark and Scala on Argo, refactoring BigQuery execution plans to eliminate redundant joins and cut bytes billed by 99.88%, or building thread-safe Bigtable client infrastructure, I focus on measurable reliability, cost efficiency, and clean system design.",
  ],
  engineeringPillars: [
    {
      id: "pillar-01",
      title: "Performance & Cost Efficiency by Default",
      description:
        "Diagnosing execution bottlenecks in distributed queries and batch pipelines—eliminating redundant joins, window functions, and full-table scans to drastically reduce compute slots and bytes billed.",
    },
    {
      id: "pillar-02",
      title: "Reusable Infrastructure & Automated Validation",
      description:
        "Building thread-safe client connection managers with caching and automated PDF/CSV regression comparison tools (SimileCompareApp) that verify production baselines without manual effort.",
    },
    {
      id: "pillar-03",
      title: "End-to-End Full-Stack AI Execution",
      description:
        "Architecting complete user-facing web platforms from relational database schemas (PostgreSQL & Drizzle ORM) and LLM orchestration (Google Gemini API) to responsive Next.js interfaces.",
    },
  ],
};

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    platform: "GitHub",
    handle: "@Harshs0891",
    url: "https://github.com/Harshs0891",
    category: "professional",
  },
  {
    platform: "LinkedIn",
    handle: "harsh-kumar-singh",
    url: "https://www.linkedin.com/in/harsh-kumar-singh-77bbb5184/",
    category: "professional",
  },
  {
    platform: "LeetCode",
    handle: "Scarface_13",
    url: "https://leetcode.com/u/Scarface_13/",
    category: "competitive",
  },
  {
    platform: "Codeforces",
    handle: "Scorteen",
    url: "https://codeforces.com/profile/Scorteen",
    category: "competitive",
  },
  {
    platform: "CodeChef",
    handle: "scorteen",
    url: "https://www.codechef.com/users/scorteen",
    category: "competitive",
  },
  {
    platform: "Email",
    handle: "harshs0891@gmail.com",
    url: "mailto:harshs0891@gmail.com",
    category: "contact",
  },
];

export const IMPACT_WORKLOADS: ImpactWorkload[] = [
  {
    id: "workload-msr-query",
    workloadTag: "WORKLOAD 01 · BIGQUERY EXECUTION OPTIMIZATION",
    roleContext: "PayPal · Software Engineer",
    timeframe: "July 2026 – Present",
    primaryMetric: {
      value: "99.88",
      unit: "%",
      label: "Reduction in Query Bytes Billed",
      ariaDescription: "99.88 percent reduction in BigQuery bytes billed for the MSR timezone-resolution query",
    },
    secondaryMetrics: [
      { value: "-79.5%", label: "Slot Consumption" },
      { value: "-46.6%", label: "Execution Time" },
    ],
    beforeState: {
      label: "Legacy Query Plan (Joins + Window Logic)",
      relativePercent: 100,
      displayValue: "100% Baseline Bytes",
    },
    afterState: {
      label: "Optimized Execution (Join & Window Elimination)",
      relativePercent: 1.5, // Visual floor so the bar remains visible
      displayValue: "0.12% Bytes Billed (-99.88%)",
    },
    technicalMechanism:
      "Refactored an MSR timezone-resolution query by eliminating expensive join operations and redundant window-function logic.",
    experienceAnchorId: "contrib-msr-optimization",
    technologies: ["Google BigQuery", "SQL", "Query Plan Optimization"],
  },
  {
    id: "workload-trr-migration",
    workloadTag: "WORKLOAD 02 · LARGE-SCALE SPARK PIPELINE MIGRATION",
    roleContext: "PayPal · Software Engineering Intern",
    timeframe: "June 2025 – August 2025",
    primaryMetric: {
      value: "28–30M",
      unit: "Txns",
      label: "Processed in ~1.5 Hours (65% Faster)",
      ariaDescription: "28 to 30 million transactions processed within 1.5 hours, down from 4 to 5 hours",
    },
    secondaryMetrics: [
      { value: "65%", label: "Runtime Reduction" },
      { value: "4–5h → 1.5h", label: "Batch Window" },
    ],
    beforeState: {
      label: "Legacy Java / Oracle Stack",
      relativePercent: 100,
      displayValue: "4.0 – 5.0 Hours",
    },
    afterState: {
      label: "Apache Spark / Scala on Argo Platform",
      relativePercent: 35,
      displayValue: "~1.5 Hours (-65%)",
    },
    technicalMechanism:
      "Migrated end-to-end merchant Transaction Detail Report (TRR) processing from legacy Java/Oracle to distributed Apache Spark and Scala on the Argo platform.",
    experienceAnchorId: "contrib-trr-migration",
    technologies: ["Apache Spark", "Scala", "Java", "DataProc", "GCP"],
  },
  {
    id: "workload-bq-batching",
    workloadTag: "WORKLOAD 03 · ON-DEMAND QUERY BATCHING POC",
    roleContext: "PayPal · Software Engineer",
    timeframe: "July 2026 – Present",
    primaryMetric: {
      value: "~35",
      unit: "%",
      label: "Reduction in BigQuery Slot Usage",
      ariaDescription: "Approximately 35 percent reduction in BigQuery slot consumption via dynamic UNION ALL batching",
    },
    secondaryMetrics: [
      { value: "-10%", label: "Data Processed" },
      { value: "UNION ALL", label: "Dynamic Batching" },
    ],
    beforeState: {
      label: "Isolated On-Demand Query Execution",
      relativePercent: 100,
      displayValue: "100% Slot Baseline",
    },
    afterState: {
      label: "Dynamic UNION ALL + Partition Pruning",
      relativePercent: 65,
      displayValue: "~65% Slot Usage (-35%)",
    },
    technicalMechanism:
      "Led an end-to-end POC implementing dynamic UNION ALL query batching with partition-prunable predicates while preserving request-specific filters.",
    experienceAnchorId: "contrib-bq-batching",
    technologies: ["Google BigQuery", "SQL", "Partition Pruning", "Java"],
  },
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    id: "paypal-swe-2026",
    role: "Software Engineer",
    organization: "PayPal",
    location: "Bengaluru, India",
    startDate: "July 2026",
    endDate: "Present",
    summary:
      "Engineering high-efficiency cloud data infrastructure, Bigtable client libraries, BigQuery cost/slot optimizations, and automated migration validation tooling.",
    contributions: [
      {
        id: "contrib-msr-optimization",
        title: "MSR Timezone-Resolution Query Optimization",
        category: "Optimization",
        problemContext:
          "High compute slot consumption, long execution latency, and excessive bytes billed on a critical MSR timezone-resolution query.",
        engineeringAction:
          "Analyzed query execution stages and restructured the SQL logic to completely eliminate redundant joins and expensive window-function evaluations.",
        verifiedOutcome:
          "Reduced bytes billed by 99.88%, cut BigQuery slot consumption by 79.5%, and decreased total execution time by 46.6%.",
        architecturalNotes: [
          "Replaced multi-pass window partitioning with direct deterministic resolution logic.",
          "Eliminated intermediate shuffle overhead caused by wide join stages.",
        ],
        metricsHighlight: ["-99.88% Bytes Billed", "-79.5% Slots", "-46.6% Latency"],
      },
      {
        id: "contrib-bq-batching",
        title: "BigQuery On-Demand Query Batching POC",
        category: "Optimization",
        problemContext:
          "Individual on-demand analytical queries repeatedly scanned overlapping partitions, driving up slot contention and total bytes scanned.",
        engineeringAction:
          "Led an end-to-end proof of concept implementing dynamic UNION ALL query batching paired with partition-prunable predicates while strictly isolating request-specific filters.",
        verifiedOutcome:
          "Reduced overall slot consumption by ~35% and total data processed by 10% without altering downstream payload semantics.",
        architecturalNotes: [
          "Constructed consolidated predicate envelopes so BigQuery's query planner prunes unreferenced partitions prior to scan.",
          "Preserved strict per-request filter multiplexed evaluation inside the batched execution tree.",
        ],
        metricsHighlight: ["~35% Slot Reduction", "-10% Data Processed"],
      },
      {
        id: "contrib-bigtable-manager",
        title: "Thread-Safe Cloud Bigtable Connection Manager",
        category: "Infrastructure",
        problemContext:
          "Redundant client instantiations and inconsistent connection lifecycle management across services interacting with Google Cloud Bigtable.",
        engineeringAction:
          "Developed a reusable, thread-safe Bigtable connection manager featuring client caching and configurable client creation parameters.",
        verifiedOutcome:
          "Simplified Bigtable access patterns, prevented connection leaks under concurrent load, and enabled standardized reuse across engineering teams.",
        architecturalNotes: [
          "Enforced thread-safe singleton/keyed caching semantics for heavy gRPC-backed Bigtable client instances.",
          "Exposed clean configuration builders for custom timeouts, retries, and target instance profiles.",
        ],
      },
      {
        id: "contrib-simile-compare",
        title: "SimileCompareApp — Automated Regression & Migration Validator",
        category: "Tooling",
        problemContext:
          "Manual verification of generated PDF and CSV merchant reports during legacy-to-ARGO platform migrations was slow and error-prone.",
        engineeringAction:
          "Engineered SimileCompareApp, an automated PDF/CSV report comparison utility designed for migration validation and continuous regression testing.",
        verifiedOutcome:
          "Automated discrepancy detection against production baselines and significantly reduced manual QA validation effort.",
        architecturalNotes: [
          "Automated structural and cell-level diffing across large CSV datasets and rendered PDF report layouts.",
          "Integrated into the migration verification workflow to flag schema or rounding regressions pre-release.",
        ],
      },
    ],
    technologies: [
      "Java",
      "Scala",
      "Python",
      "Apache Spark",
      "Google Cloud Bigtable",
      "Google BigQuery",
      "SQL",
      "Maven",
      "Jenkins",
      "JUnit",
      "ScalaTest",
      "SonarQube",
    ],
  },
  {
    id: "paypal-intern-2025",
    role: "Software Engineering Intern",
    organization: "PayPal",
    location: "Bengaluru, India",
    startDate: "June 2025",
    endDate: "August 2025",
    summary:
      "Executed the end-to-end migration and performance optimization of high-volume merchant Transaction Detail Reports (TRR) onto the Spark/Scala Argo platform.",
    contributions: [
      {
        id: "contrib-trr-migration",
        title: "Merchant Transaction Detail Report (TRR) Legacy-to-Argo Migration",
        category: "Migration",
        problemContext:
          "Legacy Java/Oracle report generation struggled with scaling bottlenecks, requiring 4–5 hours to process 28–30 million merchant transactions.",
        engineeringAction:
          "Completed the end-to-end migration of the TRR pipeline to a modern distributed Apache Spark and Scala architecture on PayPal's Argo platform, managing go-live deployment and post-launch production resolution.",
        verifiedOutcome:
          "Optimized processing of 28–30 million transactions to complete within ~1.5 hours—a 65% improvement over the 4–5 hour legacy runtime—while ensuring uninterrupted production report generation.",
        architecturalNotes: [
          "Decoupled monolithic Oracle cursor bottlenecks into distributed Spark RDD/DataFrame transformations.",
          "Tuned partitioning and executor memory allocation on DataProc/Argo to handle 30M-row skew without OOM failures.",
        ],
        metricsHighlight: ["28–30M Transactions", "65% Faster (4–5h → 1.5h)"],
      },
    ],
    technologies: [
      "Scala",
      "Apache Spark",
      "Python",
      "Java",
      "Google BigQuery",
      "Google Cloud Platform",
      "DataProc",
      "SQL",
      "Git",
      "Jenkins",
      "Agile/Scrum",
    ],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "project-edugenius",
    slug: "edugenius",
    title: "EduGenius",
    tagline: "AI-Driven Personalized Learning & Adaptive Assessment Platform",
    status: "Live in Production",
    problemStatement:
      "Self-paced learners face fragmented educational resources—jumping between static articles, unvetted video tutorials, and generic quizzes without adaptive difficulty or offline study portability.",
    solutionSummary:
      "An end-to-end AI learning platform that dynamically generates personalized lessons, curates difficulty-matched video recommendations, builds interactive quizzes via the Google Gemini API, and compiles offline-ready PDF study packets with embedded media links and answer keys.",
    githubUrl: "https://github.com/Harshs0891/EduGenius",
    liveUrl: "https://edu-genius-rouge.vercel.app/",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API",
      "Drizzle ORM",
      "PostgreSQL",
      "Streamlit",
    ],
    keyFeatures: [
      {
        title: "Adaptive Lesson & Quiz Synthesis",
        description:
          "Orchestrates structured prompts with the Google Gemini API to generate topic-specific modules and interactive multi-choice assessments tailored to learner proficiency.",
        techUsed: "Google Gemini API · TypeScript",
      },
      {
        title: "Context-Aware Video Recommendation Engine",
        description:
          "Evaluates topic relevance and difficulty level to embed curated instructional videos directly alongside generated study notes.",
        techUsed: "Next.js · AI Curation Pipeline",
      },
      {
        title: "Offline Accessibility via PDF Export Engine",
        description:
          "Serializes selected lessons, embedded media references, and complete quiz answer keys into cleanly formatted downloadable PDF documents for offline revision.",
        techUsed: "PDF Generation · React Client Pipeline",
      },
      {
        title: "Type-Safe Relational Persistence",
        description:
          "Models user courses, generated chapters, and quiz states using PostgreSQL and Drizzle ORM with end-to-end TypeScript schema validation.",
        techUsed: "PostgreSQL · Drizzle ORM",
      },
    ],
    architectureNodes: [
      {
        id: "node-client",
        layer: "01 · PRESENTATION & CLIENT LAYER",
        title: "Next.js & React Interactive Workspace",
        subtitle: "SSR + Client Interactive Study Modules",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        description:
          "Captures learner topic, target difficulty, and module preferences; renders adaptive lessons, video players, and interactive quiz state machines.",
      },
      {
        id: "node-orchestration",
        layer: "02 · APPLICATION & AI ORCHESTRATION",
        title: "Gemini API Synthesis & Curation Controller",
        subtitle: "Structured Prompting & Content Pipeline",
        technologies: ["Google Gemini API", "TypeScript", "Streamlit"],
        description:
          "Transforms user learning parameters into structured JSON schemas for chapter content, curated video metadata, and graded assessment items.",
      },
      {
        id: "node-data",
        layer: "03 · PERSISTENCE & EXPORT ENGINE",
        title: "Drizzle ORM + PostgreSQL & PDF Compiler",
        subtitle: "Relational Storage & Offline Artifact Generation",
        technologies: ["PostgreSQL", "Drizzle ORM", "PDF Export"],
        description:
          "Persists structured course modules and compiles portable PDF study guides containing formatted lessons, media links, and quiz answer keys.",
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cat-languages",
    title: "Programming Languages",
    description: "Core languages used across production backend services, data pipelines, and algorithmic problem solving.",
    skills: [
      { name: "Java", usedIn: ["PayPal SWE", "PayPal Intern"] },
      { name: "Scala", usedIn: ["PayPal SWE", "PayPal Intern (Spark/Argo)"] },
      { name: "Python", usedIn: ["PayPal SWE", "PayPal Intern", "AI/ML"] },
      { name: "C++", usedIn: ["1200+ CP Problems", "DSA"] },
      { name: "TypeScript", usedIn: ["EduGenius"] },
      { name: "JavaScript", usedIn: ["EduGenius", "Web Stack"] },
      { name: "SQL", usedIn: ["PayPal BigQuery Optimization", "PostgreSQL"] },
    ],
  },
  {
    id: "cat-backend-data",
    title: "Backend & Distributed Data Systems",
    description: "High-throughput batch processing, columnar analytics, and web backend frameworks.",
    skills: [
      { name: "Apache Spark", usedIn: ["PayPal SWE", "PayPal Intern (30M Txn Migration)"] },
      { name: "Google Cloud Bigtable", usedIn: ["PayPal SWE (Thread-Safe Client Manager)"] },
      { name: "Google BigQuery", usedIn: ["PayPal SWE (99.88% Bytes & 35% Slot Optimization)"] },
      { name: "Google Cloud DataProc", usedIn: ["PayPal Intern"] },
      { name: "Django", usedIn: ["Backend Python Services"] },
      { name: "Flask", usedIn: ["Lightweight APIs"] },
    ],
  },
  {
    id: "cat-frontend",
    title: "Frontend & Full-Stack Engineering",
    description: "Modern component architectures, server-rendered React, and type-safe ORM integration.",
    skills: [
      { name: "Next.js", usedIn: ["EduGenius", "Portfolio"] },
      { name: "React.js", usedIn: ["EduGenius", "Portfolio"] },
      { name: "Tailwind CSS", usedIn: ["EduGenius", "Portfolio"] },
      { name: "Drizzle ORM", usedIn: ["EduGenius"] },
      { name: "Streamlit", usedIn: ["EduGenius"] },
      { name: "HTML5 & CSS3", usedIn: ["Core Web"] },
    ],
  },
  {
    id: "cat-databases",
    title: "Databases & Storage Engines",
    description: "Relational OLTP databases, wide-column NoSQL stores, and serverless cloud data warehouses.",
    skills: [
      { name: "PostgreSQL", usedIn: ["EduGenius"] },
      { name: "MySQL", usedIn: ["Relational Data Modeling"] },
      { name: "Google BigQuery", usedIn: ["PayPal Production Analytics"] },
      { name: "Google Cloud Bigtable", usedIn: ["PayPal Low-Latency Storage"] },
    ],
  },
  {
    id: "cat-devops-tools",
    title: "Cloud, Build & Quality Engineering",
    description: "CI/CD automation, unit/integration testing frameworks, and static code analysis.",
    skills: [
      { name: "Google Cloud Platform (GCP)", usedIn: ["PayPal SWE & Intern"] },
      { name: "Git & GitHub", usedIn: ["Version Control & Governance"] },
      { name: "Jenkins", usedIn: ["PayPal CI/CD Pipelines"] },
      { name: "Maven", usedIn: ["PayPal Java/Scala Build"] },
      { name: "JUnit & ScalaTest", usedIn: ["PayPal Automated Testing"] },
      { name: "SonarQube", usedIn: ["PayPal Code Quality Gates"] },
      { name: "Postman", usedIn: ["API Validation"] },
    ],
  },
  {
    id: "cat-ai",
    title: "AI Engineering & Developer Workflow",
    description: "LLM API orchestration, structured generation, and AI-augmented software engineering.",
    skills: [
      { name: "Google Gemini API", usedIn: ["EduGenius Adaptive Generation"] },
      { name: "LLM API Integration", usedIn: ["EduGenius"] },
      { name: "Claude Code", usedIn: ["AI-Augmented Engineering"] },
      { name: "GitHub Copilot", usedIn: ["Developer Workflow"] },
    ],
  },
];

export const PEDIGREE_DATA = {
  competitiveProgramming: {
    totalSolved: "1200+",
    headline: "1200+ Algorithmic Problems Solved",
    description:
      "Consistent practice across data structures, graph algorithms, dynamic programming, and competitive contests.",
    platforms: [
      {
        name: "LeetCode",
        handle: "Scarface_13",
        url: "https://leetcode.com/u/Scarface_13/",
      },
      {
        name: "Codeforces",
        handle: "Scorteen",
        url: "https://codeforces.com/profile/Scorteen",
      },
      {
        name: "CodeChef",
        handle: "scorteen",
        url: "https://www.codechef.com/users/scorteen",
      },
    ],
  },
  distinctions: [
    {
      title: "Flipkart Grid 5.0 — National Finalist",
      organization: "Flipkart",
      description:
        "Reached the national finals in Flipkart's premier engineering campus challenge.",
    },
    {
      title: "Amazon ML Summer School 2024",
      organization: "Amazon",
      description:
        "Selected for Amazon's intensive machine learning training program covering core ML foundations and applied systems.",
    },
  ],
  education: [
    {
      institution: "Indian Institute of Information Technology, Lucknow",
      degree: "Bachelor of Technology in Computer Science and Business",
      period: "Dec 2022 – Jun 2026",
      location: "Lucknow, India",
      scoreLabel: "CGPA",
      scoreValue: "8.87 / 10.0",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (OOPS)",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      institution: "Smt. Draupadi Devi Tripathi Intermediate College",
      degree: "CBSE Class XII & Class X",
      period: "Feb 2019 – Jun 2021",
      location: "Rudrapur Khajani, Gorakhpur, UP",
      scoreLabel: "Board Scores",
      scoreValue: "Class XII: 95.8% · Class X: 93.8%",
      coursework: [],
    },
  ],
};