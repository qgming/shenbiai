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
  lastUpdated: true,
  
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
            { text: '产品简介', link: '/software/introduction#产品简介' },
            { text: '核心特性', link: '/software/introduction#核心特性' },
            { text: '软件特色', link: '/software/introduction#软件特色' }
          ]
        },
        {
          text: '基础配置',
          items: [
            { text: '软件安装', link: '/software/basic-config#软件安装' },
            { text: '配置供应商', link: '/software/basic-config#配置供应商' },
            { text: '配置功能模型', link: '/software/basic-config#配置功能模型' },
            { text: '常见问题', link: '/software/basic-config#常见问题' }
          ]
        },
        {
          text: '写作教程',
          items: [
            { text: '书籍管理', link: '/software/tutorial#书籍管理' },
            { text: '写作界面', link: '/software/tutorial#写作界面' },
            { text: '写作流程', link: '/software/tutorial#写作流程' },
            { text: '常见问题', link: '/software/tutorial#常见问题' }
          ]
        },
         {
          text: '更多内容',
          items: [
            { text: '提示词管理', link: '/software/soft-tool#提示词管理' },
            { text: '应用中心', link: '/software/soft-tool#应用中心' },
            { text: '用量统计', link: '/software/soft-tool#用量统计' },
            { text: '数据设置', link: '/software/soft-tool#数据设置' },
            { text: '软件更新', link: '/software/soft-tool#软件更新' }
          ]
        }
      ],
      '/ai/': [
        {
          text: '什么是神笔 AI',
          items: [
            { text: '产品简介', link: '/ai/introduction#产品简介' },
            { text: '核心优势', link: '/ai/introduction#核心优势' },
            { text: '主要特点', link: '/ai/introduction#主要特点' },
            { text: '模型价格', link: '/ai/introduction#模型价格' },
            { text: '适用场景', link: '/ai/introduction#适用场景' }
          ]
        },
        {
          text: '使用教程',
          items: [
            { text: '快速开始', link: '/ai/tutorial#快速开始' },
            { text: 'API 文档', link: '/ai/tutorial#API 文档' },
            { text: '使用示例', link: '/ai/tutorial#使用示例' },
            { text: '常见问题', link: '/ai/tutorial#常见问题' }
          ]
        }
      ],
      '/changelog/': [
        {
          text: '更新日志',
          items: [
            { text: '最新版本', link: '/changelog/#最新版本' },
            { text: '历史版本', link: '/changelog/#历史版本' },
            { text: '常见问题', link: '/changelog/#常见问题' }
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
