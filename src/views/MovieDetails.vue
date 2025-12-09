<template>
    <div>
        <HeaderComponent/>

        <h2 v-if="!movie">La pelicula no existe</h2>
        <div v-else>
            <h2>Title: {{ movie.title }}</h2>
            <h3>Duration: {{ movie.duration }} minutos</h3>
            <h3>Director: {{ movie.director }}</h3>

        </div>

        <h2>
            <!-- Hacer que el usuario vea los detalles de la pelicula al darle click al titulo -->
            <!-- Params sirve para poner objetos, en este caso ponemos el nombre de la variable que irá en la ruta -->
            <router-link :to="{name: 'movieDetails', params: {movieTitle: 'Interstellar'}}">
                Interstellar
            </router-link>
            </h2>

    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useMovieStore } from '../stores/MovieStore';
import { watch } from 'vue';

    // constante que nos da toda la información de ruta que podremos necesitar
    const route = useRoute();

    const movieStore = useMovieStore();

    // en esta dirección se encontrará el valor de movieTitle para la barra de navegacion 
    console.log(route.params.movieTitle);

    let movieTitle = route.params.movieTitle;
    let movie = movieStore.getMovie(movieTitle);

    // vigilar la variable para deteccion de cambios 
    watch(
        () => route.params.movieTitle,
        // lo que se ejecutará cuando la variable se modifique
        () => {
            // actualizar valores
            movieTitle = route.params.movieTitle;
            movie = movieStore.getMovie(movieTitle);
        }
    )

</script>

<style scoped>

</style>