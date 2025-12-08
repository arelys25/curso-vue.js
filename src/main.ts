import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// decirle que queremos usar el router. Se pone antes del mount para que lo detecte antes de cargar la aplicacion
createApp(App).use(router).mount('#app')

