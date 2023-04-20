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

// import the styles 
import 'vue-good-table-next/dist/vue-good-table-next.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)
app.use(VueGoodTablePlugin);
app.use(VueGoodTablePlugin2);

app.mount('#app')
