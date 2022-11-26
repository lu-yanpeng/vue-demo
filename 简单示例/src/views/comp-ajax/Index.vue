<template>
  <div>请求：https://api.github.com/users?since=100&per_page=10</div>
  <Child :user-list="data"></Child>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import Child from './Child.vue'

const data = ref([])
onMounted(async() => {
  const response = await fetch('https://api.github.com/users?since=100&per_page=10')
  if (response.ok) {
    data.value = await response.json()
    return
  }
  console.log('请求失败')
})
</script>

<style scoped>

</style>