// npm i pinia
// Pinia sirve para acceder a metodos y variables de todos los componentes de la aplicacion
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// decirle al proyecto que usaremos pinia
const pinia = createPinia();


// decirle que queremos usar el router. Se pone antes del mount para que lo detecte antes de cargar la aplicacion
// se añade la variable pinia 
createApp(App).use(router).use(pinia).mount('#app')

