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
      <!-- aquí irá todo lo que se pondrá en el slot con name top -->
      <template v-slot:top> 
        <!-- este contenido solo se mostrará si hay un slot en el componenente hijo  -->
        <h3>Contenido para slot Top</h3>
      </template>

      <!-- aquí irá todo lo que se pondrá en el slot con name bottom -->
      <template v-slot:bottom> 
        <!-- este contenido solo se mostrará si hay un slot en el componenente hijo  -->
        <h3>Slot para bottom</h3>
      </template>
    </ChildComponent>

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