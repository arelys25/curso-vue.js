<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1 class="title">Hola a todos</h1>

    <!-- hacer que el id se obtenga de una variable con v-bind -->
    <h2 v-bind:id="myId">Soy Arely</h2> 

    <!-- forma abreviada de hacer v-bind ':' -->
    <h2 :id="myId2">Soy otra Arely</h2> 

    <!-- otra forma de usar v-bind, para obtener el value de una variable  -->
    <input type="text" :value="myValue">

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';

  const myId = 'patata';
  const myId2 = 'pepino';
  const myValue = ref("Escribe algo chido")



</script>
<!-- scoped ayuda a que los estilos generados solo se apliquen al componente  -->
<style scoped> 
  .title {
    background-color: blue;
    color: wheat;
  }
</style>