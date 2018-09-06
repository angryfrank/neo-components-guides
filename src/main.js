// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/packages/theme-chalk/lib/index.css'
import NeoCpmonents from 'neo-components'
import 'neo-components/lib/dark-forest/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(NeoCpmonents)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
