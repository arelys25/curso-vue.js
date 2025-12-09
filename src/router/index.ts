import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import CreateMovie from "../views/CreateMovie.vue";

// necesario para hacer las rutas
// necesita un objeto de propiedades (history y routes)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // una ruta es un  objeto con propiedades
        {
            path: '/', // ruta como tal 
            name: 'home', // nombre de la ruta
            component: Home // componente que queremos que se renderice
        },
        {
            path: '/movies', // ruta como tal 
            name: 'movies', // nombre de la ruta
            component: Movies // componente que queremos que se renderice
        },
        {
            path: '/create', // ruta como tal 
            name: 'create', // nombre de la ruta
            component: CreateMovie // componente que queremos que se renderice
        },
    
    ]
})

export default router;