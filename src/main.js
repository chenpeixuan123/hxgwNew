import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Config from './assets/js/common'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import animate from 'animate.css'

Vue.use(animate);

Vue.config.productionTip = false
Vue.prototype.$Config=Config;
Vue.use(ElementUI);

const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

