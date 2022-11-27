<template>
  <Child :flag="data"></Child>
</template>

<script setup>
import Child from './Child.vue'
import {ref} from "vue";

const data = ref([false])
// 异步获取数据后，子组件也会响应父组件数据的变化
setTimeout(() => data.value[0] = true, 1500)
</script>

<style scoped>

</style>