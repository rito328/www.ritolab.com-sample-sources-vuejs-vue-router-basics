import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'

Vue.use(VueHead)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  head: {
    meta: [
      {name: 'description', content: 'デフォルトのdescriptionです。'},
      {name: 'robots', content: 'noindex,nofollow'}
    ],
  }
}).$mount('#app')
