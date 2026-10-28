/* ==========================================================================
   LearnHub - Course Data & Interactive Logic
   Includes comprehensive course details, syllabus modules, topics,
   search, filtering, cart management, and deep-link modal dialogs.
   ========================================================================== */

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    teacher: "John Doe",
    teacherRole: "Senior Full-Stack Architect & Tech Lead",
    teacherBio: "John has over 12 years of experience building large-scale web systems for Fortune 500 companies. He has mentored more than 30,000 developers worldwide.",
    category: "Web Development",
    price: 49,
    originalPrice: 129,
    rating: 4.8,
    reviewsCount: 2450,
    studentsCount: 8900,
    lessons: 64,
    hours: 28,
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "October 2026",
    color: "#0f766e",
    glyph: "</>",
    img: "images/course-fullstack.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Full Stack"],
    tagline: "Master full-stack web development from scratch with HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    description: "This comprehensive bootcamp takes you from absolute beginner to building and deploying production-ready full-stack web applications. You will learn modern frontend engineering with React, server-side development with Node.js and Express, and database management with MongoDB.",
    whatYouLearn: [
      "Build responsive, accessible websites with modern semantic HTML5 and CSS3 Grid/Flexbox",
      "Write clean, asynchronous JavaScript (ES6+, Promises, async/await, Fetch API)",
      "Create interactive single-page applications using React, Hooks, and Component State",
      "Design robust RESTful APIs with Node.js, Express, and middleware",
      "Model data and build database schemas with MongoDB and Mongoose",
      "Implement JWT authentication, route protection, and security best practices",
      "Deploy full-stack applications to cloud platforms with continuous deployment"
    ],
    requirements: [
      "A computer (Windows, Mac, or Linux) with an internet connection",
      "No prior coding or web development experience required",
      "Free code editor installed (VS Code recommended)"
    ],
    targetAudience: "Aspiring web developers, computer science students, and programmers who want to master both frontend and backend development.",
    modules: [
      {
        title: "Module 1: Modern HTML5 & Responsive CSS3 Architecture",
        duration: "4h 15m",
        lessonsCount: 4,
        topics: [
          { title: "Semantic HTML5, Document Trees & Accessibility (a11y)", duration: "35 min", isFree: true },
          { title: "Modern CSS: Deep Dive into Flexbox & CSS Grid Mastery", duration: "50 min", isFree: false },
          { title: "Responsive Layouts, Mobile-First Design & Media Queries", duration: "40 min", isFree: false },
          { title: "Hands-on Project: Responsive Portfolio Page with CSS Variables", duration: "70 min", isFree: false }
        ]
      },
      {
        title: "Module 2: Modern JavaScript (ES6+) Deep Dive",
        duration: "6h 30m",
        lessonsCount: 4,
        topics: [
          { title: "Variables, Scope, Closures & Modern ES6+ Syntax", duration: "45 min", isFree: true },
          { title: "DOM Manipulation, Event Delegation & Dynamic UI", duration: "55 min", isFree: false },
          { title: "Asynchronous JavaScript: Promises, Async/Await & Fetching APIs", duration: "60 min", isFree: false },
          { title: "Hands-on Project: Interactive Task Management Dashboard", duration: "90 min", isFree: false }
        ]
      },
      {
        title: "Module 3: Frontend Mastery with React & Hooks",
        duration: "7h 20m",
        lessonsCount: 4,
        topics: [
          { title: "React Fundamentals: JSX, Virtual DOM & Component Hierarchy", duration: "50 min", isFree: true },
          { title: "State Management with useState, useEffect & Custom Hooks", duration: "65 min", isFree: false },
          { title: "Handling Complex Forms, Client Validation & React Router v6", duration: "75 min", isFree: false },
          { title: "Hands-on Project: Complete E-Commerce Storefront with Cart State", duration: "110 min", isFree: false }
        ]
      },
      {
        title: "Module 4: Backend Engineering with Node.js & Express",
        duration: "5h 45m",
        lessonsCount: 4,
        topics: [
          { title: "Node.js Runtime Architecture, Event Loop & NPM Ecosystem", duration: "40 min", isFree: false },
          { title: "Building RESTful APIs with Express, Routers & Middleware", duration: "65 min", isFree: false },
          { title: "User Authentication: JSON Web Tokens (JWT) & Password Hashing", duration: "70 min", isFree: false },
          { title: "Error Handling, Request Validation & Security Middleware (Helmet/CORS)", duration: "50 min", isFree: false }
        ]
      },
      {
        title: "Module 5: Database Architecture & Cloud Deployment",
        duration: "4h 10m",
        lessonsCount: 4,
        topics: [
          { title: "MongoDB Atlas Setup & Data Modeling with Mongoose", duration: "55 min", isFree: false },
          { title: "Advanced CRUD Operations, Aggregations & Database Indexing", duration: "50 min", isFree: false },
          { title: "Connecting React Frontend to Express Backend Seamlessly", duration: "60 min", isFree: false },
          { title: "Production Build, Environment Variables & Cloud Deployment (Vercel/Render)", duration: "85 min", isFree: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "JavaScript from Basics to Projects",
    teacher: "Priya Nair",
    teacherRole: "Staff Frontend Engineer & Technical Author",
    teacherBio: "Priya is a Staff Engineer who loves demystifying core JavaScript concepts. She specializes in web standards, browser rendering engines, and clean JavaScript architecture.",
    category: "Web Development",
    price: 29,
    originalPrice: 89,
    rating: 4.7,
    reviewsCount: 1820,
    studentsCount: 6400,
    lessons: 42,
    hours: 18,
    level: "Beginner to Intermediate",
    language: "English",
    lastUpdated: "September 2026",
    color: "#b45309",
    glyph: "JS",
    img: "images/course-javascript.jpg",
    tags: ["JavaScript", "ES6+", "DOM", "Async/Await", "APIs", "Web Projects", "OOP"],
    tagline: "Master core JavaScript, modern ES6+ features, and build real projects without frameworks.",
    description: "Deeply understand how JavaScript works under the hood. From execution contexts and closures to building real-world browser applications, this course gives you rock-solid JavaScript mastery.",
    whatYouLearn: [
      "Understand JavaScript execution context, call stack, and event loop",
      "Manipulate the DOM efficiently with modern methods and event delegation",
      "Master asynchronous programming: Callbacks, Promises, and Async/Await",
      "Consume REST APIs and handle HTTP errors gracefully",
      "Write modular, reusable object-oriented and functional JavaScript code",
      "Debug browser applications using Chrome DevTools with confidence"
    ],
    requirements: [
      "Basic understanding of HTML and CSS is helpful but not strictly required",
      "A modern web browser and a text editor"
    ],
    targetAudience: "Beginners taking their first steps in programming, or developers who know syntax but struggle to build projects from scratch.",
    modules: [
      {
        title: "Module 1: JavaScript Fundamentals & Syntax Essentials",
        duration: "3h 15m",
        lessonsCount: 4,
        topics: [
          { title: "Variables (let, const), Primitive Types & Type Coercion", duration: "30 min", isFree: true },
          { title: "Operators, Conditionals, Truthy/Falsy & Switch Statements", duration: "35 min", isFree: false },
          { title: "Functions: Declarations, Expressions, Arrows & Scope", duration: "45 min", isFree: false },
          { title: "Arrays & Objects: Destructuring, Spread/Rest & Modern Methods", duration: "50 min", isFree: false }
        ]
      },
      {
        title: "Module 2: DOM Manipulation & Browser Events",
        duration: "4h 10m",
        lessonsCount: 4,
        topics: [
          { title: "Selecting & Modifying DOM Elements Dynamically", duration: "40 min", isFree: true },
          { title: "Event Listeners, Event Bubbling & Delegation Patterns", duration: "45 min", isFree: false },
          { title: "Local Storage & Session Storage for Persistent UI State", duration: "40 min", isFree: false },
          { title: "Project: Interactive Personal Budget & Expense Tracker", duration: "75 min", isFree: false }
        ]
      },
      {
        title: "Module 3: Asynchronous JavaScript & REST APIs",
        duration: "5h 30m",
        lessonsCount: 4,
        topics: [
          { title: "Synchronous vs Asynchronous: The Event Loop & Task Queue", duration: "40 min", isFree: false },
          { title: "Promises & Error Handling with .catch() and finally()", duration: "45 min", isFree: false },
          { title: "Async/Await Syntax & Fetching Remote JSON APIs", duration: "55 min", isFree: false },
          { title: "Project: Real-time Weather Forecast & City Search App", duration: "80 min", isFree: false }
        ]
      },
      {
        title: "Module 4: OOP, Prototypes & Clean Project Architecture",
        duration: "5h 05m",
        lessonsCount: 4,
        topics: [
          { title: "Prototypes, Prototypal Inheritance & ES6 Classes", duration: "50 min", isFree: false },
          { title: "ES Modules (import/export) & Project File Structure", duration: "40 min", isFree: false },
          { title: "Error Handling with try...catch & Defensive Programming", duration: "40 min", isFree: false },
          { title: "Capstone Project: Modular Browser Game with Canvas API", duration: "95 min", isFree: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "React for Real Apps",
    teacher: "Chris Allen",
    teacherRole: "Principal UI Architect & Design Technologist",
    teacherBio: "Chris has led frontend architecture for high-traffic SaaS applications. He is passionate about component ergonomics, performance optimization, and pragmatic state design.",
    category: "Web Development",
    price: 39,
    originalPrice: 110,
    rating: 4.9,
    reviewsCount: 3150,
    studentsCount: 11200,
    lessons: 38,
    hours: 16,
    level: "Intermediate",
    language: "English",
    lastUpdated: "October 2026",
    color: "#1d4ed8",
    glyph: "{ }",
    img: "images/course-react.jpg",
    tags: ["React 18", "Hooks", "Context API", "Zustand", "React Router", "TanStack Query", "Testing"],
    tagline: "Build scalable, high-performance React applications with production patterns.",
    description: "Go beyond simplistic 'todo' tutorials. Learn how professional product teams architect React applications, manage complex state, handle client routing, optimize rendering performance, and test components.",
    whatYouLearn: [
      "Master React 18 concurrent features, batching, and component lifecycles",
      "Write clean custom hooks to encapsulate reusable business logic",
      "Manage application state with lightweight stores (Zustand) and Context API",
      "Implement client routing with React Router v6 loaders, actions, and layouts",
      "Optimize renders using useMemo, useCallback, and React Profiler",
      "Test components using Vitest and React Testing Library"
    ],
    requirements: [
      "Comfortable with modern JavaScript (ES6+, arrow functions, destructuring, promises)",
      "Basic HTML and CSS knowledge"
    ],
    targetAudience: "Web developers with JavaScript knowledge who want to build production-ready modern web applications with React.",
    modules: [
      {
        title: "Module 1: Component Architecture & Modern JSX",
        duration: "2h 45m",
        lessonsCount: 4,
        topics: [
          { title: "Component Decomposition & Pure Component Thinking", duration: "35 min", isFree: true },
          { title: "Props Patterns: Children, Render Props & Compound Components", duration: "40 min", isFree: false },
          { title: "Conditional Rendering & Dynamic Styling with CSS Modules / Tailwind", duration: "35 min", isFree: false },
          { title: "Project: Configurable UI Component Design System", duration: "55 min", isFree: false }
        ]
      },
      {
        title: "Module 2: Advanced Hooks & Performance Optimization",
        duration: "4h 20m",
        lessonsCount: 4,
        topics: [
          { title: "Deep Dive: useEffect Lifecycle Rules & Cleanup Gotchas", duration: "50 min", isFree: true },
          { title: "useMemo, useCallback & Eliminating Wasted Rerenders", duration: "55 min", isFree: false },
          { title: "useRef & Imperative DOM Integrations (Modals, Portals)", duration: "45 min", isFree: false },
          { title: "Crafting Battle-Tested Custom Hooks (useDebounce, useLocalStorage)", duration: "60 min", isFree: false }
        ]
      },
      {
        title: "Module 3: Application State & Client Routing",
        duration: "5h 15m",
        lessonsCount: 4,
        topics: [
          { title: "When to use Local State vs Context vs External Store", duration: "45 min", isFree: false },
          { title: "Lightweight State Management with Zustand", duration: "55 min", isFree: false },
          { title: "React Router v6: Nested Routes, Dynamic Params & Error Boundaries", duration: "65 min", isFree: false },
          { title: "Remote Server State Caching with TanStack Query", duration: "60 min", isFree: false }
        ]
      },
      {
        title: "Module 4: Forms, Testing & Production Deployment",
        duration: "3h 40m",
        lessonsCount: 4,
        topics: [
          { title: "High-Performance Forms with React Hook Form & Zod Validation", duration: "50 min", isFree: false },
          { title: "Automated Component Testing with React Testing Library & Vitest", duration: "50 min", isFree: false },
          { title: "Code Splitting, Lazy Loading & Performance Auditing", duration: "40 min", isFree: false },
          { title: "Capstone Project: Collaborative Team Workspace Web App", duration: "80 min", isFree: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "UI/UX Design Essentials",
    teacher: "Jane Smith",
    teacherRole: "Product Design Director & Design Systems Lead",
    teacherBio: "Jane has led product design teams at top consumer technology firms. She believes great design is where empathy, aesthetics, and measurable business outcomes intersect.",
    category: "Design",
    price: 39,
    originalPrice: 99,
    rating: 4.8,
    reviewsCount: 1490,
    studentsCount: 5100,
    lessons: 30,
    hours: 12,
    level: "All Levels",
    language: "English",
    lastUpdated: "October 2026",
    color: "#be185d",
    glyph: "Aa",
    img: "images/course-uiux.jpg",
    tags: ["UI Design", "UX Research", "Wireframing", "Typography", "Color Theory", "Prototyping", "Design Systems"],
    tagline: "Design intuitive, delightful digital interfaces that solve user problems.",
    description: "Learn the end-to-end product design lifecycle: user empathy research, wireframing, design systems, visual hierarchy, micro-interactions, and usability testing.",
    whatYouLearn: [
      "Conduct user research, synthesize interviews, and build realistic personas",
      "Construct clear user journeys, site maps, and information architectures",
      "Master visual design principles: contrast, spacing, grid systems, and typography",
      "Create accessible color palettes that meet WCAG 2.1 AA standards",
      "Prototype interactive mobile and desktop web flows",
      "Prepare clean developer handoffs and design system documentation"
    ],
    requirements: [
      "No prior design experience required",
      "A computer capable of running modern browser-based design software"
    ],
    targetAudience: "Aspiring UI/UX designers, developers wanting design skills, and product managers who want to turn ideas into clean mockups.",
    modules: [
      {
        title: "Module 1: User Research & Empathy Foundations",
        duration: "2h 30m",
        lessonsCount: 4,
        topics: [
          { title: "The Design Thinking Framework & Problem Framing", duration: "30 min", isFree: true },
          { title: "Conducting User Interviews & Developing User Personas", duration: "40 min", isFree: false },
          { title: "Customer Journey Mapping & Pain Point Identification", duration: "40 min", isFree: false },
          { title: "Information Architecture, Card Sorting & Sitemaps", duration: "40 min", isFree: false }
        ]
      },
      {
        title: "Module 2: Visual Design Systems & Hierarchy",
        duration: "3h 15m",
        lessonsCount: 4,
        topics: [
          { title: "Typography Fundamentals: Scale, Pairings & Hierarchy", duration: "45 min", isFree: true },
          { title: "Color Theory, Contrast Ratios & WCAG Accessibility", duration: "45 min", isFree: false },
          { title: "8pt Spacing Grid, Layout Rhythm & Visual Balance", duration: "45 min", isFree: false },
          { title: "Project: Modern SaaS Landing Page Visual Concept", duration: "60 min", isFree: false }
        ]
      },
      {
        title: "Module 3: Low & High Fidelity Prototyping",
        duration: "3h 20m",
        lessonsCount: 4,
        topics: [
          { title: "Rapid Sketching & Low-Fidelity Wireframes", duration: "40 min", isFree: false },
          { title: "Transforming Wireframes into High-Fidelity UI Screens", duration: "50 min", isFree: false },
          { title: "Micro-interactions, Transitions & State Indicators", duration: "45 min", isFree: false },
          { title: "Project: Complete Mobile Banking App Prototype", duration: "65 min", isFree: false }
        ]
      },
      {
        title: "Module 4: Usability Testing & Developer Handoff",
        duration: "2h 55m",
        lessonsCount: 4,
        topics: [
          { title: "Planning & Moderating Usability Test Sessions", duration: "40 min", isFree: false },
          { title: "Synthesizing User Feedback into Actionable Revisions", duration: "35 min", isFree: false },
          { title: "Design Tokens, Asset Export & Developer Handoff Specs", duration: "45 min", isFree: false },
          { title: "Capstone: Assembling an Eye-Catching Portfolio Case Study", duration: "55 min", isFree: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Figma for Beginners",
    teacher: "Sara Khan",
    teacherRole: "Senior UI/UX Specialist & Figma Community Creator",
    teacherBio: "Sara is a Figma educator who has helped thousands of creators transition to modern vector tooling. Her UI kits have been downloaded over 100,000 times in the Figma Community.",
    category: "Design",
    price: 19,
    originalPrice: 59,
    rating: 4.6,
    reviewsCount: 980,
    studentsCount: 4300,
    lessons: 20,
    hours: 7,
    level: "Beginner",
    language: "English",
    lastUpdated: "September 2026",
    color: "#7c3aed",
    glyph: "Fg",
    img: "images/course-figma.jpg",
    tags: ["Figma", "Auto Layout", "Components", "Variants", "Prototyping", "Design Tokens", "Smart Animate"],
    tagline: "From beginner to confident Figma designer in 7 hours of step-by-step guidance.",
    description: "Learn the industry standard tool for digital design. Master frames, vectors, Auto Layout 5.0, component variants, smart animations, and interactive client prototypes.",
    whatYouLearn: [
      "Navigate Figma's interface, frames, vector shapes, and shortcuts",
      "Build fully responsive UI components using Auto Layout",
      "Create reusable component libraries with properties, variants, and booleans",
      "Build realistic clickable prototypes using Smart Animate",
      "Organize Figma files and team libraries efficiently",
      "Collaborate in real time with clients and developers"
    ],
    requirements: [
      "A free Figma account (runs in your browser or desktop app)",
      "No design or software experience necessary"
    ],
    targetAudience: "Design beginners, junior UI designers, and frontend developers who want to master Figma quickly.",
    modules: [
      {
        title: "Module 1: Figma Interface & Vector Tools",
        duration: "1h 20m",
        lessonsCount: 4,
        topics: [
          { title: "Figma Overview: Workspaces, Pages & Keyboard Shortcuts", duration: "20 min", isFree: true },
          { title: "Frames vs Groups: Understanding Responsive Constraints", duration: "20 min", isFree: false },
          { title: "Vector Networks, Pen Tool & Custom Icon Creation", duration: "20 min", isFree: false },
          { title: "Typography Styles & Color Swatch Libraries", duration: "20 min", isFree: false }
        ]
      },
      {
        title: "Module 2: Auto Layout & Responsive UI",
        duration: "2h 10m",
        lessonsCount: 4,
        topics: [
          { title: "Auto Layout Basics: Direction, Padding & Gap Spacing", duration: "30 min", isFree: true },
          { title: "Resizing Modes: Hug, Fixed, and Fill Container Explained", duration: "30 min", isFree: false },
          { title: "Building a Bulletproof Responsive Navigation Bar", duration: "35 min", isFree: false },
          { title: "Project: Responsive E-Commerce Product Card", duration: "35 min", isFree: false }
        ]
      },
      {
        title: "Module 3: Components, Variants & Design Tokens",
        duration: "1h 50m",
        lessonsCount: 4,
        topics: [
          { title: "Creating Reusable Components & Instances", duration: "25 min", isFree: false },
          { title: "Component Variants: States (Hover, Active, Disabled)", duration: "30 min", isFree: false },
          { title: "Component Properties: Boolean, Text & Instance Swapping", duration: "25 min", isFree: false },
          { title: "Design Tokens & Figma Variables (Color, Spacing, Modes)", duration: "30 min", isFree: false }
        ]
      },
      {
        title: "Module 4: Interactive Prototyping & Smart Animate",
        duration: "1h 40m",
        lessonsCount: 4,
        topics: [
          { title: "Screen Connections, Triggers & Scrolling Containers", duration: "25 min", isFree: false },
          { title: "Smart Animate Transitions & Interactive Drawer Menus", duration: "30 min", isFree: false },
          { title: "Interactive Component States (Toggles, Checkboxes)", duration: "20 min", isFree: false },
          { title: "Capstone: Clickable Mobile Onboarding Flow & Sharing Links", duration: "25 min", isFree: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Python for Data Analysis",
    teacher: "Rahul Verma",
    teacherRole: "Lead Data Scientist & Machine Learning Consultant",
    teacherBio: "Rahul has worked with Fortune 100 enterprises to build predictive data pipelines. He holds a Master's in Data Science and specializes in computational statistics and visual analytics.",
    category: "Data",
    price: 45,
    originalPrice: 120,
    rating: 4.7,
    reviewsCount: 2100,
    studentsCount: 7800,
    lessons: 50,
    hours: 22,
    level: "Beginner to Intermediate",
    language: "English",
    lastUpdated: "October 2026",
    color: "#15803d",
    glyph: "Py",
    img: "images/course-python.jpg",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Science", "EDA", "Jupyter"],
    tagline: "Turn messy raw data into actionable insights, dashboards, and charts.",
    description: "Discover the power of Python for real-world data science. Learn NumPy for numerical crunching, Pandas for data wrangling, and Matplotlib/Seaborn for storytelling through visuals.",
    whatYouLearn: [
      "Write efficient Python code using list comprehensions and lambda functions",
      "Perform fast vector math and matrix manipulation with NumPy arrays",
      "Clean, filter, reshape, and merge complex datasets with Pandas",
      "Handle missing values, date-time parsing, and outlier detection",
      "Create publication-ready visual charts with Matplotlib and Seaborn",
      "Conduct end-to-end Exploratory Data Analysis (EDA) on real-world datasets"
    ],
    requirements: [
      "Basic computer literacy",
      "No prior Python or programming background required",
      "Free Anaconda / Jupyter Notebook environment (setup included)"
    ],
    targetAudience: "Data analysts, finance professionals, researchers, and anyone who wants to automate data workflows and analyze data with Python.",
    modules: [
      {
        title: "Module 1: Python for Data Science Primer",
        duration: "4h 10m",
        lessonsCount: 4,
        topics: [
          { title: "Python Setup, Jupyter Notebooks & Core Data Types", duration: "45 min", isFree: true },
          { title: "Lists, Dictionaries, Sets & Nested Data Structures", duration: "55 min", isFree: false },
          { title: "Control Flow, List Comprehensions & Custom Functions", duration: "60 min", isFree: false },
          { title: "Working with Files, CSVs & JSON Formats in Python", duration: "50 min", isFree: false }
        ]
      },
      {
        title: "Module 2: Numerical Computing with NumPy",
        duration: "4h 20m",
        lessonsCount: 4,
        topics: [
          { title: "NumPy 1D & 2D Arrays vs Native Python Lists", duration: "50 min", isFree: true },
          { title: "Array Indexing, Slicing & Boolean Masking", duration: "60 min", isFree: false },
          { title: "Vectorized Operations, Broadcasting & Universal Functions", duration: "70 min", isFree: false },
          { title: "Statistical Measures: Mean, Median, Variance & Percentiles", duration: "40 min", isFree: false }
        ]
      },
      {
        title: "Module 3: Data Cleaning & Wrangling with Pandas",
        duration: "7h 30m",
        lessonsCount: 4,
        topics: [
          { title: "Pandas Series & DataFrames: Reading & Inspecting Real Data", duration: "60 min", isFree: false },
          { title: "Filtering Rows, Selecting Columns & Handling Missing Values", duration: "75 min", isFree: false },
          { title: "Grouping, Pivot Tables & Multi-Index Aggregations", duration: "85 min", isFree: false },
          { title: "Project: Cleaning and Analyzing 50,000 Global E-Commerce Transactions", duration: "110 min", isFree: false }
        ]
      },
      {
        title: "Module 4: Data Visualization & Storytelling",
        duration: "6h 00m",
        lessonsCount: 4,
        topics: [
          { title: "Matplotlib Architecture: Subplots, Scales & Custom Labels", duration: "60 min", isFree: false },
          { title: "Seaborn: Heatmaps, Pairplots, Boxplots & Distribution Curves", duration: "75 min", isFree: false },
          { title: "Time-Series Analysis & Trend Visualization", duration: "65 min", isFree: false },
          { title: "Capstone: Full Exploratory Data Analysis (EDA) Executive Report", duration: "100 min", isFree: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "SQL and Databases",
    teacher: "Mina Patel",
    teacherRole: "Principal Database Engineer & Data Architect",
    teacherBio: "Mina has spent 15 years optimizing relational databases for high-concurrency fintech platforms. She specializes in PostgreSQL, query performance tuning, and schema architecture.",
    category: "Data",
    price: 25,
    originalPrice: 79,
    rating: 4.6,
    reviewsCount: 1230,
    studentsCount: 4900,
    lessons: 28,
    hours: 10,
    level: "Beginner to Intermediate",
    language: "English",
    lastUpdated: "September 2026",
    color: "#0e7490",
    glyph: "DB",
    img: "images/course-sql.jpg",
    tags: ["SQL", "PostgreSQL", "Relational DBs", "JOINs", "Window Functions", "Subqueries", "Indexing"],
    tagline: "Master SQL queries, schema design, and database optimization from the ground up.",
    description: "From simple SELECT statements to multi-table JOINs, subqueries, window functions, and database index tuning, gain complete confidence querying relational databases.",
    whatYouLearn: [
      "Write clean SQL queries with SELECT, WHERE, ORDER BY, and LIMIT",
      "Aggregate and summarize data with GROUP BY, HAVING, and aggregate functions",
      "Combine data from multiple tables using INNER, LEFT, RIGHT, and FULL JOINs",
      "Master subqueries, Common Table Expressions (CTEs), and Window Functions",
      "Design normalized database schemas with primary and foreign keys",
      "Analyze query plans and optimize slow queries using database indexes"
    ],
    requirements: [
      "No prior database or programming experience needed",
      "A computer with Windows, Mac, or Linux to install free PostgreSQL / pgAdmin"
    ],
    targetAudience: "Data analysts, software engineers, product managers, and business intelligence professionals who need to query databases.",
    modules: [
      {
        title: "Module 1: Relational Database Essentials & Basic Queries",
        duration: "2h 00m",
        lessonsCount: 4,
        topics: [
          { title: "Relational Concepts: Tables, Columns, Rows & Primary Keys", duration: "25 min", isFree: true },
          { title: "Querying Data with SELECT, DISTINCT, and Column Aliases", duration: "30 min", isFree: false },
          { title: "Filtering Records with WHERE, AND/OR, IN, and LIKE", duration: "35 min", isFree: false },
          { title: "Sorting Results with ORDER BY & Limiting Output with LIMIT", duration: "30 min", isFree: false }
        ]
      },
      {
        title: "Module 2: Aggregations & Grouping Data",
        duration: "2h 15m",
        lessonsCount: 4,
        topics: [
          { title: "Aggregate Functions: COUNT, SUM, AVG, MIN, and MAX", duration: "30 min", isFree: true },
          { title: "Grouping Data with GROUP BY & Filtering with HAVING", duration: "35 min", isFree: false },
          { title: "Handling NULL Values with COALESCE & Null Functions", duration: "30 min", isFree: false },
          { title: "Project: Monthly Financial Sales Summary Reports", duration: "40 min", isFree: false }
        ]
      },
      {
        title: "Module 3: Multi-Table JOINs & Relationships",
        duration: "3h 10m",
        lessonsCount: 4,
        topics: [
          { title: "Understanding Foreign Keys & Entity Relationship Diagrams", duration: "35 min", isFree: false },
          { title: "INNER JOIN vs LEFT JOIN vs RIGHT JOIN Demystified", duration: "50 min", isFree: false },
          { title: "Multi-table Joins & Self Joins for Hierarchical Data", duration: "45 min", isFree: false },
          { title: "Project: Customer Order Fulfillment & Inventory Database Querying", duration: "60 min", isFree: false }
        ]
      },
      {
        title: "Module 4: Advanced SQL, Window Functions & Performance",
        duration: "2h 35m",
        lessonsCount: 4,
        topics: [
          { title: "Subqueries & Correlated Subqueries in WHERE & SELECT", duration: "40 min", isFree: false },
          { title: "Common Table Expressions (CTEs) & Readable Queries", duration: "35 min", isFree: false },
          { title: "Window Functions: ROW_NUMBER, RANK, and Running Totals", duration: "40 min", isFree: false },
          { title: "Database Indexing, B-Trees & Reading EXPLAIN ANALYZE Plans", duration: "40 min", isFree: false }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Digital Marketing Basics",
    teacher: "Tom Brooks",
    teacherRole: "Growth Marketing Director & Acquisition Specialist",
    teacherBio: "Tom has managed over $15M in digital marketing budgets across SaaS, DTC, and marketplace brands. He focuses on measurable ROI, conversion rate optimization, and organic SEO.",
    category: "Marketing",
    price: 24,
    originalPrice: 75,
    rating: 4.5,
    reviewsCount: 890,
    studentsCount: 3200,
    lessons: 24,
    hours: 9,
    level: "Beginner",
    language: "English",
    lastUpdated: "September 2026",
    color: "#c2410c",
    glyph: "Mk",
    img: "images/course-marketing.jpg",
    tags: ["SEO", "Google Ads", "Content Strategy", "Email Marketing", "Social Media", "GA4", "Analytics"],
    tagline: "Acquire real customers using modern SEO, paid ads, and conversion funnels.",
    description: "A practical guide to driving organic traffic, setting up high-converting ad campaigns, nurturing leads through email automation, and measuring ROI.",
    whatYouLearn: [
      "Map out customer acquisition funnels from awareness to purchase",
      "Perform high-intent keyword research and optimize website SEO",
      "Create and manage high-ROI Google Search & Meta ad campaigns",
      "Build high-converting landing pages and run A/B tests",
      "Set up automated email drip sequences and lead magnets",
      "Measure KPIs, customer acquisition cost (CAC), and lifetime value (LTV)"
    ],
    requirements: [
      "No marketing experience required",
      "A willingness to learn how digital channels convert traffic into paying users"
    ],
    targetAudience: "Entrepreneurs, small business owners, freelancers, and aspiring digital marketers wanting real-world acquisition skills.",
    modules: [
      {
        title: "Module 1: Modern Digital Marketing Strategy & Personas",
        duration: "1h 45m",
        lessonsCount: 4,
        topics: [
          { title: "The Modern Acquisition Funnel: Awareness to Advocacy", duration: "25 min", isFree: true },
          { title: "Customer Persona Mapping & Value Proposition Design", duration: "25 min", isFree: false },
          { title: "Competitor Research & Market Positioning", duration: "25 min", isFree: false },
          { title: "Defining Core KPIs: CAC, LTV, ROAS & Conversion Rates", duration: "30 min", isFree: false }
        ]
      },
      {
        title: "Module 2: Search Engine Optimization (SEO) Masterclass",
        duration: "2h 45m",
        lessonsCount: 4,
        topics: [
          { title: "How Search Engines Work: Crawling, Indexing & Ranking", duration: "30 min", isFree: true },
          { title: "High-Intent Keyword Research & Searcher Intent", duration: "45 min", isFree: false },
          { title: "On-Page SEO: Headings, Meta Tags, URL Slugs & Schema", duration: "45 min", isFree: false },
          { title: "Technical SEO Fundamentals & Ethical Backlink Strategies", duration: "45 min", isFree: false }
        ]
      },
      {
        title: "Module 3: Paid Advertising on Google & Social Media",
        duration: "2h 30m",
        lessonsCount: 4,
        topics: [
          { title: "Google Search Ads: Structure, Bidding & High-CTR Copy", duration: "40 min", isFree: false },
          { title: "Meta Ads (Instagram & Facebook): Targeting & Creative Formats", duration: "40 min", isFree: false },
          { title: "Landing Page Optimization & A/B Testing Best Practices", duration: "35 min", isFree: false },
          { title: "Retargeting Campaigns & Budget Allocation Strategy", duration: "35 min", isFree: false }
        ]
      },
      {
        title: "Module 4: Email Automation, Funnels & GA4 Analytics",
        duration: "2h 00m",
        lessonsCount: 4,
        topics: [
          { title: "Lead Magnets & High-Converting Opt-In Forms", duration: "25 min", isFree: false },
          { title: "Automated Email Drip Sequences & Re-engagement Campaigns", duration: "30 min", isFree: false },
          { title: "Google Analytics 4 (GA4): Events, Conversions & Attribution", duration: "35 min", isFree: false },
          { title: "Capstone: Complete 90-Day Digital Growth Marketing Plan", duration: "30 min", isFree: false }
        ]
      }
    ]
  }
];

/* ---------- Elements ---------- */
const grid = document.getElementById("courseGrid");
const chipsBox = document.getElementById("chips");
const searchBox = document.getElementById("search");
const searchClearBtn = document.getElementById("searchClearBtn");
const resultsCountEl = document.getElementById("resultsCount");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const emptyMsg = document.getElementById("empty");
const cartCount = document.getElementById("cartCount");
const toastEl = document.getElementById("toast");
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuToggle");
const cartBtn = document.getElementById("cartBtn");

// Auth Elements
const loginBtn = document.getElementById("loginBtn");
const userMenuWrapper = document.getElementById("userMenuWrapper");
const userAvatarBtn = document.getElementById("userAvatarBtn");
const userAvatarInitial = document.getElementById("userAvatarInitial");
const userNameShort = document.getElementById("userNameShort");
const userDropdown = document.getElementById("userDropdown");
const dropdownUserName = document.getElementById("dropdownUserName");
const dropdownUserEmail = document.getElementById("dropdownUserEmail");
const dropdownLogoutBtn = document.getElementById("dropdownLogoutBtn");

const loginModal = document.getElementById("loginModal");
const loginCloseBtn = document.getElementById("loginCloseBtn");
const authModalTitle = document.getElementById("authModalTitle");
const authModalSubtitle = document.getElementById("authModalSubtitle");
const tabSignIn = document.getElementById("tabSignIn");
const tabSignUp = document.getElementById("tabSignUp");
const loginForm = document.getElementById("loginForm");
const nameFieldGroup = document.getElementById("nameFieldGroup");
const authName = document.getElementById("authName");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const passwordToggleBtn = document.getElementById("passwordToggleBtn");
const eyeIcon = document.getElementById("eyeIcon");
const authRemember = document.getElementById("authRemember");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const magicLinkBtn = document.getElementById("magicLinkBtn");
const switchAuthModeBtn = document.getElementById("switchAuthModeBtn");
const authSwitchPrompt = document.getElementById("authSwitchPrompt");

// Modals
const courseModal = document.getElementById("courseModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalContent = document.getElementById("modalContent");

const cartDrawer = document.getElementById("cartDrawer");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartDrawerBody = document.getElementById("cartDrawerBody");
const cartDrawerCount = document.getElementById("cartDrawerCount");
const cartTotalAmount = document.getElementById("cartTotalAmount");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

const lessonModal = document.getElementById("lessonModal");
const lessonCloseBtn = document.getElementById("lessonCloseBtn");
const lessonModalContent = document.getElementById("lessonModalContent");

/* ---------- State ---------- */
let activeCategory = "All";
let query = "";
const cart = new Set();
let activeModalCourseId = null;
let authMode = "signin"; // "signin" | "signup"
let currentUser = null; // { name, email }

/* ---------- HTML Escape Helper ---------- */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ---------- Category chips with Course Counts ---------- */
const categories = ["All", ...new Set(courses.map(c => c.category))];

function renderChips() {
  chipsBox.innerHTML = categories.map(cat => {
    const count = cat === "All" ? courses.length : courses.filter(c => c.category === cat).length;
    const isActive = cat === activeCategory;
    return `
      <button class="chip ${isActive ? "active" : ""}" data-cat="${escapeHtml(cat)}" aria-pressed="${isActive}">
        <span class="chip-label">${escapeHtml(cat)}</span>
        <span class="chip-count">${count}</span>
      </button>
    `;
  }).join("");
}

chipsBox.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeCategory = chip.dataset.cat;
  renderChips();
  renderCourses();
});

/* ---------- Course Matching / Filter ---------- */
function courseMatches(c, q, cat) {
  const matchCat = cat === "All" || c.category === cat;
  if (!matchCat) return false;
  if (!q) return true;

  // Search across title, teacher, category, tags, and topics/modules
  const searchTerms = [
    c.title,
    c.teacher,
    c.category,
    c.tagline,
    ...(c.tags || []),
    ...(c.modules ? c.modules.map(m => m.title) : []),
    ...(c.modules ? c.modules.flatMap(m => m.topics.map(t => t.title)) : [])
  ].map(s => s.toLowerCase());

  return searchTerms.some(term => term.includes(q));
}

/* ---------- Course cards ---------- */
function renderCourses() {
  const list = courses.filter(c => courseMatches(c, query, activeCategory));

  if (resultsCountEl) {
    if (query) {
      resultsCountEl.innerHTML = `Showing <strong>${list.length}</strong> course${list.length !== 1 ? 's' : ''} matching "<em>${escapeHtml(query)}</em>"`;
    } else if (activeCategory !== "All") {
      resultsCountEl.innerHTML = `Showing <strong>${list.length}</strong> course${list.length !== 1 ? 's' : ''} in <strong>${escapeHtml(activeCategory)}</strong>`;
    } else {
      resultsCountEl.innerHTML = `Showing all <strong>${list.length}</strong> courses`;
    }
  }

  if (searchClearBtn) {
    searchClearBtn.hidden = query.length === 0;
  }

  grid.innerHTML = list.map(c => {
    const isAdded = cart.has(c.id);
    const topTags = (c.tags || []).slice(0, 3);
    const modulesCount = c.modules ? c.modules.length : 0;
    const discountPercent = c.originalPrice ? Math.round((1 - c.price / c.originalPrice) * 100) : 0;

    return `
      <article class="course-card" data-course-id="${c.id}">
        <div class="card-thumb" role="button" tabindex="0" aria-label="View syllabus and details for ${escapeHtml(c.title)}">
          ${c.img
            ? `<img class="thumb-img" src="${c.img}" alt="${escapeHtml(c.title)}" loading="lazy">`
            : `<div class="thumb" style="background:${c.color}" aria-hidden="true">${c.glyph}</div>`}
          <div class="thumb-gradient"></div>
          <span class="card-badge-level">${escapeHtml(c.level)}</span>
          <span class="card-badge-hours">${c.hours} hrs</span>
        </div>
        
        <div class="card-body">
          <div class="card-top-row">
            <span class="card-cat">${escapeHtml(c.category)}</span>
            <span class="card-topics-pill">${modulesCount} Modules</span>
          </div>

          <h3 class="card-title" role="button" tabindex="0" title="${escapeHtml(c.title)}">${escapeHtml(c.title)}</h3>
          
          <div class="card-teacher">
            <span class="teacher-avatar-mini" style="background:${c.color}">${c.glyph}</span>
            <span>By <strong>${escapeHtml(c.teacher)}</strong></span>
          </div>

          <div class="card-tags">
            ${topTags.map(tag => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join("")}
          </div>

          <div class="card-meta">
            <span class="card-rating">★ ${c.rating}</span>
            <span class="reviews-count">(${c.reviewsCount.toLocaleString()})</span>
            <span class="meta-sep">&bull;</span>
            <span class="meta-lessons">${c.lessons} lessons</span>
          </div>

          <div class="card-footer">
            <div class="card-pricing-bar">
              <div class="price-wrap">
                <span class="price">$${c.price}</span>
                ${c.originalPrice ? `<span class="original-price">$${c.originalPrice}</span>` : ""}
              </div>
              ${discountPercent > 0 ? `<span class="discount-badge">${discountPercent}% OFF</span>` : ""}
            </div>

            <div class="card-actions">
              <button class="btn btn-details view-details-btn" data-id="${c.id}" aria-label="View syllabus and topics for ${escapeHtml(c.title)}">
                <span>View Syllabus</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button class="add-btn ${isAdded ? 'in-cart' : ''}" data-id="${c.id}" ${isAdded ? "disabled" : ""} aria-label="${isAdded ? "In cart" : "Add to cart"}">
                ${isAdded ? "✓ In cart" : "+ Add"}
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  emptyMsg.hidden = list.length > 0;
}

searchBox.addEventListener("input", () => {
  query = searchBox.value.trim().toLowerCase();
  renderCourses();
});

if (searchClearBtn) {
  searchClearBtn.addEventListener("click", () => {
    searchBox.value = "";
    query = "";
    searchBox.focus();
    renderCourses();
  });
}

if (resetFilterBtn) {
  resetFilterBtn.addEventListener("click", () => {
    searchBox.value = "";
    query = "";
    activeCategory = "All";
    renderChips();
    renderCourses();
  });
}

/* ---------- Course Card Clicks ---------- */
grid.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".add-btn");
  if (addBtn) {
    e.stopPropagation();
    const id = Number(addBtn.dataset.id);
    addToCart(id);
    return;
  }

  const detailsBtn = e.target.closest(".view-details-btn");
  if (detailsBtn) {
    e.stopPropagation();
    const id = Number(detailsBtn.dataset.id);
    openCourseModal(id);
    return;
  }

  const card = e.target.closest(".course-card");
  if (card) {
    const id = Number(card.dataset.courseId);
    openCourseModal(id);
  }
});

grid.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const cardEl = e.target.closest(".card-thumb, .card-title");
    if (cardEl) {
      e.preventDefault();
      const card = e.target.closest(".course-card");
      if (card) {
        openCourseModal(Number(card.dataset.courseId));
      }
    }
  }
});

/* ---------- Course Details & Topics Modal ---------- */
function openCourseModal(id) {
  const course = courses.find(c => c.id === id);
  if (!course) return;

  activeModalCourseId = id;
  const isAdded = cart.has(course.id);
  const totalTopicsCount = course.modules 
    ? course.modules.reduce((acc, m) => acc + (m.topics ? m.topics.length : 0), 0)
    : course.lessons;

  modalContent.innerHTML = `
    <div class="modal-layout">
      <!-- MAIN DETAILS COLUMN -->
      <div class="modal-main">
        <div class="modal-header-badges">
          <span class="modal-category-badge">${course.category}</span>
          <span class="modal-level-badge">${course.level}</span>
          <span class="modal-rating-badge">★ ${course.rating} (${course.reviewsCount.toLocaleString()} reviews)</span>
        </div>

        <h2 id="modalCourseTitle" class="modal-course-title">${course.title}</h2>
        <p class="modal-tagline">${course.tagline}</p>

        <div class="modal-instructor-row">
          <div class="instructor-avatar" style="background:${course.color}">${course.glyph}</div>
          <div>
            <div class="instructor-name">Created by <strong>${course.teacher}</strong></div>
            <div class="instructor-title">${course.teacherRole}</div>
          </div>
        </div>

        <div class="modal-stats-bar">
          <div class="stat-item">
            <span class="stat-icon">⏱</span>
            <div>
              <strong>${course.hours} Hours</strong>
              <span>On-demand audio/video</span>
            </div>
          </div>
          <div class="stat-item">
            <span class="stat-icon">📚</span>
            <div>
              <strong>${course.modules.length} Modules</strong>
              <span>${totalTopicsCount} Detailed Topics</span>
            </div>
          </div>
          <div class="stat-item">
            <span class="stat-icon">🌐</span>
            <div>
              <strong>${course.language}</strong>
              <span>Full subtitles included</span>
            </div>
          </div>
          <div class="stat-item">
            <span class="stat-icon">🏆</span>
            <div>
              <strong>Certificate</strong>
              <span>Included on completion</span>
            </div>
          </div>
        </div>

        <!-- WHAT YOU'LL LEARN -->
        <section class="modal-section learn-section">
          <h3 class="modal-section-title">What you'll learn</h3>
          <div class="learn-grid">
            ${course.whatYouLearn.map(item => `
              <div class="learn-item">
                <span class="check-icon" aria-hidden="true">✓</span>
                <span>${item}</span>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- TOPICS & CURRICULUM -->
        <section class="modal-section curriculum-section" id="courseCurriculum">
          <div class="curriculum-header">
            <div>
              <h3 class="modal-section-title">Course Topics & Curriculum</h3>
              <p class="curriculum-summary">
                ${course.modules.length} Modules &bull; ${course.lessons} Lessons &bull; ${course.hours} Total Hours
              </p>
            </div>
            <button class="expand-all-btn" id="expandAllBtn" type="button">
              Expand All Topics
            </button>
          </div>

          <div class="modules-accordion" id="modulesAccordion">
            ${course.modules.map((m, idx) => `
              <div class="accordion-item" data-index="${idx}">
                <button class="accordion-header" aria-expanded="${idx === 0 ? "true" : "false"}" aria-controls="mod-body-${idx}" id="mod-head-${idx}">
                  <span class="accordion-chevron" aria-hidden="true">▶</span>
                  <div class="accordion-title-wrap">
                    <span class="accordion-module-title">${m.title}</span>
                    <span class="accordion-module-meta">${m.topics ? m.topics.length : m.lessonsCount} topics &middot; ${m.duration}</span>
                  </div>
                </button>
                <div class="accordion-panel ${idx === 0 ? "open" : ""}" id="mod-body-${idx}" role="region" aria-labelledby="mod-head-${idx}" ${idx === 0 ? "" : 'hidden'}>
                  <ul class="topics-list">
                    ${m.topics.map((topic, tIdx) => `
                      <li class="topic-item">
                        <span class="topic-icon" aria-hidden="true">
                          ${topic.isFree ? "▶" : "•"}
                        </span>
                        <span class="topic-title">${topic.title}</span>
                        ${topic.isFree ? `
                          <button class="preview-badge" data-course-id="${course.id}" data-mod="${idx}" data-topic="${tIdx}" title="Watch free lesson preview">
                            Free Preview
                          </button>
                        ` : ""}
                        <span class="topic-duration">${topic.duration}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- REQUIREMENTS -->
        <section class="modal-section">
          <h3 class="modal-section-title">Requirements & Prerequisites</h3>
          <ul class="requirements-list">
            ${course.requirements.map(req => `<li>${req}</li>`).join("")}
          </ul>
        </section>

        <!-- WHO THIS COURSE IS FOR -->
        <section class="modal-section">
          <h3 class="modal-section-title">Who this course is for</h3>
          <p class="audience-text">${course.targetAudience}</p>
        </section>

        <!-- INSTRUCTOR SECTION -->
        <section class="modal-section instructor-section">
          <h3 class="modal-section-title">Your Instructor</h3>
          <div class="instructor-card">
            <div class="instructor-big-avatar" style="background:${course.color}">
              ${course.glyph}
            </div>
            <div class="instructor-info">
              <h4>${course.teacher}</h4>
              <p class="instructor-subtitle">${course.teacherRole}</p>
              <div class="instructor-stats">
                <span>★ ${course.rating} Rating</span>
                <span>•</span>
                <span>${course.studentsCount.toLocaleString()} Students</span>
                <span>•</span>
                <span>Verified Expert</span>
              </div>
              <p class="instructor-bio">${course.teacherBio}</p>
            </div>
          </div>
        </section>
      </div>

      <!-- STICKY SIDEBAR / ACTION CARD -->
      <aside class="modal-sidebar">
        <div class="sidebar-card">
          <div class="sidebar-thumb">
            ${course.img
              ? `<img src="${course.img}" alt="${course.title}">`
              : `<div class="sidebar-fallback-thumb" style="background:${course.color}">${course.glyph}</div>`}
          </div>

          <div class="sidebar-pricing">
            <div class="sidebar-price-row">
              <span class="sidebar-price">$${course.price}</span>
              ${course.originalPrice ? `<span class="sidebar-orig-price">$${course.originalPrice}</span>` : ""}
              ${course.originalPrice ? `<span class="sidebar-discount">${Math.round((1 - course.price / course.originalPrice) * 100)}% off</span>` : ""}
            </div>
            <p class="guarantee-note">⏳ Special pricing available for a limited time</p>
          </div>

          <div class="sidebar-actions">
            <button class="btn btn-accent btn-block modal-add-btn" data-id="${course.id}" ${isAdded ? "disabled" : ""}>
              ${isAdded ? "Already in Cart" : "Add to Cart"}
            </button>
            <button class="btn btn-dark btn-block modal-enroll-now-btn" data-id="${course.id}">
              Enroll Now &bull; $${course.price}
            </button>
          </div>

          <div class="sidebar-perks">
            <h4>This course includes:</h4>
            <ul>
              <li>⚡ ${course.hours} hours on-demand practical video</li>
              <li>📑 ${totalTopicsCount} comprehensive syllabus topics</li>
              <li>📱 Access on mobile, tablet, and desktop</li>
              <li>♾️ Full lifetime access to all updates</li>
              <li>🏆 Shareable certificate of completion</li>
              <li>🛡️ 30-day money-back guarantee</li>
            </ul>
          </div>

          <button class="share-btn" data-id="${course.id}" type="button">
            🔗 Copy Course Link
          </button>
        </div>
      </aside>
    </div>
  `;

  // Open modal
  courseModal.hidden = false;
  document.body.classList.add("modal-open");
  window.location.hash = `course-${course.id}`;

  setupAccordionListeners();
  setupModalActionListeners(course);
}

function closeCourseModal() {
  courseModal.hidden = true;
  document.body.classList.remove("modal-open");
  activeModalCourseId = null;
  if (window.location.hash.startsWith("#course-")) {
    history.replaceState(null, null, " ");
  }
}

modalCloseBtn.addEventListener("click", closeCourseModal);
courseModal.addEventListener("click", (e) => {
  if (e.target === courseModal) {
    closeCourseModal();
  }
});

/* ---------- Accordion for Topics ---------- */
function setupAccordionListeners() {
  const accordion = document.getElementById("modulesAccordion");
  if (!accordion) return;

  const expandAllBtn = document.getElementById("expandAllBtn");
  let allExpanded = false;

  accordion.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");
    if (!header) return;

    const item = header.closest(".accordion-item");
    const panel = item.querySelector(".accordion-panel");
    const isExpanded = header.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      header.setAttribute("aria-expanded", "false");
      panel.hidden = true;
      panel.classList.remove("open");
    } else {
      header.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      panel.classList.add("open");
    }
  });

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      allExpanded = !allExpanded;
      const headers = accordion.querySelectorAll(".accordion-header");
      const panels = accordion.querySelectorAll(".accordion-panel");

      headers.forEach(h => h.setAttribute("aria-expanded", allExpanded ? "true" : "false"));
      panels.forEach(p => {
        p.hidden = !allExpanded;
        if (allExpanded) p.classList.add("open");
        else p.classList.remove("open");
      });

      expandAllBtn.textContent = allExpanded ? "Collapse All Topics" : "Expand All Topics";
    });
  }

  // Free preview triggers
  accordion.addEventListener("click", (e) => {
    const previewBtn = e.target.closest(".preview-badge");
    if (!previewBtn) return;
    e.stopPropagation();

    const courseId = Number(previewBtn.dataset.courseId);
    const modIdx = Number(previewBtn.dataset.mod);
    const topicIdx = Number(previewBtn.dataset.topic);
    openLessonPreview(courseId, modIdx, topicIdx);
  });
}

function setupModalActionListeners(course) {
  const addBtn = modalContent.querySelector(".modal-add-btn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      addToCart(course.id);
      addBtn.disabled = true;
      addBtn.textContent = "Already in Cart";
      renderCourses();
    });
  }

  const enrollBtn = modalContent.querySelector(".modal-enroll-now-btn");
  if (enrollBtn) {
    enrollBtn.addEventListener("click", () => {
      addToCart(course.id);
      closeCourseModal();
      openCartDrawer();
      showToast(`Selected "${course.title}". Proceeding to checkout.`);
    });
  }

  const shareBtn = modalContent.querySelector(".share-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      const url = `${window.location.origin}${window.location.pathname}#course-${course.id}`;
      navigator.clipboard.writeText(url).then(() => {
        showToast("Course link copied to clipboard!");
      }).catch(() => {
        showToast(`Course link: #course-${course.id}`);
      });
    });
  }
}

/* ---------- Free Lesson Preview Modal ---------- */
function openLessonPreview(courseId, modIdx, topicIdx) {
  const course = courses.find(c => c.id === courseId);
  if (!course || !course.modules[modIdx]) return;
  const mod = course.modules[modIdx];
  const topic = mod.topics[topicIdx];
  if (!topic) return;

  lessonModalContent.innerHTML = `
    <div class="lesson-preview-container">
      <div class="preview-video-placeholder">
        <div class="video-mockup">
          <button class="mockup-play-btn" aria-label="Play video preview">▶</button>
          <div class="mockup-bar">
            <span>${topic.title}</span>
            <span>${topic.duration}</span>
          </div>
        </div>
      </div>
      <div class="preview-info">
        <span class="preview-badge-pill">Free Sample Topic</span>
        <h3>${topic.title}</h3>
        <p class="preview-sub">From <strong>${course.title}</strong> &bull; ${mod.title}</p>
        <p class="preview-desc">In this free preview lesson, you'll explore key industry patterns and build practical foundations. Enroll in the full course to unlock all ${course.lessons} lessons and project assignments.</p>
        <div class="preview-actions">
          <button class="btn btn-accent btn-small" id="previewEnrollBtn">
            Enroll in Full Course ($${course.price})
          </button>
          <button class="btn btn-outline btn-small" id="previewCloseBtn">
            Back to Topics
          </button>
        </div>
      </div>
    </div>
  `;

  lessonModal.hidden = false;

  document.getElementById("previewCloseBtn").addEventListener("click", () => {
    lessonModal.hidden = true;
  });

  document.getElementById("previewEnrollBtn").addEventListener("click", () => {
    lessonModal.hidden = true;
    addToCart(course.id);
    openCartDrawer();
  });
}

lessonCloseBtn.addEventListener("click", () => {
  lessonModal.hidden = true;
});

lessonModal.addEventListener("click", (e) => {
  if (e.target === lessonModal) {
    lessonModal.hidden = true;
  }
});

/* ---------- Cart Management ---------- */
function addToCart(id) {
  if (cart.has(id)) return;
  cart.add(id);
  updateCartUI();

  // Tactile feedback on cart icon badge
  if (cartCount) {
    cartCount.classList.remove("pulse");
    void cartCount.offsetWidth;
    cartCount.classList.add("pulse");
  }

  const course = courses.find(c => c.id === id);
  showToast(`Added to cart: ${course.title}`);
  renderCourses();

  // If details modal is open for this course, update its button too
  if (activeModalCourseId === id) {
    const addBtn = modalContent.querySelector(".modal-add-btn");
    if (addBtn) {
      addBtn.disabled = true;
      addBtn.textContent = "Already in Cart";
      addBtn.classList.add("in-cart");
    }
  }
}

function removeFromCart(id) {
  cart.delete(id);
  updateCartUI();
  renderCourses();

  if (activeModalCourseId === id) {
    const addBtn = modalContent.querySelector(".modal-add-btn");
    if (addBtn) {
      addBtn.disabled = false;
      addBtn.textContent = "Add to Cart";
    }
  }
  showToast("Item removed from cart");
}

function updateCartUI() {
  cartCount.textContent = cart.size;
  if (cartDrawerCount) cartDrawerCount.textContent = cart.size;

  const cartItems = Array.from(cart).map(id => courses.find(c => c.id === id)).filter(Boolean);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  if (cartTotalAmount) {
    cartTotalAmount.textContent = `$${total}`;
  }

  if (cartDrawerBody) {
    if (cartItems.length === 0) {
      cartDrawerBody.innerHTML = `
        <div class="cart-empty">
          <div class="empty-cart-icon">🛒</div>
          <h4>Your cart is empty</h4>
          <p>Explore our courses and start learning today!</p>
          <a href="#courses" class="btn btn-accent btn-small" id="cartBrowseBtn">Browse Courses</a>
        </div>
      `;
      const browseBtn = document.getElementById("cartBrowseBtn");
      if (browseBtn) {
        browseBtn.addEventListener("click", closeCartDrawer);
      }
    } else {
      cartDrawerBody.innerHTML = cartItems.map(item => `
        <div class="cart-item">
          <div class="cart-item-thumb">
            ${item.img 
              ? `<img src="${item.img}" alt="${item.title}">` 
              : `<div class="cart-item-glyph" style="background:${item.color}">${item.glyph}</div>`}
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-teacher">By ${item.teacher}</span>
            <span class="cart-item-price">$${item.price}</span>
          </div>
          <button class="cart-remove-btn" data-id="${item.id}" aria-label="Remove ${item.title} from cart">&times;</button>
        </div>
      `).join("");
    }
  }
}

/* ---------- Cart Drawer Events ---------- */
function openCartDrawer() {
  updateCartUI();
  cartDrawer.hidden = false;
  setTimeout(() => cartDrawer.classList.add("open"), 10);
  document.body.classList.add("modal-open");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  setTimeout(() => {
    cartDrawer.hidden = true;
    if (!activeModalCourseId) {
      document.body.classList.remove("modal-open");
    }
  }, 250);
}

cartBtn.addEventListener("click", openCartDrawer);
cartCloseBtn.addEventListener("click", closeCartDrawer);
cartDrawer.addEventListener("click", (e) => {
  if (e.target === cartDrawer) {
    closeCartDrawer();
  }
});

cartDrawerBody.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".cart-remove-btn");
  if (removeBtn) {
    const id = Number(removeBtn.dataset.id);
    removeFromCart(id);
  }
});

clearCartBtn.addEventListener("click", () => {
  if (cart.size === 0) return;
  cart.clear();
  updateCartUI();
  renderCourses();
  showToast("Cart has been cleared");
});

checkoutBtn.addEventListener("click", () => {
  if (cart.size === 0) {
    showToast("Your cart is empty. Add a course first!");
    return;
  }
  const count = cart.size;
  cart.clear();
  updateCartUI();
  renderCourses();
  closeCartDrawer();
  showToast(`🎉 Success! You're enrolled in ${count} course${count > 1 ? "s" : ""}. Happy learning!`);
});

/* ---------- Toast Notification ---------- */
let toastTimer;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
}

/* ---------- Mobile Menu ---------- */
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  menuBtn.classList.toggle("active", open);
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A" || e.target.classList.contains("nav-link")) {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open") && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.classList.remove("active");
  }
});

/* ---------- Navbar shadow on scroll ---------- */
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

/* ---------- Authentication & Login with Email ---------- */
function setAuthMode(mode) {
  authMode = mode;
  if (!tabSignIn || !tabSignUp) return;

  if (mode === "signin") {
    tabSignIn.classList.add("active");
    tabSignIn.setAttribute("aria-selected", "true");
    tabSignUp.classList.remove("active");
    tabSignUp.setAttribute("aria-selected", "false");
    nameFieldGroup.hidden = true;
    authName.removeAttribute("required");
    authModalTitle.textContent = "Welcome to LearnHub";
    authModalSubtitle.textContent = "Sign in with your email to access your courses and tracks";
    authSubmitBtn.querySelector("span").textContent = "Sign In with Email";
    authSwitchPrompt.innerHTML = 'Don\'t have an account? <button type="button" class="switch-auth-mode-btn" id="switchAuthModeBtn">Sign up free</button>';
  } else {
    tabSignUp.classList.add("active");
    tabSignUp.setAttribute("aria-selected", "true");
    tabSignIn.classList.remove("active");
    tabSignIn.setAttribute("aria-selected", "false");
    nameFieldGroup.hidden = false;
    authName.setAttribute("required", "true");
    authModalTitle.textContent = "Create Free Account";
    authModalSubtitle.textContent = "Start learning from industry leads and build portfolio projects";
    authSubmitBtn.querySelector("span").textContent = "Create Account with Email";
    authSwitchPrompt.innerHTML = 'Already have an account? <button type="button" class="switch-auth-mode-btn" id="switchAuthModeBtn">Sign in</button>';
  }
}

function openLoginModal(mode = "signin", prefillEmail = "") {
  setAuthMode(mode);
  if (prefillEmail && authEmail) {
    authEmail.value = prefillEmail;
  }
  const modal = loginModal || document.getElementById("loginModal");
  if (modal) {
    modal.hidden = false;
    modal.removeAttribute("hidden");
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
    setTimeout(() => {
      if (mode === "signup" && authName && !authName.value) {
        authName.focus();
      } else if (authEmail) {
        authEmail.focus();
      }
    }, 100);
  }
}

function closeLoginModal() {
  const modal = loginModal || document.getElementById("loginModal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("hidden", "");
  modal.style.display = "none";
  if (!activeModalCourseId && (!cartDrawer || cartDrawer.hidden)) {
    document.body.classList.remove("modal-open");
  }
}

// Expose globally
window._openLoginModal = openLoginModal;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;

function updateAuthUI() {
  if (!loginBtn || !userMenuWrapper) return;
  if (currentUser) {
    loginBtn.hidden = true;
    userMenuWrapper.hidden = false;
    const initial = (currentUser.name || currentUser.email || "U").charAt(0).toUpperCase();
    userAvatarInitial.textContent = initial;
    userNameShort.textContent = currentUser.name ? currentUser.name.split(" ")[0] : "Account";
    dropdownUserName.textContent = currentUser.name || "Learner";
    dropdownUserEmail.textContent = currentUser.email;
  } else {
    loginBtn.hidden = false;
    userMenuWrapper.hidden = true;
    if (userDropdown) userDropdown.hidden = true;
  }
}

function loginUser(name, email) {
  currentUser = {
    name: name || email.split("@")[0].replace(/[._-]/g, " "),
    email: email
  };
  try {
    localStorage.setItem("learnhub_user", JSON.stringify(currentUser));
  } catch (err) {}
  updateAuthUI();
  closeLoginModal();
  showToast(`🎉 Welcome back, ${currentUser.name}! Signed in as ${currentUser.email}`);
}

function logoutUser() {
  currentUser = null;
  try {
    localStorage.removeItem("learnhub_user");
  } catch (err) {}
  updateAuthUI();
  if (userDropdown) userDropdown.hidden = true;
  showToast("You have been signed out.");
}

function initAuth() {
  try {
    const saved = localStorage.getItem("learnhub_user");
    if (saved) {
      currentUser = JSON.parse(saved);
      updateAuthUI();
    }
  } catch (err) {}
}

/* Auth Listeners */
if (loginBtn) {
  loginBtn.addEventListener("click", () => openLoginModal("signin"));
}

if (loginCloseBtn) {
  loginCloseBtn.addEventListener("click", closeLoginModal);
}

if (loginModal) {
  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) closeLoginModal();
  });
}

if (tabSignIn && tabSignUp) {
  tabSignIn.addEventListener("click", () => setAuthMode("signin"));
  tabSignUp.addEventListener("click", () => setAuthMode("signup"));
}

// Switch auth mode button delegation
document.addEventListener("click", (e) => {
  const switchBtn = e.target.closest("#switchAuthModeBtn");
  if (switchBtn) {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  }
});

// Password visibility toggle
if (passwordToggleBtn && authPassword && eyeIcon) {
  passwordToggleBtn.addEventListener("click", () => {
    const isPass = authPassword.type === "password";
    authPassword.type = isPass ? "text" : "password";
    passwordToggleBtn.setAttribute("aria-label", isPass ? "Hide password" : "Show password");
    eyeIcon.innerHTML = isPass
      ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>'
      : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
  });
}

// Submit login form
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = authEmail.value.trim();
    const pass = authPassword.value;
    const name = authName ? authName.value.trim() : "";

    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address.");
      authEmail.focus();
      return;
    }
    if (!pass || pass.length < 4) {
      showToast("Password must be at least 4 characters long.");
      authPassword.focus();
      return;
    }

    loginUser(name, email);
    loginForm.reset();
  });
}

// Magic link button
if (magicLinkBtn) {
  magicLinkBtn.addEventListener("click", () => {
    const email = authEmail.value.trim();
    if (!email || !email.includes("@")) {
      showToast("Please type your email above to receive a magic sign-in link.");
      authEmail.focus();
      return;
    }
    showToast(`📧 Magic sign-in link sent to ${email}!`);
    setTimeout(() => {
      loginUser("", email);
    }, 1500);
  });
}

// Forgot password
if (forgotPasswordBtn) {
  forgotPasswordBtn.addEventListener("click", () => {
    const email = authEmail.value.trim();
    if (email && email.includes("@")) {
      showToast(`Password reset link sent to ${email}.`);
    } else {
      showToast("Please enter your email above to receive a reset link.");
      authEmail.focus();
    }
  });
}

// User dropdown toggle
if (userAvatarBtn && userDropdown && userMenuWrapper) {
  userAvatarBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = userDropdown.hidden;
    userDropdown.hidden = !isHidden;
    userAvatarBtn.setAttribute("aria-expanded", isHidden ? "true" : "false");
  });

  document.addEventListener("click", (e) => {
    if (!userMenuWrapper.contains(e.target)) {
      userDropdown.hidden = true;
      userAvatarBtn.setAttribute("aria-expanded", "false");
    }
  });
}

if (dropdownLogoutBtn) {
  dropdownLogoutBtn.addEventListener("click", logoutUser);
}

/* ---------- Sign-up Form (CTA Section) ---------- */
const signupFormEl = document.getElementById("signupForm");
if (signupFormEl) {
  signupFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const email = emailInput ? emailInput.value.trim() : "";
    if (email) {
      openLoginModal("signup", email);
    }
    if (emailInput) emailInput.value = "";
  });
}

/* ---------- Keyboard Esc to Close Modals ---------- */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (loginModal && !loginModal.hidden) {
      closeLoginModal();
    } else if (!lessonModal.hidden) {
      lessonModal.hidden = true;
    } else if (!courseModal.hidden) {
      closeCourseModal();
    } else if (!cartDrawer.hidden) {
      closeCartDrawer();
    }
  }
});

/* ---------- Global Click Interception for Login ---------- */
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("#loginBtn, .btn-login, a[href='#login'], a[href='#']");
  if (trigger) {
    const text = trigger.textContent.trim().toLowerCase();
    const isLogin = trigger.id === "loginBtn" || 
                    trigger.classList.contains("btn-login") || 
                    text === "log in" || 
                    text.includes("login") ||
                    trigger.getAttribute("href") === "#login";
    if (isLogin) {
      e.preventDefault();
      e.stopPropagation();
      openLoginModal("signin");
      return false;
    }
  }
}, true);

/* ---------- Deep Linking by URL Hash ---------- */
function checkHash() {
  const hash = window.location.hash;
  if (hash === "#login") {
    openLoginModal("signin");
  } else if (hash.startsWith("#course-")) {
    const id = Number(hash.replace("#course-", ""));
    if (id && courses.some(c => c.id === id)) {
      openCourseModal(id);
    }
  }
}

window.addEventListener("hashchange", () => {
  if (window.location.hash === "#login") {
    openLoginModal("signin");
  } else if (!window.location.hash.startsWith("#course-") && !courseModal.hidden) {
    closeCourseModal();
  } else if (window.location.hash.startsWith("#course-")) {
    checkHash();
  }
});

/* ---------- Initialization ---------- */
initAuth();
renderChips();
renderCourses();
updateCartUI();
checkHash();
