import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.Office.onReady(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});