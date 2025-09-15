export type Project = {
	slug: string;
	title: string;
	summary: string;
	stack: string[];
	highlights: string[];
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
		links: {
			code: "https://github.com/avinys/TimeTrackerUI",
			url: "https://timetracker.arvydasvingis.com",
		},
	},
];
