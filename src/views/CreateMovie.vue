<template>
  <HeaderComponent />

  <form @submit.prevent="handleSubmit" class="form">
    <label for="title">Title</label>
    <input v-model="movie.title" type="text" id="title" />

    <label for="duration">Duration</label>
    <input v-model="movie.duration" type="number" id="duration" />

    <label for="director">Director</label>
    <input v-model="movie.director" type="text" id="director" />

    <button>Enviar</button>
  </form>
</template>


<script setup>
import { reactive } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/MovieStore";

// usar la variable de la store que contiene todas las variables
const movieStore = useMovieStore();

const movie = reactive({
  title: "",
  duration: 0,
  director: "",
});

const handleSubmit = () => {
  if (!movie.title || !movie.duration || !movie.director) {
    alert("Rellena todos los campos, por favor");
    return;
  }
  
  // hacer que el formulario use la funcion de añadir pelicula 
  movieStore.addMovie(movie);
};
</script>


<style>
.form {
  margin: 20px auto;
  width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>