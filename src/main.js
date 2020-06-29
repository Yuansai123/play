// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
// import vueAudioNative from 'vue-audio-native'
// Vue.use(vueAudioNative)
import ECharts from 'echarts'
// import 'echarts/lib/chart/bar'
// Vue.component('chart', ECharts)
Vue.prototype.$echarts = ECharts;

Vue.use(Element, { size: 'small' })


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
