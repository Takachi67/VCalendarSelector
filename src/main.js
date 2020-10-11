import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(VCalendar, {
  componentPrefix: 'vc',
  theme: {
    navHeaderArrows: 'hidden'
  }
})

export const store = new Vuex.Store({
  state: {
    dates: []
  }
})

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
