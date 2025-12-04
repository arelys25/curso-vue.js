<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1 class="title">Hola a todos</h1>

    <!-- para agregar un evento a algo, se pone el @ y en las comillas haremos referencia a la función  -->
    <h2 @click="addOne">{{ number }}</h2> <!-- Importar variable del script (no es reactiva)-->
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  console.log('Hola')
  let number = ref(0); // hacer que una variable sea reactiva con la funcion ref (se importa). Lo que está entre paréntesis es el valor inicial 

  // funcion que servirá para aumentar el valor de la variable al darle click
  const addOne = () => {
    number.value ++
  }

</script>
<!-- scoped ayuda a que los estilos generados solo se apliquen al componente  -->
<style scoped> 
  .title {
    background-color: blue;
    color: wheat;
  }
</style>