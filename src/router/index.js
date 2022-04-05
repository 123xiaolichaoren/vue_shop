import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home
}]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  //to将要访问的路径，from从那个路径跳转，next函数，放行
  if (to.path === '/login') return next()
  //获取token
  const tokenstr = window.sessionStorage.getItem('token')
  //如果token不存在，强制跳转login页面
  if (!tokenstr) return next('/login')
  next()

})
export default router