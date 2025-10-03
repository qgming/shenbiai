---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/qgming.png',
    name: 'qgming',
    title: '创始人',
    links: [
      { icon: 'github', link: 'https://github.com/qgming' },
      { icon: 'x', link: 'https://x.com/qgmingx' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/312954339' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamMembers :members />
  <VPTeamPageTitle>
    <template #title>
      关于我
    </template>
    <template #lead>
      独立开发者 · 全心投入每个项目
    </template>
  </VPTeamPageTitle>
</VPTeamPage>
