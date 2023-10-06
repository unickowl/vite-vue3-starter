import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh_tw from './locales/zh_tw.json'

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en,
    zh_tw
  }
})

export default i18n
