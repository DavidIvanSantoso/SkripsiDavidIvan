import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/components/DocsExample'
import VueGoodTablePlugin from 'vue-good-table';
import VueGoodTablePlugin2 from 'vue-good-table-next';
import Bootstrap from 'bootstrap';
import BootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css';




// import the styles 
import 'vue-good-table-next/dist/vue-good-table-next.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)
app.use(VueGoodTablePlugin);
app.use(VueGoodTablePlugin2);
app.use(Bootstrap);
app.use(BootstrapCSS);



app.mount('#app')
