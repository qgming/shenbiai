import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "神笔写作",
  description: "智能化AI网文创作平台",
  base: '/',
  srcDir: './docs',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  
  // 主题色配置
  appearance: true,
  
  themeConfig: {
    logo: '/logo.png',
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '神笔写作', link: '/software/' },
      { text: '神笔AI', link: '/ai/' },
      { text: '更新日志', link: '/changelog/' }
    ],

    sidebar: {
      '/software/': [
        {
          text: '神笔写作',
          items: [
            { text: '软件安装', link: '/software/#软件安装' },
            { text: '基本功能', link: '/software/#基本功能' },
            { text: '高级功能', link: '/software/#高级功能' },
            { text: '常见问题', link: '/software/#常见问题' }
          ]
        }
      ],
      '/ai/': [
        {
          text: '神笔AI',
          items: [
            { text: 'API概述', link: '/ai/#api概述' },
            { text: '快速开始', link: '/ai/#快速开始' },
            { text: 'API文档', link: '/ai/#api文档' },
            { text: '使用示例', link: '/ai/#使用示例' },
            { text: '常见问题', link: '/ai/#常见问题' }
          ]
        }
      ],
      '/changelog/': [
        {
          text: '更新日志',
          items: [
            { text: '最新版本', link: '/changelog/#最新版本' },
            { text: '历史版本', link: '/changelog/#历史版本' },
            { text: '版本规划', link: '/changelog/#版本规划' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qgming/shenbiai' }
    ],

    outline: {
      level: 'deep',
      label: '本页目录'
    },

    footer: {
    message: '神笔写作 - 让创作更简单',
    copyright: 'Copyright © 2025 QGMING'
  }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
