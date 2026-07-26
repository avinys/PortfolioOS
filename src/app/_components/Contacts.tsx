import { Github, Linkedin, Mail } from "lucide-react";
import { contacts } from "@/content/portfolio";

const icons = {
  email: <Mail size={18} />,
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
};

export default function Contacts() {
  return (
    <div className="px-6 py-4">
      <ul className="flex grid-cols-1 flex-col flex-wrap items-center justify-center gap-3">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            href={contact.href}
            value={contact.value}
            icon={icons[contact.id]}
            label={contact.label}
          />
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  href,
  value,
  icon,
  label,
}: {
  href: string;
  value: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith("https://") ? "_blank" : undefined}
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
            title={value}
          >
            {value}
          </span>
        </span>
      </a>
    </li>
  );
}
