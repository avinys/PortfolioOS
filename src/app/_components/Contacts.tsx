import { Github, Linkedin, Mail } from "lucide-react";

export default function Contacts() {
	return (
		<div className="px-6 py-4">
			<ul className="flex flex-col flex-wrap justify-center items-center gap-3 grid-cols-1">
				<ContactItem
					url="me@arvydasvingis.com"
					icon={<Mail size={18} />}
					label="Email"
				/>
				<ContactItem
					url="https://github.com/avinys"
					icon={<Github size={18} />}
					label="GitHub"
				/>
				<ContactItem
					url="https://www.linkedin.com/in/arvydasvingis"
					icon={<Linkedin size={18} />}
					label="LinkedIn"
				/>
			</ul>
		</div>
	);
}

function ContactItem({
	url,
	icon,
	label,
}: {
	url: string;
	icon: React.ReactNode;
	label: string;
}) {
	const href = url.startsWith("http") ? url : `mailto:${url}`;

	return (
		<li>
			<a
				href={href}
				target={href.startsWith("http") ? "_blank" : undefined}
				rel="noreferrer"
				aria-label={label}
				className="
          group flex items-center gap-3 rounded-xl
          border border-indigo-200/70 bg-white/70 backdrop-blur-sm
          px-4 py-3 shadow-sm min-w-[340px]
          transition
          hover:shadow-md hover:border-indigo-300
          focus:outline-none focus:ring-2 focus:ring-indigo-400/60
        "
			>
				<span
					className="
            inline-flex h-9 min-w-9 items-center justify-center
            rounded-lg bg-indigo-50 text-indigo-600
            ring-1 ring-inset ring-indigo-200/60
          "
				>
					{icon}
				</span>

				<span className="min-w-0">
					<span className="block text-sm text-slate-500">
						{label}
					</span>
					<span
						className="
              block truncate text-sm text-slate-800
              group-hover:underline decoration-indigo-400/70
            "
						title={url}
					>
						{url}
					</span>
				</span>
			</a>
		</li>
	);
}
