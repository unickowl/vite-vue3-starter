<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

useHead({
  title: '~~ My awesome site ~~ | Home'
})
</script>

<template>
  <main>
    <TheWelcome />
    <h1 class="bg-red p-[20px] flex items-center gap-6 justify-center transition-all hover:gap-12">
      <span>UNO works</span>

      <i class="i-mdi-bus-alert bg-white"></i>
    </h1>
  </main>
</template>
