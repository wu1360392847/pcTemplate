/**
 * 这里用于配置vue各种单页面级组件路由地址
 */

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')

export default [
  {
    // 请求路径,这里配置为重定向
    path: '/',
    redirect: '/home',
    meta: {
      // 用于保存需要传递的验证信息等
      isNav: false
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      mainWindow: Home
    },
    meta: {
      isNav: true,
      title: 'Home',
      isAuthRequired: false
    }
  },
  {
    path: '/about',
    name: 'about',
    components: {
      mainWindow: About
    },
    meta: {
      isNav: true,
      title: 'About',
      isAuthRequired: false
    }
  }
]
