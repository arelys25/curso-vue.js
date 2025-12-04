<!-- npm run dev | Para correr el servidor -->
<!-- npm install para instalar todas las dependencias de node.js -->
<!-- vbase-3 para autocompletar -->

<template>
  <div>
    <!-- AGregar el componente del header con el titulo y lo importamos  -->
    <HeaderComponent></HeaderComponent>
    <h1>Renderizado de listas | v-for</h1>
    <div>
      <!-- crear un p por cada elemento que haya en la lista, para no hacerlos de uno por uno. Se usará un For -->
       <!-- se le tiene que asignar una variable que almacenará el valor (movie), decir de dónde sacará la información (lista movies) y crear una llave unica (movie) -->
        <!-- para asignarle un index (como un contador o indice) se pondrá entre paréntesis  -->
      <p v-for="(movie, index) in movies" :key="movie">{{index + 1}} - {{ movie }}</p>
    </div>

    <div>
      <ul>
        <li v-for="animal in animals" :key="animal.id">
          {{ animal.name }}
          <img :src="animal.img" alt="">
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderComponent from './components/HeaderComponent.vue';

  const movies = ['El libro de la vida','Naruto The Last','Superman','Harry Potter']

  const animals = [
    {
        id: 1,
        name: 'dog',
        img: 'https://imgs.search.brave.com/sHbNiLsILpSbd3SkvAYEPpq0eJbIjbE4-b7p7ALYC2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDgxOTk5NzMtMDNj/Y2UwYmJjODdiP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UWjhmSEJsY25K/dmZHVnVmREI4ZkRC/OGZId3c'
    },
    {
        id: 2,
        name: 'cat',
        img: 'https://imgs.search.brave.com/0CKztN3aV-zJOKJiLNZplljHzVLFB-mlI0vysye_VDk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS93cy82NDAv/Y3BzcHJvZHBiL2Qy/MmQvbGl2ZS8yYmM2/NDczMC1jYzUwLTEx/ZjAtOWZiNS01ZjNh/MzcwM2EzNjUuanBn/LndlYnA'
    },
    {
        id: 3,
        name: 'bird',
        img: 'https://imgs.search.brave.com/qVPUtzDXYlBT1OlZqmSks0uU9uJhoBE9iMwX_OWPbWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZS11cC1i/aXJkLXBlcmNoaW5n/LXdvb2RfMTA0ODk0/NC0yOTMwNjQ0Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA'
    }

];
</script>
<!-- scoped ayuda a que los estilos generados solo se apliquen al componente  -->
<style scoped> 
  img{
    width: 200px;
  }
</style>