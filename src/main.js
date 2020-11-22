import Vue from 'vue'
import App from './App.vue'
import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
