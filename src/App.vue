<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1>Renderizado de listas | v-for</h1>
    <div>
      <!-- crear un p por cada elemento que haya en la lista, para no hacerlos de uno por uno. Se usará un For -->
       <!-- se le tiene que asignar una variable que almacenará el valor (movie), decir de dónde sacará la información (lista movies) y crear una llave unica (movie) -->
        <!-- para asignarle un index (como un contador o indice) se pondrá entre paréntesis  -->
      <p v-for="(movie, index) in movies" :key="movie">{{index + 1}} - {{ movie }}</p>
    </div>


  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';

  const movies = ['El libro de la vida','Naruto The Last','Superman','Harry Potter']
</script>
<!-- scoped ayuda a que los estilos generados solo se apliquen al componente  -->
<style scoped> 

</style>