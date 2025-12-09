<template>
    <HeaderComponent/>
    <div>
      <h1>Movies</h1>
      <div class="movies">
        <ul>
          <li v-for="movie in movieStore.movies" :key="movie.title" class="movie">
            <h2>
              <!-- Hacer que el usuario vea los detalles de la pelicula al darle click al titulo -->
              <!-- Params sirve para poner objetos, en este caso ponemos el nombre de la variable que irá en la ruta -->
              <router-link :to="{name: 'movieDetails', params: {movieTitle: movie.title}}">
                {{ movie.title }}
              </router-link>
            </h2>
            <p>Duration: {{ movie.duration }} min</p>
            <p>Director: {{ movie.director }}</p>
          </li>
        </ul>
      </div>
    </div>
</template>


<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/MovieStore";

// usar la variable de la store que contiene todas las variables
const movieStore = useMovieStore();


</script>


<style>
.movies {
  margin: 20px auto;
  width: 500px;

  .movie {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>