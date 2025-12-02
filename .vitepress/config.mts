import { defineConfig } from 'vitepress'

export default defineConfig({
  // 浏览器标签页标题
  title: "Buxiu79",
  description: "陈煜轩的个人博客",

  // 这里的 base 必须和你仓库名保持一致 (/BuXiu790/)
  // 如果你的 GitHub 仓库名就是 BuXiu790.github.io，不需要这一行，删掉即可。
  // 如果仓库名是 BuXiu790，请保留下面这一行：
  base: '/BuXiu790/', 

  themeConfig: {
    // 网站左上角的标题
    siteTitle: 'Buxiu79',

    // 顶部导航栏（去掉了学校链接）
    nav: [
      { text: '首页', link: '/' },
      { text: '我的笔记', link: '/markdown-examples' },
      { text: '关于我', link: '/api-examples' }
    ],

    // 侧边栏目录
    sidebar: [
      {
        text: '文章目录',
        items: [
          { text: 'Markdown 语法示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
    ],

    // 右上角 GitHub 图标链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BuXiu790' }
    ],

    // 页脚版权
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 陈煜轩 (Buxiu79)'
    }
  }
})