export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  files: {
    webm: string;
    gif: string;
    poster: string;
    posterAlt: string;
    videoAlt: string;
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
];
