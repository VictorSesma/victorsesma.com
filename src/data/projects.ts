export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
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
    description:
      "Constrained assistant grounded in site content (RAG) with human-in-the-loop patterns to reduce hallucinations.",
    image: "/projects/alicanteabout-chatbot.webp",
    primaryLink: { label: "Case study", href: "https://alicanteabout.com" },
    secondaryLinks: [
      { label: "Live site", href: "https://alicanteabout.com" },
      { label: "Repo", href: "https://github.com/VictorSesma/wptheme" }
    ],
    tags: ["AI Systems", "Architecture"],
    status: "concept",
  },
];
