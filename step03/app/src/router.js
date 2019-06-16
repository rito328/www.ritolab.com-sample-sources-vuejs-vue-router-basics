import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'
import Page3 from './views/Page3.vue'
import NotFound from './views/errors/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home', desc: 'This is Home page.' }
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1,
      meta: { title: 'Page1', desc: 'This is Page1 page.' }
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2,
      meta: { title: 'Page2', desc: 'This is Page2 page.' }
    },
    {
      path: '/page3',
      name: 'page3',
      component: Page3,
      meta: { title: 'Page3', desc: 'This is Page3 page.' }
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
