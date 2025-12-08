import { defineStore } from "pinia";
import { ref } from "vue";

// para nombrar una variable exportable en stores se usa 'useComponenteStore
// Parámetro 1: nombre de la store | Parámetro 2: callback
export const useMovieStore = defineStore('movie', ()  => {
    // aqui se colocarán todas las variables con relación a movie que querremos que sean importadas a toda la aplicacion 
    const movies = ref([
        { title: "Inception", duration: "148 min", director: "Christopher Nolan" },
        {
            title: "The Lord of the Rings",
            duration: "201 min",
            director: "Peter Jackson",
        },
        { title: "Interstellar", duration: "169 min", director: "Christopher Nolan" },
    ]);

    // funcion para agregar peliculas 
    const addMovie = (movie: any) => movies.value.push(movie);

    // lo que querramos regresar
    return {
        movies,
        addMovie
    }
})