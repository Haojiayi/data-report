import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import VCharts from 'v-charts'
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueEcharts)
Vue.component('v-charts', VCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
