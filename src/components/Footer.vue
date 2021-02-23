<script setup lang="ts">
import { watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStorage, usePreferredDark, useToggle } from '@vueuse/core'

const colorSchema = useStorage('color-schema', 'auto')

const preferredDark = usePreferredDark()

const isDark = computed({
  get() {
    return colorSchema.value === 'auto'
      ? preferredDark.value
      : colorSchema.value === 'dark'
  },
  set(v: boolean) {
    if (v === preferredDark.value) colorSchema.value = 'auto'
    else colorSchema.value = v ? 'dark' : 'light'
  },
})

const toggleDark = useToggle(isDark)

watch(
  isDark,
  (v) =>
    typeof document !== 'undefined' &&
    document.documentElement.classList.toggle('dark', v),
  { immediate: true }
)

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <a
      class="icon-btn mx-2"
      :title="t('button.toggle_dark')"
      @click="toggleDark"
    >
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>

    <a
      class="icon-btn mx-2"
      :title="t('button.toggle_langs')"
      @click="toggleLocales"
    >
      <carbon-language />
    </a>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/frandiox/vitesse-ssr-template"
      target="_blank"
      title="GitHub"
    >
      <carbon-logo-github />
    </a>
  </nav>
</template>
