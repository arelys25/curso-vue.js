<template>
    <div class="child">
        <h2>Este es el componente hijo</h2>

        <p>Nombre de usuario: {{ userName }}</p>

        <button @click="login_inicio">Login</button>

    </div>

</template>

<script setup>
import { ref } from 'vue';

    // constante donde se crearán los eventos
    const emit = defineEmits(['login','nombre_de_otro_evento'])

  const userName = ref('Arely');

  // variable que emitirá un evento con cierta información
  const login_inicio = () => {
    // primer argumento: nombre del evento, segundo argumento: la información que queremos que viaje
    emit('login', userName.value)
  }

</script>

<style scoped>
    .child{
        border: 5px solid black;
        text-align: center;
        align-items: center;
    }

</style>