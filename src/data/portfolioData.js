export const personalDetails = {
  name: "Yellaling",
  fullName: "Yellaling Kalyane",
  roleTitle: "Full-Stack Software Engineer & Quality Automation Specialist",
  subTitle: "Building Scalable Web Applications & Resilient Systems",
  taglines: [
    "Full-Stack Software Engineer (MERN & Next.js)",
    "React.js • Node.js • TypeScript Developer",
    "Quality Engineering & Automation Specialist",
    "Python & LLM Automation Enthusiast",
    "IIIT Dharwad CSE '26"
  ],
  location: "Bidar, Karnataka, India",
  phone: "+91 6362678482",
  email: "yellalingkalyane@gmail.com",
  github: "https://github.com/yellaling2204",
  githubUsername: "yellaling2204",
  linkedin: "https://www.linkedin.com/in/yellaling-kalyane-a75a6a25b/",
  linkedinUsername: "yellaling-kalyane-a75a6a25b",
  availability: "Immediate Joiner",
  relocation: "Open to Relocate",
  summary:
    "Full-Stack Software Engineer and 2026 B.Tech graduate from IIIT Dharwad with hands-on experience in building modern web applications, scalable REST APIs, real-time architectures, and automated testing frameworks. Proficient in React.js, Next.js, Node.js, Express, TypeScript, MongoDB, SQL, and Python, with production exposure at SystemTron. Experienced in developing end-to-end applications from database schema design and JWT authorization to responsive UIs and automated BDD regression suites. Passionate about software reliability, clean code, and engineering resilient products."
};

export const stats = [
  { label: "Education", value: "2026", subtext: "B.Tech CSE, IIIT Dharwad" },
  { label: "Core Repositories", value: "8+", subtext: "Full-Stack, AI & QA" },
  { label: "Industry Experience", value: "MERN Intern", subtext: "SystemTron (Dec-Jan)" },
  { label: "Hiring Availability", value: "Immediate", subtext: "Ready to Relocate" },
];

export const marqueeTechnologies = [
  "React.js",
  "Next.js 14",
  "Node.js",
  "TypeScript",
  "Express.js",
  "MongoDB",
  "Prisma ORM",
  "Socket.IO",
  "Tailwind CSS",
  "Python",
  "Docker",
  "Jenkins CI/CD",
  "Postman API",
  "BDD Test Automation",
  "OpenCV",
  "MySQL",
  "Git & GitHub"
];

// Systematic, high-end categorized skills data
export const technicalPillars = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    description: "Building responsive, accessible, high-performance user interfaces with modern reactive state management and typing.",
    icon: "Layout",
    skills: [
      { name: "React.js", role: "Primary UI Library", tag: "Daily Driver", focus: "Hooks, Context, Component Life Cycle, Virtual DOM" },
      { name: "Next.js 14", role: "SSR & Full-Stack", tag: "Advanced", focus: "App Router, Server Components, API Handlers, Edge Cache" },
      { name: "TypeScript", role: "Type Safety", tag: "Strict", focus: "Generics, Interface Contracts, Utility Types, Strict Compilation" },
      { name: "Tailwind CSS", role: "Styling & Design System", tag: "Expert", focus: "Design Tokens, Dark Mode, Responsive Grids, Flexbox" },
      { name: "JavaScript (ES6+)", role: "Core Language", tag: "Mastery", focus: "Async/Await, Promises, Closures, Event Loop, Modular Code" },
      { name: "Vite", role: "Tooling & Bundler", tag: "Daily Driver", focus: "Fast HMR, Build Optimization, Asset Pipeline" },
    ]
  },
  {
    id: "backend",
    title: "Backend & Real-Time APIs",
    description: "Designing RESTful services, secure JWT authentication gateways, and low-latency WebSocket communication pipelines.",
    icon: "Server",
    skills: [
      { name: "Node.js", role: "Runtime Environment", tag: "Daily Driver", focus: "Event-driven I/O, Asynchronous Architecture, Streams" },
      { name: "Express.js", role: "Backend Framework", tag: "Production", focus: "RESTful Endpoints, Middleware, Error Handling, Routing" },
      { name: "Socket.IO", role: "WebSockets & Events", tag: "Production", focus: "Bi-directional Real-Time Communication, Rooms, Heartbeats" },
      { name: "JWT & RBAC", role: "Security & Auth", tag: "Standard", focus: "httpOnly Cookies, Bearer Tokens, Role-Based Access Control" },
      { name: "REST API Design", role: "Architecture", tag: "Core Practice", focus: "Status Codes, Pagination, Payload Validation, Idempotency" },
      { name: "Postman", role: "API Development", tag: "Expert", focus: "API Collections, Automated Mock Testing, Environment Variables" },
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Structuring persistent relational and document-based database models with compound indexing and query optimization.",
    icon: "Database",
    skills: [
      { name: "MongoDB", role: "NoSQL Database", tag: "Production", focus: "Mongoose ODM, Document Schemas, Aggregation Pipelines" },
      { name: "Prisma ORM", role: "Type-Safe ORM", tag: "Advanced", focus: "Database Schema Migrations, Type Inference, Relational Joins" },
      { name: "MySQL", role: "Relational Database", tag: "Academic/Core", focus: "Schema Normalization, ACID Transactions, Foreign Keys" },
      { name: "SQL", role: "Query Language", tag: "Proficient", focus: "Complex Joins, Group By, Subqueries, Indexing Optimization" },
    ]
  },
  {
    id: "qa-automation",
    title: "Quality Engineering & Test Automation",
    description: "Implementing BDD automation frameworks, API validation test suites, and structured defect lifecycle management.",
    icon: "ShieldCheck",
    skills: [
      { name: "Test Automation", role: "Core Differentiator", tag: "Frameworks", focus: "Python Test Harnesses, Reusable Validation Pipelines" },
      { name: "BDD Testing", role: "Gherkin Standards", tag: "BDD Style", focus: "Given-When-Then Scenarios, Cucumber/Behave Specifications" },
      { name: "API Validation", role: "Payload Verification", tag: "Systematic", focus: "Boundary Analysis, Header Verification, Status Validation" },
      { name: "STLC & SDLC", role: "Methodology", tag: "Standard", focus: "Smoke, Sanity, Regression, Functional Testing & Bug Reports" },
      { name: "Python", role: "Automation & Scripting", tag: "Daily Driver", focus: "AST Parsing, PyTest, NumPy, Automation Workflows" },
    ]
  },
  {
    id: "devops-systems",
    title: "DevOps & Cloud Systems",
    description: "Containerizing software stacks, setting up CI/CD build pipelines, and collaborating with iterative Agile Git workflows.",
    icon: "Cpu",
    skills: [
      { name: "Docker", role: "Containerization", tag: "Practitioner", focus: "Dockerfiles, Multi-Stage Builds, Image Optimization" },
      { name: "Docker Compose", role: "Multi-Service Orchestration", tag: "Practitioner", focus: "Local Development Clusters, Environment Isolation" },
      { name: "Jenkins CI/CD", role: "Build Automation", tag: "Fundamentals", focus: "Automated Build Workflows, Pipeline Triggers, Test Runs" },
      { name: "Git & GitHub", role: "Version Control", tag: "Daily Driver", focus: "Branching Strategies, Pull Requests, Code Reviews, Releases" },
      { name: "Linux / Ubuntu", role: "Operating System", tag: "Comfortable", focus: "Bash Scripting, File Permissions, Server Environment" },
      { name: "Vercel", role: "Cloud Deployment", tag: "Production", focus: "Edge Functions, Continuous Git Deployments, Preview URLs" },
    ]
  }
];

export const projectsData = [
  {
    id: "ajaia-docs",
    title: "Ajaia AI-Native Collaborative Docs",
    subtitle: "Next.js 14, TypeScript, Prisma ORM & TipTap",
    category: "fullstack",
    categoryLabel: "Full-Stack Next.js & AI",
    badge: "Featured Production App",
    liveUrl: "https://ajaia-ai-native-docs.vercel.app",
    githubUrl: "https://github.com/yellaling2204/ajaia-ai-native-docs",
    interactiveDemoId: "docs",
    techStack: ["Next.js 14", "TypeScript", "Prisma ORM", "TipTap", "Tailwind CSS", "Vercel"],
    description:
      "An AI-native collaborative document editor engineered with Next.js, TypeScript, Prisma, and TipTap. Supports rich-text editing, live file imports, document persistence, and seamless public sharing workflows.",
    keyPoints: [
      "Built dynamic rich-text editing engine powered by TipTap with custom extensions and formatting controls.",
      "Engineered type-safe database persistence with Prisma ORM and relational models.",
      "Implemented document sharing, access controls, and instant PDF/Markdown export.",
      "Deployed on Vercel with serverless functions and optimized client-side hydration."
    ],
    architecture: "Next.js App Router → TipTap Editor State → Prisma ORM Client → PostgreSQL / Database Engine → Vercel Edge Cache",
    stats: {
      metric1: "Live Vercel",
      metric1Label: "Deployed App",
      metric2: "100%",
      metric2Label: "TypeScript Strict",
      metric3: "AI-Native",
      metric3Label: "TipTap Engine"
    }
  },
  {
    id: "secure-messaging",
    title: "Real-Time E2EE Chat Platform",
    subtitle: "MERN Stack, Socket.IO & JWT Protected Channels",
    category: "fullstack",
    categoryLabel: "Full-Stack MERN & WebSockets",
    badge: "Real-Time System",
    liveUrl: "#chat-demo",
    githubUrl: "https://github.com/yellaling2204/chat_application",
    secondaryGithubUrl: "https://github.com/yellaling2204/E2EE-Chat-Application-project",
    interactiveDemoId: "chat",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"],
    description:
      "A scalable real-time messaging architecture engineered with the MERN stack and Socket.IO. Features instant bi-directional messaging, end-to-end token encryption, user profile management, and persistent MongoDB collections.",
    keyPoints: [
      "Engineered WebSocket event-driven communication layer achieving sub-50ms message delivery.",
      "Implemented JWT authentication with secure httpOnly cookies, password hashing, and route protection.",
      "Designed compound-indexed MongoDB schemas to optimize chat history retrieval and pagination.",
      "Performed API testing with Postman and handled connection drops with automated socket reconnection logic."
    ],
    architecture: "React Client ⇄ Socket.IO Gateway ⇄ Express Auth & Channel Middleware ⇄ MongoDB Indexed Cluster",
    stats: {
      metric1: "< 50ms",
      metric1Label: "Real-Time Latency",
      metric2: "JWT + RBAC",
      metric2Label: "Protected Auth",
      metric3: "Zero Drop",
      metric3Label: "Socket Resiliency"
    }
  },
  {
    id: "talentflow",
    title: "TalentFlow — Mini Hiring Platform",
    subtitle: "React, TypeScript, Vite & Interactive Kanban Pipeline",
    category: "fullstack",
    categoryLabel: "Product & Frontend Architecture",
    badge: "ATS Candidate Pipeline",
    liveUrl: "https://talent-flow-assignment-rust.vercel.app",
    githubUrl: "https://github.com/yellaling2204/talent-flow-assignment",
    secondaryGithubUrl: "https://github.com/yellaling2204/Mini-hiring-platform",
    interactiveDemoId: "kanban",
    techStack: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Kanban UI", "State Machine"],
    description:
      "An intuitive Applicant Tracking System featuring dynamic candidate pipelines, job posting lifecycle management, and optimistic UI updates with automatic rollback handling under network failure.",
    keyPoints: [
      "Constructed interactive drag-and-drop Kanban candidate progression pipeline with reactive state management.",
      "Implemented optimistic state synchronization with rollback handling on simulated network faults.",
      "Enforced 100% strict TypeScript types across candidates, jobs, and assessment models.",
      "Designed clean responsive UX with Tailwind CSS and Vite fast-refresh bundling."
    ],
    architecture: "Vite + TypeScript App → Optimistic State Machine → Kanban Pipeline Controller → Mock REST API with Fault Injection",
    stats: {
      metric1: "Live Vercel",
      metric1Label: "Production App",
      metric2: "100%",
      metric2Label: "Strict Types",
      metric3: "Zero-Jank",
      metric3Label: "Optimistic State"
    }
  },
  {
    id: "find-my-room",
    title: "Find My Room — Accommodation Platform",
    subtitle: "TypeScript, Responsive Discovery & Listing Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    badge: "Listing & Booking Portal",
    liveUrl: "https://find-my-room-nu.vercel.app",
    githubUrl: "https://github.com/yellaling2204/Find-My-Room",
    interactiveDemoId: "rooms",
    techStack: ["TypeScript", "React.js", "Tailwind CSS", "REST APIs", "Vercel"],
    description:
      "A responsive room finder and accommodation portal designed for students and professionals. Features dynamic location-based search, multi-criteria filtering, room amenity showcases, and booking inquiry workflows.",
    keyPoints: [
      "Developed multi-criteria filtering engine for room types, budget boundaries, and amenity tags.",
      "Engineered mobile-first responsive interfaces with fluid dark/light styling using Tailwind CSS.",
      "Integrated TypeScript domain models to validate booking inquiry forms and contact workflows.",
      "Deployed production-ready build to Vercel with instant edge routing."
    ],
    architecture: "TypeScript React Client → Listing Discovery Controller → Amenity Filter Pipeline → Vercel Edge Server",
    stats: {
      metric1: "Live Vercel",
      metric1Label: "Deployed App",
      metric2: "TypeScript",
      metric2Label: "Clean Code",
      metric3: "Mobile-First",
      metric3Label: "Responsive Grid"
    }
  },
  {
    id: "financial-dash",
    title: "Financial Analytics & Market Predictor",
    subtitle: "Python, Streamlit, Financial APIs & ML Time-Series",
    category: "qa-ai",
    categoryLabel: "Financial Systems & ML",
    badge: "Predictive Analytics",
    liveUrl: "#finance-demo",
    githubUrl: "https://github.com/yellaling2204/financial-dash",
    interactiveDemoId: "finance",
    techStack: ["Python", "Streamlit", "Yahoo Finance API", "Pandas", "Plotly", "NumPy"],
    description:
      "An interactive financial market intelligence dashboard that ingests real-time market data, calculates quantitative technical indicators (RSI, SMA, Bollinger Bands), and projects future asset price trends using statistical time-series forecasting.",
    keyPoints: [
      "Engineered dynamic ticker pipeline retrieving live equity quotes and historical OHLC data.",
      "Implemented real-time calculations for Moving Averages (SMA-20, SMA-50) and Relative Strength Index (RSI).",
      "Constructed predictive confidence intervals for future stock movement simulation.",
      "Designed responsive data visualizations with interactive hover telemetry and candlestick views."
    ],
    architecture: "Financial REST API → Pandas Data Sanitizer → Quantitative Feature Pipeline → Plotly Visualizer → Interactive Web UI",
    stats: {
      metric1: "Live Telemetry",
      metric1Label: "Market Data",
      metric2: "ML Engine",
      metric2Label: "Time-Series",
      metric3: "Multi-Asset",
      metric3Label: "Equities & Crypto"
    }
  },
  {
    id: "doctors-patient-record-book",
    title: "Doctor & Patient Clinical Record Portal",
    subtitle: "Next.js 14, TypeScript, MongoDB, JWT & Medical EHR",
    category: "fullstack",
    categoryLabel: "Healthcare Full-Stack Web",
    badge: "Clinical Healthcare Portal",
    liveUrl: "#ehr-demo",
    githubUrl: "https://github.com/yellaling2204/Frontend-Developer-Intern",
    secondaryGithubUrl: "https://github.com/yellaling2204/flask-mysql-app",
    interactiveDemoId: "ehr",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "JWT Auth", "REST APIs"],
    description:
      "A full-stack healthcare web application for medical professionals to manage electronic patient health records (EHR), track clinical diagnostics, log vital signs, and schedule patient appointments with granular access security.",
    keyPoints: [
      "Developed secure patient health records directory with search by Patient ID, name, and medical condition.",
      "Built vital signs recording module with automated health thresholds for blood pressure and heart rate.",
      "Constructed appointment scheduling interface with doctor availability calendars.",
      "Implemented role-based data shielding protecting confidential patient diagnoses."
    ],
    architecture: "Next.js Client → Healthcare API Gateway → Mongoose Medical Models → Encrypted Patient Database",
    stats: {
      metric1: "EHR Medical",
      metric1Label: "Clinical Standard",
      metric2: "Strict RBAC",
      metric2Label: "HIPAA-Style Privacy",
      metric3: "Next.js 14",
      metric3Label: "App Router"
    }
  },
  {
    id: "llm-test-automation",
    title: "LLM-Assisted Test Automation Framework",
    subtitle: "AI-Powered NLP to Executable BDD Test Cases",
    category: "qa-ai",
    categoryLabel: "QA Automation & AI",
    badge: "Core Resume Project",
    liveUrl: "#test-lab",
    githubUrl: "https://github.com/yellaling2204/LLM-Assisted-BDD-Functional-Testing",
    interactiveDemoId: "bdd",
    techStack: ["Python", "LLMs", "BDD Testing", "AST Parser", "PyTest", "JSON Schema"],
    description:
      "A next-generation Python automation framework that ingests natural-language feature requirements and automatically synthesizes executable functional test suites, reusable validation pipelines, and assertion workflows.",
    keyPoints: [
      "Translates unstructured user requirements into structured BDD-style Gherkin and executable Python test cases.",
      "Reduces manual test-case creation turnaround time by over 60% while maintaining deterministic assertion standards.",
      "Integrates structured schema validation, error boundary assertions, and reusable fixture workflows.",
      "Includes regression suites and execution reporting with deep defect traceability."
    ],
    architecture: "Natural Language Spec → AST Semantic Analyzer → Test Engine Synthesizer → Automated PyTest Execution → Traceability Matrix",
    stats: {
      metric1: "60% Faster",
      metric1Label: "Test Authoring",
      metric2: "100%",
      metric2Label: "Executable Code",
      metric3: "BDD-Style",
      metric3Label: "Validation Standards"
    }
  },
  {
    id: "cv-mouse",
    title: "Computer Vision Human Interaction System",
    subtitle: "Real-Time Gesture-Controlled Virtual Mouse",
    category: "qa-ai",
    categoryLabel: "Computer Vision & AI",
    badge: "Gesture System",
    liveUrl: "#mouse-demo",
    githubUrl: "https://github.com/yellaling2204/virtual_mouse",
    interactiveDemoId: "mouse",
    techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
    description:
      "A contactless human-computer interaction system utilizing computer vision hand-tracking to translate natural finger gestures into smooth, jitter-free cursor movements and click events.",
    keyPoints: [
      "Implemented 21-landmark hand detection using MediaPipe and OpenCV video stream feeds.",
      "Engineered exponential moving average filters to eradicate cursor tremors and ensure sub-pixel accuracy.",
      "Conducted extensive testing across lighting variations, hand angles, and distance gradients.",
      "Optimized event-handling loop to sustain real-time 30+ FPS processing with low CPU overhead."
    ],
    architecture: "Webcam Video Stream → MediaPipe 21 Landmark Extractor → Vector Geometry Classifier → Anti-Jitter Filter → PyAutoGUI Dispatcher",
    stats: {
      metric1: "30+ FPS",
      metric1Label: "Real-time Tracking",
      metric2: "21 Points",
      metric2Label: "Hand Landmarks",
      metric3: "Anti-Jitter",
      metric3Label: "Smoothing Filter"
    }
  }
];

export const experienceData = [
  {
    role: "Web Development Intern",
    company: "SystemTron",
    type: "Internship",
    duration: "Dec 2024 – Jan 2025",
    location: "Remote / Hybrid",
    highlights: [
      "Developed production-style MERN features across frontend and backend layers, translating functional requirements into maintainable software.",
      "Built React components and Node.js/Express REST endpoints with authentication, validation, API integration, debugging, testing, and defect resolution.",
      "Performed API validation and functional checks for application workflows; investigated issues and verified fixes before feature delivery.",
      "Used Git and code-review practices while collaborating with a small development team on integration and delivery."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "Postman", "Code Review"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Indian Institute of Information Technology (IIIT) Dharwad",
    duration: "2022 – 2026",
    status: "Graduating May 2026",
    location: "Dharwad, Karnataka, India",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ],
    highlights: [
      "Strong foundation in core computer science, algorithmic complexity, and scalable systems.",
      "Focus on software reliability, modern engineering workflows, and full-stack development."
    ]
  }
];

// Interactive Test Automation Lab Scenarios
export const testScenarios = [
  {
    id: "scenario-auth",
    name: "User Authentication & JWT Session Boundary",
    nlPrompt: "Given an existing user submits valid credentials, verify JWT token issue, cookie flags, and protected route access",
    feature: "Authentication & Authorization Security",
    cases: [
      { id: "TC-AUTH-01", name: "Payload Validation & Rate Limiter", assert: "Assert req.body has valid email format && rateLimit < 5 req/s", time: "16ms" },
      { id: "TC-AUTH-02", name: "JWT Token Generation & Expiration", assert: "Assert token.exp - token.iat === 86400s && signature is valid", time: "24ms" },
      { id: "TC-AUTH-03", name: "httpOnly & SameSite Cookie Headers", assert: "Assert res.cookie.httpOnly === true && res.cookie.sameSite === 'Strict'", time: "19ms" },
      { id: "TC-AUTH-04", name: "RBAC Middleware Protected Route", assert: "Assert GET /api/v1/user/profile returns 200 OK with sanitized user", time: "31ms" }
    ]
  },
  {
    id: "scenario-chat",
    name: "Real-Time WebSocket Message Propagation",
    nlPrompt: "Given two connected clients on channel #general, verify real-time message broadcast under 50ms with zero message drop",
    feature: "Real-Time Messaging & Socket.IO Reliability",
    cases: [
      { id: "TC-CHAT-01", name: "WebSocket Handshake & Auth Token", assert: "Assert socket.handshake.auth.token valid && connection established", time: "12ms" },
      { id: "TC-CHAT-02", name: "Message Latency Benchmark", assert: "Assert (t_receive - t_sent) < 50ms across bidirectional pipe", time: "28ms" },
      { id: "TC-CHAT-03", name: "MongoDB Message Persistence", assert: "Assert message written to MongoDB cluster with compound index timestamp", time: "42ms" },
      { id: "TC-CHAT-04", name: "Client Reconnect & State Recovery", assert: "Assert socket.recovered === true on simulated connection drop", time: "35ms" }
    ]
  },
  {
    id: "scenario-portfolio",
    name: "Portfolio Architecture & Contract Verification",
    nlPrompt: "Verify DOM tree hydration, mobile/desktop viewport responsiveness, and API integrity across the portfolio",
    feature: "Portfolio Full-Stack & UI Resilience",
    cases: [
      { id: "TC-PORT-01", name: "DOM Tree & Asset Hydration", assert: "Assert document.readyState === 'complete' && 0 console error warnings", time: "14ms" },
      { id: "TC-PORT-02", name: "Responsive Viewport Contract", assert: "Assert zero horizontal overflow between 320px and 2560px viewports", time: "22ms" },
      { id: "TC-PORT-03", name: "Project Data Schema & Vercel Links", assert: "Assert all 6 projects have valid titles, techStack array, and live URLs", time: "18ms" },
      { id: "TC-PORT-04", name: "Contact Input Sanitization", assert: "Assert form inputs sanitize <script> payloads and neutralize injection", time: "27ms" }
    ]
  }
];

export const deliveryDevOpsData = [
  {
    title: "Full-Stack Web Architecture",
    description: "Production-grade MERN & Next.js systems with responsive UI, server-side data flows, and secure APIs.",
    icon: "Layers"
  },
  {
    title: "Containerization & Orchestration",
    description: "Docker & Docker Compose for isolated microservices and reproducible local/staging runtimes.",
    icon: "Boxes"
  },
  {
    title: "Continuous Integration & Delivery",
    description: "Jenkins CI/CD automation pipelines for automated test execution, image building, and deployment checks.",
    icon: "GitBranch"
  },
  {
    title: "Quality Engineering & STLC",
    description: "End-to-end testing lifecycle coverage: Test Scenarios, Smoke, Sanity, Functional, Regression, and Postman API automation.",
    icon: "ShieldCheck"
  }
];

export const skillsData = {
  pillars: technicalPillars
};

