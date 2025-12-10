<!-- npm i vitest @vue/test-utils jsdom -D -->
<!-- Pasa ts: npm install -D vitest @vue/test-utils jsdom @types/jsdom -->

<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <h2>Welcome to the Home Page</h2>

        <h3 id="counter">Counter: {{ counter }} 
            <button @click="counter++" id="counter_btn">+</button>
        </h3>

    </div>
</template>

<script setup>
    import { ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';

    const counter = ref(1);

</script>

<style scoped>

</style>