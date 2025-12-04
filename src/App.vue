<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>

    <!-- si la variable myCondition es verdadera, el texto tomará la clase highlight, si es falsa, tomará la clase red -->
    <h1 :class="myCondition ? 'highlight' : 'red'">Hola a todos</h1>

    <!-- poner más condiciones para más clases  -->
    <h2 :class="{highlight: myCondition, red: true}">Soy Arely</h2>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';

  let myCondition = true;


</script>
<!-- scoped ayuda a que los estilos generados solo se apliquen al componente  -->
<style scoped> 

  .highlight {
    background-color: black;
    color: yellow;
  }

  .red {
    color: red;
  }
</style>