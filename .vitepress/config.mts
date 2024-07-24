import { defineConfig } from 'vitepress'

const projectSidebar = {
  text: "Project", items: [
    {
      text: 'Branding',
      link: '/project/brand'
    },
    {
      text: 'Audience',
      link: '/project/audience'
    }
  ]
};

const loamaSidebar = {
  text: 'Loama',
  items: [
    {
      text: 'Design',
      link: '/loama/design.md'
    },
    {
      text: 'Development',
      link: '/loama/development'
    },
    {
      text: 'Current Limitations',
      link: '/loama/limitations'
    },
    {
      text: 'Feedback & Future suggestions',
      link: '/loama/feedback'
    }
  ]
};

const mockAppSidebar = {
  text: 'Mock Apps',
  items: [
    {
      text: 'Mockbook',
      link: '/toco/mockbook/index'

    },
    {
      text: 'Doctorapp',
      link: '/toco/doctorapp/index',
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/doco/",
  title: "Loama",
  description: "The documentation & handover website of the LOAMA project",
  themeConfig: {
    logo: '/loama-logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/osoc24' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/open-summer-of-code/posts/?feedView=all' },
    ],
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: "/getting-started" },
      {
        text: 'Loama', link: "/loama/index.md"},
      {
        text: "Mock Apps", items: [
          { text: "MockBook", link: "/toco/mockbook/index" },
          { text: "Docterapp", link: "/toco/doctorapp/index" }
        ]
      }
    ],

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          link: "/getting-started"
        },
        {
          text: "Lexicon",
          link: "/lexicon"
        },
        {
          ...projectSidebar,
          collapsed: true
        },
        {
          ...loamaSidebar,
          collapsed: true
        },
        {
          ...mockAppSidebar,
          collapsed: true
        },
        { text: "Team", link: "/team" },
      ],
      '/project': [
        {
          text: "Getting Started",
          link: "/getting-started"
        },
        {
          text: "Lexicon",
          link: "/lexicon"
        },
        projectSidebar,
        {
          ...loamaSidebar,
          collapsed: true
        },
        {
          ...mockAppSidebar,
          collapsed: true
        },
        { text: "Team", link: "/team" },
      ],
      '/loama': [
        {
          text: "Getting Started",
          link: "/getting-started"
        },
        {
          text: "Lexicon",
          link: "/lexicon"
        },
        {
          ...projectSidebar,
          collapsed: true
        },
        loamaSidebar,
        {
          ...mockAppSidebar,
          collapsed: true
        },
        { text: "Team", link: "/team" },
      ],
      '/toco': [
        {
          text: "Getting Started",
          link: "/getting-started"
        },
        {
          text: "Lexicon",
          link: "/lexicon"
        },
        {
          ...projectSidebar,
          collapsed: true
        },
        {
          ...loamaSidebar,
          collapsed: true
        },
        mockAppSidebar,
        { text: "Team", link: "/team" },
      ]
    },
  }
})
