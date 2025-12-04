<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1>Component events - Comunicación hijo-padre</h1>

    <h2>Hola {{ displayName }}</h2>

    <!-- poner el evento creado y la función que se ejecutará cuando el evento pase -->
    <ChildComponent @login="setName"></ChildComponent>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import ChildComponent from './components/ChildComponent.vue';

  const displayName = ref('');

  const setName =  (event) => {
    // al ejecutarse la fucnion, displayName será igual a la información del evento 
    displayName.value = event
  }
</script>
<style scoped> 
 
</style>