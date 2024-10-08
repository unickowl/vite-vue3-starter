<script setup lang="ts">
import request from '@/http'

useHead({
  title: 'My awesome site | About'
})

const userInfo = ref<any>(null)
function fetchUserInfo () {
  request.get('https://randomuser.me/api/').then((res) => {
    userInfo.value = res.data.results[0]
  })
}
fetchUserInfo()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="directive-test">This is directives working.</p>
    <i class="i-mdi-ab-testing"></i>

    <hr>

    <h2>Fetch user: </h2>
    <div v-if="userInfo" class="user p-4 flex items-center gap-4">
      <img :src="userInfo.picture.thumbnail" alt="">
      <p>{{ userInfo.name.first }} {{ userInfo.name.last }}</p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @apply gap-4;
  }
}

.directive-test {
  @apply border-dashed border-4 border-red-500 p-10 hover:bg-blue-200 transition-all;
}
</style>
