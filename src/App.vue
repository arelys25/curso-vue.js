<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1 class="title">Hola a todos</h1>
    <h2>{{ number }}</h2> <!-- Importar variable del script (no es reactiva)-->
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  console.log('Hola')
  let number = ref(0); // hacer que una variable sea reactiva con la funcion ref (se importa). Lo que está entre paréntesis es el valor inicial 

  // funcion que se ejecutará cada ciertos segundos 
  setInterval(() => {
    number.value ++; // se usa .value para utilizar el valor en el paréntesis de la función ref
  }, 1000);

</script>
<!-- scoped ayuda a que los estilos generados solo se apliquen al componente  -->
<style scoped> 
  .title {
    background-color: blue;
    color: wheat;
  }
</style>