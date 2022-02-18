import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')