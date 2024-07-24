import { defineConfig } from 'vitepress'

const projectSidebar = {
  text: "Project", items: [
    {
      text: 'Goal',
      link: '/project/goal'
    },
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
      {
        text: 'Project', items: [
          { text: 'Why?', link: "/project/goal" },
          { text: 'For whom?', link: "/project/audience" },
        ]
      },
      {
        text: 'Loama', items: [
          { text: 'Design', link: '/loama/design.md' },
          { text: 'Development', link: '/loama/development' },
          { text: "Feedback", link: "/loama/feedback" }
        ]
      },
      {
        text: "Mock Apps", items: [
          { text: "MockBook", link: "/toco/mockbook/index" },
          { text: "Docterapp", link: "/toco/doctorapp/index" }
        ]
      }
    ],

    sidebar: {
      "/": [
        { text: "Home", link: "/" },
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
        projectSidebar,
        {
          ...loamaSidebar,
          collapsed: true
        },
        {
          ...mockAppSidebar,
          collapsed: true
        }
      ],
      '/loama': [
        {
          ...projectSidebar,
          collapsed: true
        },
        loamaSidebar,
        {
          ...mockAppSidebar,
          collapsed: true
        }
      ],
      '/toco': [
        {
          ...projectSidebar,
          collapsed: true
        },
        {
          ...loamaSidebar,
          collapsed: true
        },
        mockAppSidebar
      ]
    },
  }
})
