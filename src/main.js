import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import "@/styles/global.css"

Vue.config.productionTip = false
let title = "First Bank USSD Portal"
window.document.title = title

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')