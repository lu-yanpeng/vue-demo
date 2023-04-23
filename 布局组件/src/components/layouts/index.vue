<template>
  <div>
      <header>页头</header>
      <ul class="nav">
          <li @click="$router.push({name: 'home'})">首页</li>
          <li @click="$router.push({name: 'overview'})">概览</li>
          <li @click="$router.push({name: 'about'})">关于</li>
      </ul>
      <router-view />
      <footer>页尾</footer>
  </div>
</template>

<style scoped>
.nav {
    display: flex;
    gap: 5px;
}
</style>