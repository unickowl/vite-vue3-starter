// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetUno
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetIcons()
  ],
  transformers: [
    transformerDirectives()
  ]
})
