import { Game, WorkExperience, Education, Skill } from './types';
import fabricioProfile from './assets/images/fr-profile.png';
import mechasVsAliens from './assets/images/mechasvsaliens_icon_1024x1024.png';
import sandboxLogo from './assets/images/the-sandbox-sand-logo.png';
import jamcityLogo from './assets/images/68258934733a0-Jam-City.png';

export { sandboxLogo, jamcityLogo };

export const PERSONAL_INFO = {
  name: "Fabricio Rodriguez",
  title: "Software & Product Developer",
  subTitle: "Interactive Systems, Game Engines & High-Scale Digital Products",
  location: "Buenos Aires, Argentina (Remote Worldwide)",
  email: "fabrirodriguez23@gmail.com",
  phone: "1151634988",
  linkedIn: "https://www.linkedin.com/in/fabricio-rodriguez-40598210a",
  github: "https://github.com/FabricioER23",
  summary: "Software and product developer crafting responsive game systems, WebAssembly runtimes, and high-traffic consumer experiences. 10+ years bridging interactive design with scalable engineering across 50M+ player ecosystems."
};

export const GAMES: Game[] = [
  {
    id: "tangent-rush",
    title: "Tangent Rush",
    packageName: "com.mochigames.tangentrush",
    url: "https://play.google.com/store/apps/details?id=com.mochigames.tangentrush",
    iconPath: "https://play-lh.googleusercontent.com/EnODA4bcv_ek82TpKSqCphjyv1dW7TiCqg_ap2c1Z-9G3TvlTxzIx2e54Z0QHeIr4VN4Z3bWnK9En3QRXdQxvEg",
    genre: "High-Speed Arcade / Physics",
    releaseDate: "Published on Google Play",
    shortDescription: "A minimalist, high-speed 3D precision runner where you control a high-velocity sphere navigating a hazardous, dynamic obstacle course.",
    description: "A precision physics arcade game where timing, rhythm, and accuracy are everything. Guide a fast-rolling sphere along a floating pathway that shifts and turns at high speed. Avoid spikes, clear gaps, and maintain momentum in this beautiful, minimalist 3D world.",
    features: [
      "Minimalist 3D aesthetic with fluid physics-based gameplay",
      "Responsive touch controls for high-speed maneuvering",
      "Procedural pathway generation with escalating difficulty",
      "Immersive soundtrack reacting to player speed and flow"
    ],
    techStack: ["Godot Engine", "GDScript", "3D Physics", "Procedural Generation", "Mobile UX Design"]
  },
  {
    id: "mechas-vs-aliens",
    title: "Mechas vs Aliens",
    packageName: "com.mochigames.mechasvsaliens",
    url: "https://play.google.com/store/apps/details?id=com.mochigames.mechasvsaliens",
    iconPath: mechasVsAliens,
    genre: "Tactical Arcade / Strategy",
    releaseDate: "In Active Development",
    shortDescription: "A retro pixel art mobile action game where powerful cybernetic mechas defend humanity against relentless alien hordes.",
    description: "An action-packed retro mobile arcade game developed under Mochi Games. Take control of heavily armed robotic suits to fend off waves of alien invaders in fast-paced tactical gameplay. Experience intense battles, upgrade systems, and smooth touch-screen controls, all styled with authentic pixel-art visuals.",
    features: [
      "Sleek pixel-art visuals and retro soundtrack",
      "Dynamic touch controls optimized for mobile",
      "Multiple upgradable mecha suits with unique weapon loadouts",
      "Relentless waves of insectoid alien invaders and epic boss fights"
    ],
    techStack: ["Godot Engine", "GDScript", "Pixel Art", "Mobile Optimization", "Google Play Console"],
    isComingSoon: true
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Director of QA",
    company: "The Sandbox",
    location: "Buenos Aires, Argentina",
    period: "08/2023 – 03/2026",
    isCurrent: false,
    bulletPoints: [
      "Oversee departmental architecture by defining global quality procedures and identifying organizational risks.",
      "Lead and mentor a hybrid team of in-house leads and outsourced vendors to ensure 24/7 testing coverage.",
      "Integrate AI-driven workflows to automate Jira issue checking and synthesize playtest session feedback, effectively reducing manual triage time.",
      "Establish departmental KPIs to evaluate testing efficiency and communicate status updates to partners and stakeholders."
    ]
  },
  {
    role: "QA Manager",
    company: "Jam City",
    location: "Buenos Aires, Argentina",
    period: "11/2018 – 07/2023",
    isCurrent: false,
    bulletPoints: [
      "Design QA strategies for Platform Engineering and Game Services utilized across the company’s entire portfolio.",
      "Supervise functional, automation, and non-functional testing teams for high-traffic mobile titles.",
      "Leverage Firebase, BigQuery, and Google Analytics to validate event tracking and monitor production stability.",
      "Identify business-critical risks and prioritize testing activities to meet aggressive milestone dates."
    ],
    games: ["cj", "pp", "jj", "bol", "cjb", "gg", "sp", "fg", "frozen", "frozen_freefall", "emoji_blitz"]
  },
  {
    role: "QA Coordinator",
    company: "Jam City",
    location: "Los Angeles, USA",
    period: "04/2017 – 10/2018",
    isCurrent: false,
    bulletPoints: [
      "Build custom JIRA project workflows to streamline bug tracking and developer hand-offs.",
      "Conduct in-depth analytics and network testing using Charles Proxy and Postman.",
      "Coordinate daily tasks for CRM teams and support developers during critical bug-fix phases."
    ],
    games: ["cj", "pp", "jj", "bol", "cjb", "gg", "sp", "fg"]
  },
  {
    role: "Lead QA Tester",
    company: "Jam City",
    location: "Buenos Aires, Argentina",
    period: "05/2016 – 04/2017",
    isCurrent: false,
    bulletPoints: [
      "Coordinate the team's daily tasks and ensure consistent test plan execution.",
      "Generate and execute comprehensive test plans.",
      "Perform bug tracking using the JIRA tool and monitor issues effectively.",
      "Conduct analytics tests utilizing Charles Proxy and ensure testing thoroughness.",
      "Collaborate closely with the development team to coordinate specific testing initiatives."
    ],
    games: ["cjb"]
  },
  {
    role: "Lead QA Tester",
    company: "Jam City",
    location: "Buenos Aires, Argentina",
    period: "05/2015 – 05/2016",
    isCurrent: false,
    bulletPoints: [
      "Supervise the team's daily tasks and manage the execution of test plans.",
      "Generate and execute detailed test plans.",
      "Conduct bug tracking with the JIRA tool for efficient project management.",
      "Perform tests utilizing Charles Proxy to assess functionality and compliance.",
      "Collaborate with the development team for targeted testing efforts."
    ],
    games: ["bol"]
  },
  {
    role: "Quality Assurance Tester",
    company: "Jam City",
    location: "Buenos Aires, Argentina",
    period: "03/2015 – 05/2015",
    isCurrent: false,
    bulletPoints: [
      "Execute and generate test plans while following bug tracking protocols, coordinating specific functionality testing with the development team."
    ],
    games: ["cj", "pp", "jj", "bol"]
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    location: "Buenos Aires, Argentina",
    period: "03/2013 – 12/2015",
    isCurrent: false,
    bulletPoints: [
      "Designed branding, promotional materials, and vector assets for independent businesses.",
      "Created original digital art, user interfaces, and custom animation storyboards.",
      "Established foundational visual design expertise, latter applied to game assets and UX workflows."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Universidad de Buenos Aires",
    degree: "Grado, Diseño de Imagen y Sonido",
    period: "2012 – 2019",
    location: "Buenos Aires, Argentina"
  }
];

export const SKILLS: Skill[] = [
  // QA Strategy
  { name: "Quality Strategy & Architecture", category: "QA Strategy", description: "Designing full-lifecycle QA departments, pipelines, and frameworks for web, Web3, and mobile systems." },
  { name: "Risk Management & Mitigation", category: "QA Strategy", description: "Identifying business-critical blocker risks, triaging issues, and planning strategic testing windows." },
  { name: "Vendor & Stakeholder Management", category: "QA Strategy", description: "Coordinating 24/7 outsourced testing vendors, integrating feedback, and reporting directly to executive partners." },
  
  // Tech & Automation
  { name: "AI-Driven SDLC Optimization", category: "Tech & Automation", description: "Leveraging custom LLM automation to validate JIRA reports, synthesize user feedback, and accelerate triaging." },
  { name: "API & Network Testing", category: "Tech & Automation", description: "Inspecting payload requests, validating services, and mocking endpoints using Postman and Charles Proxy." },
  { name: "Python", category: "Tech & Automation", description: "Writing lightweight scripts for task automation, data extraction, and testing pipelines." },
  { name: "Firebase & Analytics", category: "Tech & Automation", description: "Analyzing game analytics, tracking real-time crash logs, and validating custom event schemas." },
  
  // Management & KPI
  { name: "Agile Product Management", category: "Management & KPI", description: "Driving sprint workflows, orchestrating cross-functional teams, and guiding developer hand-offs." },
  { name: "KPI Development", category: "Management & KPI", description: "Defining quantifiable metrics for testing efficiency, defect leakage rate, and resolution velocity." },
  { name: "JIRA Workflow Design", category: "Management & KPI", description: "Customizing ticket lifecycles, fields, board transitions, and automations to optimize task dispatch." },
  
  // Design & UX
  { name: "UX/UI Design", category: "Design & UX", description: "Creating intuitive screen transitions, menu layouts, player controls, and HUD mechanics." },
  { name: "Game Economy Design", category: "Design & UX", description: "Formulating balancing spreadsheets, level-ups, soft/hard currencies, and game loops." },
  { name: "Digital Art & Motion Graphics", category: "Design & UX", description: "Designing custom pixel art, vector textures, sprite animations, and interactive video teasers." }
];

export const INTERESTS = [
  "UX/UI Design",
  "Game Economy Design",
  "AI & Machine Learning in Testing",
  "Digital Art & Motion Graphics",
  "LiveOps & Game Services",
  "Data & Product Analytics"
];
