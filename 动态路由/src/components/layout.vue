<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DEFAULT_LAYOUT from '@/components/layout.vue'


const router = useRouter()

// 服务器路由数据
const server_route = ref([])
const needAddRoutes = ref(true)
const addRoute = async () => {
  // 如果本地没有路由信息，就从服务器获取
  if (!server_route.value.length) {
    // 真实情况需要从服务器获取路由信息，保存到本地
    const { default: routes = [] } = await import('@/router/server_route')
    server_route.value = routes
  }

  // 把路由表的component字段转成真实的路由
  server_route.value.map((_route) => {
    if (_route.component === 'DEFAULT_LAYOUT') {
      // 设置布局组件，可以为项目设置多个布局，服务器只需要修改这里，前端就能显示多种布局了
      _route.component = DEFAULT_LAYOUT
    }
    const children = _route.children
    // 根据字符串动态导入路由组件
    if (Array.isArray(children) && children?.length > 0) {
      children.map((childRoute) => {
        const path = childRoute.component.split('/')
        // 用vite提供的动态导入功能，根据字符串从views目录下导入组件
        // 参考：https://cn.vitejs.dev/guide/features.html#dynamic-import
        if (path.length === 1) {
          // 如果是单个vue文件
          childRoute.component = () => import(`@/views/${path}.vue`)
        } else {
          // 否则就是一个目录
          childRoute.component = () => import(`@/views/${path[0]}/${path[1]}.vue`)
        }
      })
    }
  })

  // 排序
  server_route.value.sort((a, b) => (a?.meta?.order ?? 0) - (b?.meta?.order ?? 0))

  // 循环添加路由
  server_route.value.map((route) => router.addRoute(route))
}
const login = async () => {
  await addRoute()
  needAddRoutes.value = false
  console.log('获取到的路由', server_route.value)
}
</script>

<template>
  <div>
    <nav>
      <h1>菜单栏</h1>

      <div style="display: flex; gap: 50px; align-items: flex-end;">
        <template v-for="menu in server_route">
          <!--        显示多级菜单-->
          <div v-if="!menu.meta.single">
            <h5>{{ menu.meta.menuName }}</h5>
            <button
                v-for="child in menu.children"
                @click="router.push({name: child.name})">
              {{ child.meta.menuName }}
            </button>
          </div>

          <!--        只显示一级菜单-->
          <div v-else>
            <button @click="router.push({name: menu.children[0].name})">{{ menu.children[0].meta.menuName }}</button>
          </div>
        </template>
      </div>
    </nav>

    <hr>
    <button v-show="needAddRoutes" @click="login">模拟登录获取路由</button>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
main > :first-child {
  font-size: 30px;
  font-weight: 600;
}
</style>