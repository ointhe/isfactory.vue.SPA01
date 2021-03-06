// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import './plugins/vuetify';
import './plugins/Axios';
import './plugins/timeline';
import './plugins/GoogleMap';

import '@mdi/font/css/materialdesignicons.min.css'
import 'es6-promise/auto'

Vue.config.productionTip = false;
Vue.prototype.$EventBus = new Vue();
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    // components: { App },
    // template: '<App/>',
    render: h => h(App)
}).$mount('#app')