<script setup lang="ts">
import { Helmet } from 'vite-ssr/components'
</script>

<template>
  <Helmet>
    <title>Vitesse SSR</title>
    <meta name="description" content="Opinionated Vite Starter Template" />
  </Helmet>
  <router-view />
</template>
