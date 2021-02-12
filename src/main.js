/* emilien <emilien@emilien-pc>, 2021 */

import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import 'image-compare-viewer/dist/image-compare-viewer.min.css';
import './main.css';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app');
