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
      "Node.js + Express app for managing traditional karate-do tournaments. Supports kumite single-elimination, kata double-elimination brackets, and kata points mode. Version 1 is archived.",
    stack: ["Node.js", "Express", "EJS", "JavaScript", "CSS"],
    highlights: [
      "Bracket visualization, next-up feature, and results tracking",
      "Tested and successfully used in real club tournaments",
      "Improved administrative efficiency by ~60% and reduced paper usage by ~90%",
      "Supports single- and double-elimination brackets with alternating match selection and points-based scoring",
    ],
    files: {
      webm: "/media/tournament/tournament.webm",
      gif: "/media/tournament/tournament.gif",
      poster: "/media/tournament/poster.jpg",
      posterAlt: "Karate Tournament Bracket poster",
      videoAlt: "Browsing the Karate Tournament Bracket",
    },
    links: {
      code: "https://github.com/avinys/Tournament-bracket/tree/v1-archived",
      url: undefined,
    },
  },

  {
    slug: "portfolio",
    title: "Portfolio-OS (this website)",
    summary:
      "Simplified desktop OS-style portfolio website built with Next.js and Tailwind CSS.",
    stack: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
    highlights: [
      "Draggable, resizable app windows and custom dock navigation",
      "Interactive terminal built with XTerm.js, supporting commands, history, and window controls",
      "Dark/light theme toggle and lite mode for reduced resource usage",
      "Deployed as a static Next.js export on an Ubuntu server",
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
      "Luxury cabin administration system for managing cabin information, checking in guests, and configuring booking settings. Built during a React course.",
    stack: [
      "React",
      "TanStack Query",
      "Styled components",
      "React Router",
      "React Hook Form",
    ],
    highlights: [
      "Supabase authentication and authorization",
      "Full CRUD for cabins, bookings, and guests",
      "Reusable styled components, React Hot Toast notifications, and form validation with React Hook Form",
      "Dashboard with KPIs and Recharts visualizations, with TanStack Query caching",
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
      "Luxury cabin website where guests can view cabins and create, update, and manage bookings through a personal account area. Built during a React course.",
    stack: [
      "React",
      "Next.js",
      "TanStack Query",
      "Tailwind CSS",
      "NextAuth v5",
      "React Day Picker",
    ],
    highlights: [
      "Google Sign-In integration with NextAuth v5",
      "Supabase integration for guests, cabins, and bookings with server actions",
      "Interactive date range picker with booked-date blackout, capacity checks, and price calculation",
      "Guest area for viewing and editing reservations and updating profile information",
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
      "Chatbot-style AI assistant that helps students navigate complex university websites. Built for a university project using web scraping, semantic search (SentenceTransformer MiniLM-L6-V2), and Google Gemini 2.0 Flash.",
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
      "RAG pipeline: scraping, text chunking, MiniLM-L6-V2 embeddings, semantic search, and Gemini 2.0 Flash answers",
      "Understands student intent through keyword similarity to minimize Gemini workload and provides links to relevant pages",
      "Lets users select the scraping duration to balance search depth and time based on their preferences",
      "Interactive React interface and FastAPI backend that respect robots.txt and cache search results",
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
