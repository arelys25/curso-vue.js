<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
   <!-- AGregar el componente del header con el titulo y lo importamos  -->
  <HeaderComponent></HeaderComponent>

  <div class="father">
    <h1>Slots</h1>

    <h2>Este es el componente padre</h2>

    <ChildComponent>
      <!-- este contenido solo se mostrará si hay un slot en el componenente hijo  -->
      <h3>Contenido desde el componente padre como slot</h3>
    </ChildComponent>

    <ChildComponent>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <p>Lorem, ipsum dolor.</p>
    </ChildComponent>

    <ChildComponent></ChildComponent>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import ChildComponent from './components/ChildComponent.vue';


</script>
<style scoped> 
 .father{
  align-items: center;
  text-align: center;
 }

</style>