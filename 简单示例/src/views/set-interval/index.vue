<template>
  <div>{{ time }}</div>
</template>

<script setup>
import {ref, onActivated, onDeactivated} from 'vue'
import dayjs from "dayjs";

const timer = ref(0)
const time = ref('')

onActivated(() => {
  console.log('激活')
  timer.value = setInterval(() => {
    console.log('定时器')
    time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
  }, 1000)
})
onDeactivated(() => {
  console.log('失活')
  clearInterval(timer.value)
})
</script>

<style scoped>

</style>