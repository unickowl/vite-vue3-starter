<script setup lang="ts">
useHead({
  title: 'My awesome site | About'
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="hover:bg-blue-200 transition-all">This is directives working.</p>
    <i class="i-mdi-ab-testing"></i>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    @apply gap-4;
  }
}

p {
  @apply border-dashed border-4 border-red-500 p-10;
}
</style>
