<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1 class="title">Hola a todos</h1>

    <h2>{{ myValue }}</h2> 

    <!-- v-model ayuda a que, cuando se modifique el input, también se modifique el valor de la variable (que sea dinámica) -->
    <input type="text" v-model="myValue">

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';

  const myValue = ref("Escribe algo chido")



</script>
<!-- scoped ayuda a que los estilos generados solo se apliquen al componente  -->
<style scoped> 
  .title {
    background-color: blue;
    color: wheat;
  }

  input {
    font-size: 2em;
  }
</style>