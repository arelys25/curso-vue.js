// npm i pinia
// Pinia sirve para acceder a metodos y variables de todos los componentes de la aplicacion

// dependencia de pinia que ayuda a que los datos que se vayan actualizando, persistan en local como si hubiera una base de datos
// npm install pinia-plugin-persistedstate
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// decirle al proyecto que usaremos pinia
const pinia = createPinia();

// hacer uso de las dependencias
pinia.use(piniaPluginPersistedstate)

// decirle que queremos usar el router. Se pone antes del mount para que lo detecte antes de cargar la aplicacion
// se añade la variable pinia 
createApp(App).use(router).use(pinia).mount('#app')

