import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh_tw from './locales/zh_tw.json'
import { useLocalStorage } from '@vueuse/core'

const storeLocale = useLocalStorage(import.meta.env.VITE_APP_LOCALE_KEY, 'en')

const i18n = createI18n({
  locale: storeLocale.value,
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en,
    zh_tw
  }
})

export default i18n
