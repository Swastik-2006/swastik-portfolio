export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  skills: string[];
  icon: string;
  badgeColor?: string;
  fullDetails?: {
    scope: string;
    achievements: string[];
    learnings: string;
  };
}

export interface Experiment {
  id: string;
  title: string;
  tag: string;
  categoryBadge: string;
  category: 'all' | 'cv-ml' | 'data' | 'voice' | 'bi';
  description: string;
  tech: string[];
  repoUrl: string;
  actionText: string;
  icon: string;
  hasAudioWaveform?: boolean;
  notes?: string;
  problemSolved?: string;
}

export interface Artwork {
  id: string;
  title: string;
  medium: string;
  imageUrl: string;
  description: string;
  dimensions?: string;
  year: string;
}

export interface CycleStage {
  id: number;
  label: string;
  nodeTag: string;
  frequency: string;
  heading: string;
  description: string;
  icon: string;
  metricLabel: string;
  metricVal: string;
  studentQuote: string;
}

export const PERSONAL_INFO = {
  name: "Swastik Kundu",
  role: "Undergraduate CSE Student & Technical Explorer",
  institution: "Mallabhum Institute of Technology",
  location: "Bishnupur, West Bengal, India",
  timeline: "2024 — 2028 Expected",
  coordinates: "LAT: 23.07° N // LON: 87.32° E",
  email: "swastikkundu675@gmail.com",
  phone: "+91 86097 26725",
  github: "https://github.com/Swastik-2006",
  linkedin: "https://www.linkedin.com/in/swastik-kundu-9199042ba/",
  instagram: "https://www.instagram.com/swastikkundu2006/",
  philosophy: "Learn through raw friction",
  status: "Undergrad CSE (2024–28)"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "tlb-city",
    period: "DEC 2025 — JUN 2026",
    company: "TLB City Pvt. Ltd.",
    role: "Art Gallery Intern",
    description: "Managed WhatsApp community communication, coordinated creative competitions, curated participant submissions, and created Instagram promotional designs.",
    skills: ["Community Ops", "Visual Design", "Data Handling"],
    icon: "palette",
    badgeColor: "text-[#c8f169]",
    fullDetails: {
      scope: "Direct community coordination and visual creative curation for exhibitions and online competitions.",
      achievements: [
        "Facilitated seamless communication across WhatsApp cohorts of 500+ creative participants.",
        "Curated and cataloged hundreds of artwork entries across diverse visual mediums.",
        "Created engaging social graphic assets preserving aesthetic brand integrity."
      ],
      learnings: "How creative communities operate at scale, and how systematic tracking is essential even in artistic environments."
    }
  },
  {
    id: "nxtjob",
    period: "OCT 2025 — DEC 2025",
    company: "NxtJob.AI",
    role: "HR Operations Intern",
    description: "Helped with technical job sourcing, tracked candidate preferences, engaged in outbound LinkedIn recruitment outreach, managed systematic follow-ups, and categorized talent resumes.",
    skills: ["LinkedIn Outreach", "ATS Operations"],
    icon: "group_search",
    badgeColor: "text-[#c2c1ff]",
    fullDetails: {
      scope: "Technical talent sourcing and outbound candidate pipeline acceleration.",
      achievements: [
        "Executed high-volume LinkedIn outreach to identify active software engineering candidates.",
        "Maintained clean applicant tracking pipeline records with zero data redundancy.",
        "Synthesized candidate skillsets against open engineering requisitions."
      ],
      learnings: "The hiring landscape from the recruiter's lens: clarity of credentials and authentic projects beat keyword stuffing every time."
    }
  },
  {
    id: "gema",
    period: "JAN 2025 — MAR 2025",
    company: "GEMA Educational Tech",
    role: "Email Marketing Intern",
    description: "Worked with corporate business contact registries, automated data processing using Google Sheets, structured Mail Merge workflows, tested Mergo AI, and executed email campaigns.",
    skills: ["Mail Merge", "Google Sheets", "Mergo AI"],
    icon: "mark_email_read",
    badgeColor: "text-[#c4c9b2]",
    fullDetails: {
      scope: "Automated communication workflows, clean database parsing, and campaign delivery tracking.",
      achievements: [
        "Structured multi-attribute Mail Merge pipelines for targeted institutional announcements.",
        "Formulated Google Sheets data hygiene scripts to eliminate invalid email formats.",
        "Conducted A/B delivery tests using AI-assisted delivery tools (Mergo AI)."
      ],
      learnings: "Hands-on understanding of deliverability, automated pipeline discipline, and data hygiene."
    }
  }
];

export const EXPERIMENTS: Experiment[] = [
  {
    id: "virtual-webcam-mouse",
    title: "Virtual Webcam Mouse",
    tag: "PROTOTYPE // 2025",
    categoryBadge: "CV / ML",
    category: "cv-ml",
    description: "A hands-free mouse interface using webcam-based hand-gesture tracking for cursor movement, left/right clicks, and scrolling without physical peripherals.",
    tech: ["Python", "OpenCV", "MediaPipe", "Tkinter"],
    repoUrl: "https://github.com/Swastik-2006/Virtual_Webcam_Mouse",
    actionText: "View Repository",
    icon: "videocam",
    problemSolved: "Enabling touchless computing by converting live camera landmark coordinates into system pointer events using real-time hand vector geometry.",
    notes: "Taught me the nuances of camera latency, frame rate limitations on consumer hardware, and smoothing landmark jitter."
  },
  {
    id: "vc-signal-scout",
    title: "VC Signal Scout",
    tag: "AGGREGATOR // 2026",
    categoryBadge: "DATA ENGINE",
    category: "data",
    description: "Startup funding and market signal intelligence collector parsing multiple tech RSS sources with keyword scoring, noise filtering, and clean Streamlit dashboarding. Aggregated 100+ signals.",
    tech: ["Python", "Pandas", "RSS", "Streamlit"],
    repoUrl: "https://github.com/Swastik-2006",
    actionText: "Inspect Prototype",
    icon: "query_stats",
    problemSolved: "Eliminating the need to check 15 disparate tech funding newsletters daily by streaming structured deal announcements into a unified dashboard.",
    notes: "Learned effective data deduplication and regular expression matching for funding round sizes ($M, Seed, Series A)."
  },
  {
    id: "business-overview-dashboard",
    title: "Business Overview Dashboard",
    tag: "ANALYTICS // 2025",
    categoryBadge: "BI METRICS",
    category: "bi",
    description: "Interactive sales, revenue, and gross profit breakdown analyzing key regional vectors, dynamic KPI summaries, and custom date range slicers built with Microsoft Power BI.",
    tech: ["Power BI", "DAX", "Data Modeling", "Excel"],
    repoUrl: "https://github.com/Swastik-2006",
    actionText: "Report Portfolio",
    icon: "monitoring",
    problemSolved: "Transforming dense tabular transactional records into intuitive dimensional models with DAX time-intelligence calculations.",
    notes: "Mastered star schema modeling, calendar lookup table relationships, and executive KPI design."
  },
  {
    id: "bolonote",
    title: "BoloNote",
    tag: "VOICE PROTO // 2026",
    categoryBadge: "AUDIO TECH",
    category: "voice",
    description: "A multilingual voice-to-note-taking project exploring how speech technology can make capturing thoughts and creating notes easier.",
    tech: ["Speech Recognition", "Audio Processing", "Prototyping", "AI-Assisted"],
    repoUrl: "https://bolonote.ai.studio",
    actionText: "Inspect Experiment",
    icon: "mic",
    hasAudioWaveform: true,
    problemSolved: "Instant capture of spoken thoughts in regional and English accents, with automatic structure formatting.",
    notes: "Highlighted the difficulty of accent variations in noisy audio environments and prompted exploration of audio preprocessing filters."
  }
];

export const ARTWORKS: Artwork[] = [
  {
    id: "graphite-artwork",
    title: "Graphite Artwork",
    medium: "Traditional Charcoal & Graphite on Paper",
    year: "2024",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuByPZJ0fXP3x9Au5rpAWNtZIdMPbfYGJkygaQth2hGZh56CXfc_8uaR6g0ATaleZJVWxciOdbfEoSy1ucArH_e5lH1jh8H7fpL0gvBo9liIQ48pQtXUxftpPfpA6UGaOamrTQmgXRXF3UZJNpmC-hCN4uKPdhaeT8IgOoE4wr1f7IpFpVbK2dVgP0NQYLolFm3i0qhimKuILWgj4BBKBzeZNesEYqrYYZj1D9QRblsbwJDD0BOKyeHCZQ",
    description: "An expressive traditional portrait study crafted with dense graphite gradations, high-contrast chiaroscuro, and intricate spiritual iconography."
  },
  {
    id: "digital-artwork",
    title: "Digital Artwork",
    medium: "Digital Painting / Stylized Landscape",
    year: "2025",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRP3vrfwHpno-aaPqVtm-E4RmH2s5RpIy_M4yF8Qjuc00bg93kJf9d1QNSJKrTQzks5IOS_8PSZn98BN--OP5qOy_XusJSaC_RQvKpl3Z3qeIjjf02IWpDptQek_ccOnc9feBmLuSYSzsrBfNHrBUjJD-LHI9d9WCUuorVcNCSsocNnizmzox60hsbKyFO5bFcQUmDI3pBvcgRl8E0ODxt2gLzfahE4PR2o-plMR0FSuvmnZGiC9xaUA",
    description: "Vibrant atmospheric landscape exploration featuring bold sky palettes, rolling green contours, and evocative solitary tree geometry."
  },
  {
    id: "cargo-ship-sketch",
    title: "Colored Pencil Sketch",
    medium: "Colored Pencil & Technical Pen",
    year: "2024",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6DQ7ZDUKC6ybpFJICWArzzT8JTIhsT-PJDN-SSTvRgBR0eBGbUE-xKkAhHYrB_afW0q-kPMpKr_Sz_jAdKWKxviRWxWuHQgHny1h9R4qwn8-92SSxhJ08YNevJe7Ntyoup0WcQwCfB8axzBuGKovccrsGV3oR0iKlI2CHCnMm44mqrtpXUGhN0PNLzXBzzWSIbVABvRqKf_gWP8gWDYkCWm9qi3sCuNORkg9QJctF0--12LybyD8IA",
    description: "Detailed industrial maritime study of an ocean vessel carrying shipping containers, rendered in vivid textured color pencils with naval proportions."
  }
];

export const CYCLE_STAGES: CycleStage[] = [
  {
    id: 1,
    label: "01. IDEA",
    nodeTag: "NODE // 01",
    frequency: "FREQUENCY: UNREGULATED",
    heading: "Something catches my attention. A problem, a tool, or a curiosity.",
    description: "Ideas come rapidly: reading tech releases, seeing someone automate a spreadsheet, or wondering why something is manual. I open a new blank file, write down rough pseudocode, and feel the excitement of day zero.",
    icon: "lightbulb",
    metricLabel: "CYCLE STAGE",
    metricVal: "SPARK",
    studentQuote: "Everything looks possible when the editor is still empty."
  },
  {
    id: 2,
    label: "02. EXPERIMENT",
    nodeTag: "NODE // 02",
    frequency: "FREQUENCY: FREQUENT",
    heading: "I try building it or learning it. Writing scripts, testing APIs with AI.",
    description: "Hands-on keyboard. Setting up dependencies, trying to make OpenCV register hands or parsing RSS feeds into pandas dataframes. If I get stuck, I consult AI tools to unpack errors and keep forward momentum.",
    icon: "code",
    metricLabel: "CYCLE STAGE",
    metricVal: "BUILD",
    studentQuote: "Speed of typing is high; compiler tolerance is low."
  },
  {
    id: 3,
    label: "03. FAILURE",
    nodeTag: "NODE // 03",
    frequency: "FREQUENCY: UNAVOIDABLE",
    heading: "Things don't always work. Code breaks, enthusiasm drops, or I hit a wall.",
    description: "This is where reality kicks in. A model runs too slow on CPU, an API is deprecated, or academic exam season takes over. I used to feel ashamed of unfinished projects; now I accept them as natural terrain.",
    icon: "warning",
    metricLabel: "CYCLE STAGE",
    metricVal: "FRICTION",
    studentQuote: "The error trace is longer than the actual code."
  },
  {
    id: 4,
    label: "04. LEARNING",
    nodeTag: "NODE // 04",
    frequency: "FREQUENCY: TRANSFORMATIVE",
    heading: "I understand something I didn't know before. Why it broke, or what I need to study.",
    description: "The debugger reveals the flawed mental model. Completing 300+ Google Cloud labs proved that failure in the console is the fastest teacher. I document what broke and synthesize the real takeaway.",
    icon: "school",
    metricLabel: "CYCLE STAGE",
    metricVal: "INSIGHT",
    studentQuote: "Real learning only happens when your assumption gets broken."
  },
  {
    id: 5,
    label: "05. TRY AGAIN",
    nodeTag: "NODE // 05",
    frequency: "FREQUENCY: INFINITE LOOP",
    heading: "Another idea. Another experiment. Another attempt.",
    description: "You dust off the IDE, review your notes, and begin the next iteration with greater humility and sharper tools. Progress is not an immaculate straight line; it is the courage to begin again.",
    icon: "autorenew",
    metricLabel: "CYCLE STAGE",
    metricVal: "REBOOT",
    studentQuote: "The only real failure is quitting before the insight sets in."
  }
];

export const TOOLSTACK = {
  programming: [
    { name: "Python", status: "Primary language for ML, scripting, and data pipelines" },
    { name: "C", status: "Foundational academic CS, memory management, algorithms" }
  ],
  data: [
    { name: "Google Sheets", status: "Advanced formulas, data sanitization, pivot operations" },
    { name: "MS Excel", status: "Structured reporting and business datasets" },
    { name: "Notion", status: "Project tracking, engineering logs, research repository" }
  ],
  cloud: [
    { name: "Google Cloud Platform", status: "Hands-on IAM, Compute Engine, Cloud Run, Storage, Arcade Champion", highlight: true },
    { name: "AWS", status: "Currently exploring EC2, S3 fundamentals" }
  ],
  workflow: [
    { name: "Power BI", status: "Business dashboards, DAX queries, metric slicers" },
    { name: "Canva", status: "Community posters, social visual assets, presentations" },
    { name: "GitHub", status: "Version control, repositories, prototype releases" },
    { name: "CapCut", status: "Video editing, technical demonstrations, creative shorts" }
  ]
};
