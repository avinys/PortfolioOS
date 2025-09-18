import { Github, Linkedin, Mail } from "lucide-react";

export default function Contacts() {
  return (
    <div className="px-6 py-4">
      <ul className="flex grid-cols-1 flex-col flex-wrap items-center justify-center gap-3">
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
        className="group bg-surface border-accent-200/70 hover:border-accent-300 focus:ring-accent-400/60 flex min-w-[340px] items-center gap-3 rounded-xl border px-4 py-3 shadow-sm backdrop-blur-sm transition hover:shadow-md focus:ring-2 focus:outline-none"
      >
        <span className="bg-accent-50 text-accent-600 ring-accent inline-flex h-9 min-w-9 items-center justify-center rounded-lg ring-1 ring-inset">
          {icon}
        </span>

        <span className="min-w-0">
          <span className="block text-sm text-slate-500">{label}</span>
          <span
            className="text-foreground decoration-accent-400/70 block truncate text-sm group-hover:underline"
            title={url}
          >
            {url}
          </span>
        </span>
      </a>
    </li>
  );
}
