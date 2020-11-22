import Vue from 'vue'
import App from './App.vue'

import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'

import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';

dayjs.extend(dayOfYear);

Vue.use(Tooltip);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
