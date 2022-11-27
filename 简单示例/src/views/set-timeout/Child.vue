<template>
  <div>这是子组件</div>
  <div class="flag" v-if="flag[0]">根据父组件传的值决定是否渲染</div>
</template>

<script setup>
defineProps(['flag'])
</script>

<style scoped lang="less">
.flag {
  width: min-content;
  height: 50px;
  background-color: #2196F3;
  white-space: nowrap;
}
</style>