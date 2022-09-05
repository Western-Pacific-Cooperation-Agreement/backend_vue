import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from './axios'
import 'element-ui/lib/theme-chalk/index.css'

import AMap from 'vue-amap';
import * as Echarts from 'echarts'
Vue.prototype.$echarts = Echarts

Vue.prototype.$axios=axios
//mockjs模拟数据请求
//require("./mock.js")

Vue.use(AMap);
 
  // 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '你的key',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
