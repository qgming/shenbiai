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
      { text: '神笔写作', link: '/software/introduction' },
      { text: '神笔AI', link: '/ai/introduction' },
      { text: '更新日志', link: '/changelog/' }
    ],

    sidebar: {
      '/software/': [
        {
          text: '什么是神笔写作',
          items: [
            { text: '产品概述', link: '/software/introduction' }
          ]
        },
        {
          text: '基础配置',
          items: [
            { text: '软件安装与配置', link: '/software/basic-config' }
          ]
        },
        {
          text: '写作教程',
          items: [
            { text: '使用教程', link: '/software/tutorial' }
          ]
        }
      ],
      '/ai/': [
        {
          text: '什么是神笔AI',
          items: [
            { text: '服务介绍', link: '/ai/introduction' }
          ]
        },
        {
          text: '使用教程',
          items: [
            { text: '快速开始', link: '/ai/tutorial' }
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
