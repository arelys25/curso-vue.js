<template>
    <div class="child">
        <h2>Este es el componente hijo</h2>

        <!-- slot ayuda a pegar todo un bloque de codigo html desde el componente padre  -->
        <slot>
            <h4>Contenido por defecto por si el componente padre no envia nada</h4>
        </slot>
    </div>

</template>

<script setup>
import { ref } from 'vue';


</script>

<style scoped>
    .child{
        border: 5px solid black;
        text-align: center;
        align-items: center;
        margin: 10px;
        padding: 10px;
    }

</style>