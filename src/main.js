import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

const moment = require('moment')

Vue.use(require('vue-moment'), {
  moment
})

Vue.config.productionTip = false
Vue.prototype.$theme = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
