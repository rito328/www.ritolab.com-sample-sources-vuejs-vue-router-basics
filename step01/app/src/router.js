import Vue from 'vue'
import Router from 'vue-router'
// コンポーネントを読み込む
import Home from './views/Home.vue'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',      // このパスにアクセスしたら
      name: 'home',
      component: Home // このコンポーネントを呼ぶ
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
  ]
})
