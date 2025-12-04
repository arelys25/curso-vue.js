<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
   <!-- AGregar el componente del header con el titulo y lo importamos  -->
   <HeaderComponent></HeaderComponent>

   <div class="father">

     <h1>WatchEffect | Vigilancia de cambios</h1>
   
     <h2>Hola {{ userName2.name }}</h2>

     <button @click="setName2">Cambiar de usuario</button>

   </div>
  </div>
</template>

<script setup>
  import { computed, ref, watch, watchEffect } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import ChildComponent from './components/ChildComponent.vue';

  const userName = ref({name:'Arely'})

  const userName2 = ref({name:'Dania'})

  const setName = () => {
    userName.value.name = 'Alexis'
  };

  const setName2 = () => {
    userName2.value.name = 'Ashly'
  };

  // watch nos avisa o vigila una variable que nosotros querramos
  // el primer parametro es la variable a vigilar (useName)
  // el segundo parámetro será un callback, la función que querramos ejecutar cuando cambie la variable 
  // si queremos hacer que el watch no espere a que se cambie, es decir, que se ejecute desde el primer momento, agregaremos un tercer argumento
  // el tercer argumento será un objeto que tiene opciones
  watch(userName,(newValue, oldValue) => {
    // acceder a valores nuevos y antiguos 
    console.log('User Name modified', newValue,oldValue)
  }, {
    // inmediate hace que se ejecute inmediatamente
    inmediate: true,
    deep:true // se usa para especificar que queremos tambien vigilar los comportamientos internos de un objeto
  });

  // en el watch effect no se necesita poner como argumento la variable a vigilar, ya con el simple hecho de mencionarla en la funcion es suficiente
  watchEffect(
    () => {
      console.log('User Name modified to: ',userName2.value.name);
    }
  );

</script>
<style scoped> 
 .father{
  align-items: center;
  text-align: center;
 }

</style>