<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
   <!-- AGregar el componente del header con el titulo y lo importamos  -->
   <HeaderComponent></HeaderComponent>

   <div class="father">

     <h1>Forms</h1>

     <!-- submit es el evento de enviar el formulario. Cuando se envie el formulario se mandará a llamar la función handleSubmit -->
      <!-- .prevent sirve para prevenir el comportamiento por defecto de enviar (que se recargue y borre todo el formulario al enviar) -->
     <form class="form" @submit.prevent="handleSubmit">
      <label for="title">Title: </label>
      <input v-model="movie.title" type="text" id="title">
      
      <label for="duration">Duration: </label>
      <input v-model="movie.duration" type="number" id="duration">

      <label for="director">Director: </label>
      <input v-model="movie.director" type="text" id="director">

      <button>Enviar</button>

     </form>

   </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';

  // rective es lo mismo que rev solo que reactive se usa para objetos
  const movie = reactive({
    title:'',
    duration: 0,
    director:''
  });

  const handleSubmit = () => {
    // hacer validaciones || = or, ! = si no existe...
    if (!movie.title || !movie.duration || !movie.director){
      alert('Rellena todos los campos por favor');
      return; // que se salga de la funcion si no se llena el formulario correctamente
    }
    console.log(movie)
  }

</script>

<style scoped> 
 .father {
  text-align: center;
  /* align-items aquí no funciona si no es display: flex, puedes quitarlo */
 }

 .form {
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  
  width: 100%;           /* Ocupa el espacio disponible... */
  max-width: 400px;      /* ...pero detente al llegar a 400px */
  margin: 0 auto;        /* Centra el formulario horizontalmente */
  padding: 20px;         /* Un poco de espacio interno opcional */
 }

</style>