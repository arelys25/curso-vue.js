<template>
    <div class="child">
        <!-- slot ayuda a pegar todo un bloque de codigo html desde el componente padre  -->
        <slot name="top"></slot>
        <h2>Este es el componente hijo</h2>

        <!-- personalización de slots -->
        <slot name="bottom"></slot>

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