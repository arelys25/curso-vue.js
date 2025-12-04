<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
   <!-- AGregar el componente del header con el titulo y lo importamos  -->
   <HeaderComponent></HeaderComponent>

   <div class="father">

     <h1>Computed | Propiedades computadas</h1>

     <input type="text" v-model="userName">
   
     <h2>Hola {{ userName }}</h2>

    <h3>Tu nombre tiene {{ nameLength }} letras</h3>
   </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import ChildComponent from './components/ChildComponent.vue';

  const userName = ref('Arely')

  // variable que depende de userNAme pero no se actualiza cada que modificamos userNAme
  //const nameLength = ref(userName.value.length);

  // para hacer que la variable siempre dependa se username usamos una variable computada (se usa una función callback)
  const nameLength = computed(() => {
    return userName.value.length
  });
</script>
<style scoped> 
 .father{
  align-items: center;
  text-align: center;
 }

</style>