<template>
  <div>
      <div>
          <p>列表</p>
          <ul>
              <li @click="$router.push({name: 'index'})">基础</li>
              <li @click="$router.push({name: 'detail'})">详情</li>
              <li @click="$router.push({name: 'about'})">关于</li>
          </ul>
      </div>

      <router-view />
  </div>
</template>
