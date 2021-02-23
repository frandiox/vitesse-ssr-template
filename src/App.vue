<script setup lang="ts">
import { Helmet } from 'vite-ssr/components'

const title = 'Vitesse SSR'
const description = 'Opinionated SSR Vite Starter Template'

const metas = [
  { name: 'description', content: description },
  { name: 'description', content: description },
  { property: 'og:title', content: title },
  {
    property: 'og:image',
    content:
      'https://repository-images.githubusercontent.com/341177866/d42c1300-7633-11eb-84fd-ec68894d4fc9',
  },
]
</script>

<template>
  <Helmet>
    <title>{{ title }}</title>
    <meta v-for="meta in metas" v-bind="meta" />
  </Helmet>
  <router-view />
</template>
