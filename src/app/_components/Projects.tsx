import { projects } from "@/content/projects";
import ProjectMedia from "./ProjectMedia";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <ul className="flex h-full flex-col">
      {projects.map((p) => (
        <ProjectItem p={p} key={p.slug} />
      ))}
    </ul>
  );
}

export default Projects;
