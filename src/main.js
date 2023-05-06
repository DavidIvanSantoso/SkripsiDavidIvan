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
import VueApexCharts from 'vue3-apexcharts';
import VueGridLayout from 'vue-grid-layout';
import GridLayout from 'vue3-drr-grid-layout';
import Vue3ColorPicker from "vue3-colorpicker";
import Select2 from 'vue3-select2-component';
// import Multiselect from 'vue-multiselect'
import VueMultiselect from 'vue-multiselect'

// import the styles 
import 'vue-good-table-next/dist/vue-good-table-next.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'vue3-drr-grid-layout/dist/style.css'
import "vue3-colorpicker/style.css";
import "vue-multiselect/dist/vue-multiselect.css"


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
app.use(VueApexCharts);
app.use(VueGridLayout);
app.use(GridLayout);
app.use(Vue3ColorPicker);
app.use(Select2);
app.use(VueMultiselect);



app.mount('#app')
