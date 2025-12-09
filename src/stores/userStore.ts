import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user',() => {
    const user = ref();

    const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

    const getUser = async () => {
        // petición a la API. Con el await esperamos a que la peticion se haga y lo que nos devuelva lo guardaremos en la variable response
        const response = await fetch(API_URL);

        // convertir la información que nos dará response a formato json, formato que podamos entender
        const data = await response.json();

        user.value = data;
    }

    return {
        user,
        getUser
    }
});