export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt?: string;
  primaryLink: ProjectLink;
  secondaryLinks?: ProjectLink[];
  tags?: string[];
  status?: "concept" | "in-progress" | "live" | "case-study";
};

export const projects: Project[] = [
  {
    slug: "alicanteabout-chatbot",
    title: "AlicanteAbout AI Chatbot",
    href: "https://alicanteabout.com",
    description:
      "Constrained assistant grounded in site content (RAG) with human-in-the-loop patterns to reduce hallucinations.",
    image: "/projects/alicanteabout-chatbot.webp",
    primaryLink: { label: "Case study", href: "/blog/designing-a-tourist-chatbot" },
    secondaryLinks: [{ label: "Repo", href: "https://github.com/VictorSesma/wptheme" }],
    tags: ["AI Systems", "RAG", "Architecture"],
    status: "concept",
  },
];
