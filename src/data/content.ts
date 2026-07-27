export const profile = {
  name: "Daniel Birman",
  title: "Data Scientist @ Viasat",
  subtitle: "Data Science @ UC San Diego",
  location: "San Diego, California",
  email: "dbirman28@gmail.com",
  emailAlt: "dbirman@ucsd.edu",
  phone: "+1 (619) 922-9772",
  linkedin: "https://www.linkedin.com/in/daniel-birman/",
  github: "https://github.com/danielbirman28",
  resume: "/2026_Daniel_Birman_resume.pdf",
  about: [
    "Hi, I'm Daniel — an undergraduate at UC San Diego majoring in data science, graduating March 2026.",
    "I work on satellite network analytics at Viasat, building data pipelines and full-stack tools on Google Cloud Platform. I'm passionate about turning complex datasets into clear, actionable insights.",
    "Outside of work, I've led industry outreach for the Data Science Student Society at UCSD, completed a Deloitte mentorship in predictive analytics, and researched oceanographic data science at the University of Washington.",
  ],
};

export const experience = [
  {
    company: "Viasat",
    role: "Data Scientist",
    location: "Carlsbad, CA",
    period: "Aug 2025 – Present",
    bullets: [
      "Support the Government Services and Solutions (GSS) team to help stakeholders understand, optimize, and leverage Viasat's global satellite network data for mission-critical decision-making.",
      "Design data-driven insights and visualizations that translate complex satellite telemetry and coverage metrics into actionable intelligence.",
      "Architect scalable back-end services on GCP using BigQuery, Compute Engine, Docker, and Cloud Storage.",
      "Collaborate with engineers, data scientists, and government-focused product teams to align technical solutions with operational requirements.",
    ],
  },
  {
    company: "Viasat",
    role: "Full Stack Software Engineering Intern",
    location: "Carlsbad, CA",
    period: "Mar 2025 – Aug 2025",
    bullets: [
      "Engineered a 0-to-1 full-stack app showcasing Viasat's global satellite network coverage with TypeScript, React, and Mapbox.",
      "Built a back end on GCP with BigQuery, Google Compute Engine, and Docker.",
      "Deployed scalable API endpoints and data pipelines processing 10+ million points of satellite network coverage data.",
    ],
  },
  {
    company: "Deloitte",
    role: "Data Science Mentorship Program",
    location: "La Jolla, CA",
    period: "Jan 2024 – Jun 2024",
    bullets: [
      "Led a cross-functional team of 6 students to design and deploy a predictive business analytics app forecasting Amazon customer purchasing trends.",
      "Built high-performance data pipelines to process and transform 1M+ Amazon transaction records for ML models.",
      "Partnered with Deloitte over 6 months, presenting technical solutions to practitioners and UCSD students.",
    ],
  },
  {
    company: "Data Science Student Society at UCSD",
    role: "Vice President, External Subcommittee",
    location: "La Jolla, CA",
    period: "Jun 2023 – Jun 2024",
    bullets: [
      "Organized events connecting UCSD data science students with industry professionals from companies including ASML.",
      "Led external outreach initiatives for one of UCSD's largest data science student organizations.",
    ],
  },
  {
    company: "University of Washington",
    role: "Data Science in Oceanography Undergraduate Program",
    location: "Seattle, WA",
    period: "Summer 2024",
    bullets: [
      "Selected for a competitive two-week summer research program at the School of Oceanography.",
      "Applied machine learning and time series analysis to oceanographic datasets under faculty mentorship.",
      "Explored dependencies between significant wave height and surface wind speed in a final research project.",
    ],
  },
];

export const projects = [
  {
    title: "Google GenAI For Good: Detecting Misinformation Online",
    period: "Sep 2025 – Jun 2026",
    tools: "Python, Google AI Studio, Hugging Face, FastAPI, scikit-learn",
    bullets: [
      "Building and evaluating NLP pipelines for tokenization and text classification on large-scale datasets.",
      "Engineering advanced prompting strategies to improve text generation and contextual bias analysis.",
      "Integrating Google AI Studio API via FastAPI with model evaluation metrics and ethical AI practices.",
      "Collaborating in a team of 4, presenting weekly updates to Google directors.",
    ],
    link: null,
  },
  {
    title: "Identifying Dependencies Between Wave Height and Wind Speed",
    period: "Summer 2024",
    tools: "Python, pandas, xarray, matplotlib, TensorFlow, scikit-learn",
    bullets: [
      "Final research project from the UW Data Science in Oceanography program.",
      "Analyzed relationships between significant wave height and surface wind speed using oceanographic datasets.",
    ],
    link: null,
  },
  {
    title: "Exploring Food Recipe Complexity and Healthiness",
    period: "2024",
    tools: "Python, pandas, scikit-learn, matplotlib",
    bullets: [
      "Investigated the relationship between recipe complexity metrics and nutritional healthiness scores.",
    ],
    link: null,
  },
  {
    title: "NBA Career Outcome Prediction",
    period: "2024",
    tools: "Python, pandas, NumPy, scikit-learn, seaborn",
    bullets: [
      "Built a machine learning model to predict a player's career outcome based on their first four years of performance.",
    ],
    link: "https://github.com/danielbirman28/NBA-Machine-Learning-Model",
  },
];

export const education = {
  school: "University of California, San Diego",
  degree: "Bachelor of Science in Data Science",
  graduation: "Expected March 2026",
  gpa: "3.6",
  activities: "Data Science Student Society (DS3)",
};

export const skills = [
  {
    category: "Languages",
    items: [
      "Python",
      "SQL (PostgreSQL, NoSQL)",
      "Java",
      "JavaScript",
      "TypeScript",
      "R",
      "HTML/CSS",
    ],
  },
  {
    category: "Cloud & Data Platforms",
    items: [
      "Google Cloud Platform (BigQuery, Cloud Storage, Compute Engine, Dataflow)",
      "AWS",
    ],
  },
  {
    category: "Data Science & ML",
    items: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "Dask",
      "seaborn",
      "Matplotlib",
      "plotly",
      "xarray",
      "Hugging Face",
    ],
  },
  {
    category: "Frameworks & APIs",
    items: ["FastAPI", "TensorFlow", "D3.js", "Mapbox", "React"],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Jira",
      "Jupyter Notebooks",
      "Google AI Studio",
      "REST APIs",
      "MATLAB",
      "VS Code",
      "IntelliJ",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
