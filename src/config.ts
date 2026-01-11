export const SITE = {
  website: "https://victorsesma.com",
  author: "Victor Sesma",
  profile: "https://victorsesma.com/about",
  desc: "Backend systems, architecture, and AI-augmented engineering. Notes, case studies, and real-world trade-offs.",
  title: "Victor Sesma",
  ogImage: "og-default.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit this page",
    url: "https://github.com/VictorSesma/victorsesma.com/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/London",
} as const;
