import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'primevue/resources/themes/saga-blue/theme.css'; // Escolha o tema desejado
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';




createApp(App).use(router).mount('#app')
