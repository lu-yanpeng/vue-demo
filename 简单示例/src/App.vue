<template>
  <ul class="nav">
    <li><router-link to="/kg">开关</router-link></li>
    <li><router-link to="/lbt">轮播图</router-link></li>
    <li><router-link to="/fpq">翻牌器</router-link></li>
    <li><router-link to="/ajax">ajax请求</router-link></li>
    <li><router-link to="/setTimeout">延时调用</router-link></li>
    <li><router-link to="/setInterval">定时器</router-link></li>
  </ul>

  <router-view v-slot="{ Component }">
    <keep-alive :max="10">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script setup>

</script>

<style scoped lang="less">
ul.nav {
  display: grid;
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  justify-items: center;

  li {
    padding: 5px;
  }
}
</style>