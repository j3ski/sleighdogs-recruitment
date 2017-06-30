import Vue from 'vue'
import App from './App'

import * as globalComponents from './components/global'

Vue.config.productionTip = false

Object.keys(globalComponents).forEach(name => {
  Vue.component(globalComponents[name].name, globalComponents[name])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
