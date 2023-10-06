<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalStorage, useMouse } from '@vueuse/core'

defineProps<{
  msg: string
}>()

const { t, locale } = useI18n()
const storeLocale = useLocalStorage(import.meta.env.VITE_APP_LOCALE_KEY, 'en')
function handleLocaleChange(lang: string) {
  locale.value = lang
  storeLocale.value = lang
}

const { x, y } = useMouse()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p>{{ t('hello') }}</p>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <div class="border-solid my-4 p-4 text-center">
      Mouse: {{ x }}, {{ y }}
    </div>
    <div class="flex gap-4 my-4">
      <button @click="handleLocaleChange('en')">En</button>
      <button @click="handleLocaleChange('zh_tw')">zhTW</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
