import { defineConfig } from "vitepress";

const projectSidebar = {
  text: "Project",
  items: [
    {
      text: "Goal",
      link: "/project/goal",
    },
    {
      text: "Audience",
      link: "/project/audience",
    },
    {
      title: "Lexicon",
      link: "/project/lexicon",
    },
    {
      text: "Team",
      link: "/team",
    },
  ],
};

const loamaSidebar = {
  text: "Loama",
  items: [
    {
      text: "Design",
      link: "/loama/design.md",
    },
    {
      text: "Development",
      link: "/loama/development",
    },
    {
      text: "Feedback & Future suggestions",
      link: "/loama/feedback",
    },
  ],
};

const mockAppSidebar = {};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/doco/",
  title: "Loama",
  description: "The documentation & handover website of the LOAMA project",
  themeConfig: {
    logo: "/loama-logo.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/osoc24" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/open-summer-of-code/posts/?feedView=all",
      },
    ],
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Project",
        items: [
          { text: "Why?", link: "/project/goal" },
          { text: "For who?", link: "/project/audience" },
        ],
      },
      {
        text: "Loama",
        items: [
          { text: "Design", link: "/loama/design.md" },
          { text: "Development", link: "/loama/development" },
          { text: "Feedback", link: "/loama/feedback" },
        ],
      },
      {
        text: "Mock Apps",
        items: [
          { text: "MockBook", link: "/toco/mockbook/index" },
          { text: "Doctorapp", link: "/toco/doctorapp/index" },
        ],
      },
    ],

    sidebar: {
      "/project": [
        projectSidebar,
        {
          ...loamaSidebar,
          collapsed: true,
        },
      ],
      "/loama": [
        {
          ...projectSidebar,
          collapsed: true,
        },
        loamaSidebar,
      ],
      "/toco": [
        {
          ...projectSidebar,
          collapsed: true,
        },
        {
          ...loamaSidebar,
          collapsed: true,
        },
      ],
    },
  },
});
