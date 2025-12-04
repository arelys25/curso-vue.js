<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1>Props | Comunicacion Padre-hijo</h1>

    <!-- se coloca la variable que se definió que se exportaría en el hijo y se le coloca el valor deseado -->
    <ChildComponent :msg="text" :people="person"></ChildComponent>
    <ChildComponent msg="Otro mensaje"></ChildComponent>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import ChildComponent from './components/ChildComponent.vue';

  const text ='Info desde una variable en el padre'

  const person = {
    sex: 'Mujer',
    age: 20
  }
</script>
<style scoped> 
 
</style>