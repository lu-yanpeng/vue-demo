<template>
  <div>用户数据</div>
  <ul>
    <li v-for="user in userList">{{ user }}</li>
  </ul>
</template>

<script setup>
defineProps(['userList'])

</script>

<style scoped>

</style>