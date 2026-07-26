import { profile } from "@/content/profile";

export default function About() {
  return (
    <div className="text-md text-foreground mx-6 my-4">
      <p className="indent-8">
        I&apos;m Arvydas — a <strong>{profile.headline}</strong>.{" "}
        {profile.introduction}
      </p>
      <ul className="mt-2 list-disc pl-5">
        <li>
          <strong>{profile.education.degree}</strong>,{" "}
          {profile.education.institution}
        </li>
        <li>
          <strong>Professional experience</strong>: core marketplace UI,
          frontend modularization, observability, and metadata interoperability
        </li>
        <li>
          <strong>Stack</strong>: React, Next.js, TypeScript, Node.js, C#/.NET,
          MySQL, Ubuntu + Nginx
        </li>
        <li>
          <strong>Black belt</strong> in Traditional Karate Do — discipline,
          patience, continuous improvement
        </li>
      </ul>

      <p className="mt-3">
        I care about code quality, but even more about the problem the code
        solves. I value practical solutions that help people and enjoy thinking
        about both the technical and user sides of a product.
      </p>
    </div>
  );
}
