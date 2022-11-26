<template>
  <ul class="nav">
    <li><router-link to="/kg">开关</router-link></li>
    <li><router-link to="/lbt">轮播图</router-link></li>
    <li><router-link to="/fpq">翻牌器</router-link></li>
  </ul>

  <router-view />
</template>

<script setup>

</script>

<style scoped lang="less">
ul.nav {
  display: grid;
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(50px, auto));
  justify-items: center;

  li {
    padding: 5px;
  }
}
</style>