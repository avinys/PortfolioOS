export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  files: {
    webm?: string;
    gif?: string;
    poster?: string;
    posterAlt?: string;
    videoAlt?: string;
  };
  links?: { url?: string; code?: string };
};
export const projects: Project[] = [
  {
    slug: "timetracker",
    title: "TimeTracker",
    summary: "React + .NET 8 app with JWT auth and clean architecture.",
    stack: [
      "React",
      "TypeScript",
      "TanStack Query",
      ".NET 8",
      "EF Core",
      "MySQL",
      "Zoho Mail SMTP",
    ],
    highlights: [
      "JWT authentication",
      "Email confirmation & password reset with automatically emailed expiring tokens",
      "Time entries CRUD with validation",
      "Deployed on cloud Ubuntu server with systemd & Nginx",
    ],
    files: {
      webm: "/media/timetracker/timetracker.webm",
      gif: "/media/timetracker/timetracker.gif",
      poster: "/media/timetracker/poster.jpg",
      posterAlt: "TimeTracker poster",
      videoAlt: "Browsing the TimeTracker app",
    },
    links: {
      code: "https://github.com/avinys/TimeTrackerUI",
      url: "https://timetracker.arvydasvingis.com",
    },
  },

  {
    slug: "tournament",
    title: "Karate Tournament Bracket",
    summary:
      "Node.js + Express app for managing traditional karate do tournaments. Supports kumite single-elimination, kata double-elimination brackets, and kata points mode.",
    stack: ["Node.js", "Express", "EJS", "JavaScript", "CSS"],
    highlights: [
      "Bracket visualization, next-up feature, and results tracking",
      "Tested and successfully used in real club tournaments",
      "Improved administrative efficiency by ~60%, reduced paper usage by ~90%",
      "Supports single and double elimination brackets with alternating match selection, and points-based scoring",
    ],
    files: {
      webm: "/media/tournament/tournament.webm",
      gif: "/media/tournament/tournament.gif",
      poster: "/media/tournament/poster.jpg",
      posterAlt: "Karate Tournament Bracket poster",
      videoAlt: "Browsing the Karate Tournament Bracket",
    },
    links: {
      code: "https://github.com/avinys/Tournament-bracket",
      url: undefined,
    },
  },

  {
    slug: "portfolio",
    title: "Portfolio-OS (this website)",
    summary:
      "Simplified Desktop-OS style portfolio website, made with Next.js and Tailwind.",
    stack: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
    highlights: [
      "Draggable, resizable app windows and custom dock navigation.",
      "Interactive terminal built with XTerm.js, supporting commands, history, opening windows.",
      "Dark/Light theme toggle and Lite mode for lighter resources",
      "Deployed as a static Next.js export on Ubuntu server",
    ],
    files: {
      webm: undefined,
      gif: undefined,
      poster: undefined,
      posterAlt: undefined,
      videoAlt: undefined,
    },
    links: {
      code: "https://github.com/avinys/PortfolioOS",
      url: undefined,
    },
  },

  {
    slug: "wild-oasis",
    title: "The Wild Oasis",
    summary:
      "Luxury cabins hotel administration system. Allows changing the cabins information, checking-in guests, changing main settings for booking. Project I made during React course.",
    stack: [
      "React",
      "Tanstack Query",
      "Styled components",
      "React Router",
      "React Hook Form",
    ],
    highlights: [
      "Supabase authentication and authorization",
      "Full CRUD for cabins, bookings and guests.",
      "Reusable styled components, notifications with React Hot Toast, form validation with Ract Hook Form.",
      "Dashboard with KPIs and charts (Recharts), Tanstack Query caching.",
    ],
    files: {
      webm: "/media/wild-oasis/wild-oasis.webm",
      gif: "/media/wild-oasis/wild-oasis.gif",
      poster: "/media/wild-oasis/wild-oasis.jpg",
      posterAlt: "Wild Oasis luxury cabins hotel management application poster",
      videoAlt:
        "Browsing the Wild Oasis - luxury cabins hotel management application",
    },
    links: {
      code: "https://github.com/avinys/React-Course-P18-wild-oasis",
      url: undefined,
    },
  },

  {
    slug: "wild-oasis-client",
    title: "The Wild Oasis (client side)",
    summary:
      "Luxury cabins hotel website for guests. Supports viewing cabins and creating, updating, managing bookings witha personal account area. Project I made during React course.",
    stack: [
      "React",
      "Next.js",
      "Tanstack Query",
      "Tailwind CSS",
      "NextAuth v5",
      "React Day Picker",
    ],
    highlights: [
      "Google Sign-In integration with NextAuth v5",
      "Supabase integration for guests, cabins, and bookings with server actions",
      "Interactive date range picker with booked-date blackout, capacity checks and price calculation",
      "Guest area to view & edit resservations and update profile info",
    ],
    files: {
      webm: "/media/wild-oasis-client/wild-oasis-client.webm",
      gif: "/media/wild-oasis-client/wild-oasis-client.gif",
      poster: "/media/wild-oasis-client/wild-oasis-client.jpg",
      posterAlt: "Wild Oasis luxury cabins booking website",
      videoAlt: "Browsing the Wild Oasis - luxury cabins hotel booking website",
    },
    links: {
      code: "https://github.com/avinys/React-Course-P19-wild-oasis-client",
      url: undefined,
    },
  },

  {
    slug: "university-website-ai-assistant",
    title: "University Website AI Assistant",
    summary:
      "AI assistant in shape of a chatbot to help students navigate complex university websites. Designed for university project, uses Web Scraping, Semantic Search (SentenceTransformer MiniLM-L6-V2) and Google Gemini 2.0-flash model as AI assistant.",
    stack: [
      "React",
      "Semantic Search",
      "Gemini API",
      "Python",
      "FastAPI",
      "Sentence Transformers",
      "BeautifulSoup",
    ],
    highlights: [
      "RAG pipeline: scraper - text chunking - MiniLM-L6-V2 embeddings - Semantic search - Gemini 2.0-flash answers",
      "Undestands student intents via keyword similarity for Gemini workload minimization, provides links to pages.",
      "Allows user to select the scraping time - balancing search depth and time based on user preferences.",
      "Interactive React interface, FastAPI backend, respecting robots.txt and caching search results.",
    ],
    files: {
      webm: undefined,
      gif: undefined,
      poster:
        "/media/university-website-ai-assistant/university-website-ai-assistant.png",
      posterAlt: "Student Website AI Assistant front page",
      videoAlt: undefined,
    },
    links: {
      code: "https://github.com/avinys/UUXD-Project-Work",
      url: undefined,
    },
  },
];
