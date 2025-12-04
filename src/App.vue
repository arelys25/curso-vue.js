<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1>Directiva V-If</h1>

    <!-- V-If hará que solo se muestre si la funcion se cumple. Se puede usar con booleanos o con cadenas o numeros (si está vacía es false) -->
    <h2 v-if="condition">La condición se cumple</h2>

    <h2 v-else-if="condition2">Condición 2</h2>

    <!-- se cumple si las de arriba no se cumplen  -->
    <h2 v-else>NO se cumplen las condiciones</h2>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';

  const condition = false;
  const condition2 = false;


</script>
<!-- scoped ayuda a que los estilos generados solo se apliquen al componente  -->
<style scoped> 

</style>