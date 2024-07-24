---
layout: page
---
<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: 'images/friedrich-vandenberghe.jpg',
    name: 'Fredrich Vanderberghe',
    title: 'Student',
    links: [
      { icon: 'github', link: 'https://github.com/Zelzahn' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/friedrich-vandenberghe-97093a228/' },
      { icon: 'mastodon', link: 'https://computerclub.social/@zelzahn' }
    ]
  },
  {
    avatar: 'images/bo-robbrecht.jpg',
    name: 'Bo Robbrecht',
    title: 'Student',
    links: [
      { icon: 'github', link: 'https://github.com/BT-Creator' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/borobbrecht' },
    ]
  },
  {
    avatar: 'images/victor-barra.jpg',
    name: 'Victor Barra',
    title: 'Student',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/VictorBarraa'},
      { icon: 'instagram', link: 'https://www.instagram.com/victor.barra.33/'},
      { icon: 'github', link: 'https://github.com/Vicba' },
      { icon: 'linkedin', link: 'http://linkedin.com/in/victor-barra' },
    ]
  },
  {
    avatar: 'images/christophe-leroy.jpg',
    name: 'Christophe Leroy',
    title: 'Student',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kyngstudio/' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Meet the LOAMA team!
    </template>
    <template #lead>
      The development of LOAMA was created by these brilliant students & coaches:
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Core Team</template>
    <template #members>
      <VPTeamMembers :members="members" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>