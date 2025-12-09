<template>
    <div>
        <header class="header">
            <h1>Movies</h1>

            <div class="login-bar">
                <!-- agregar nombre de usuario solo al presionar el boton de login y si existe conexion con la API -->
                <p v-if="userStore.user" class="username">Hola, {{ userStore.user.name }}</p>

                <button @click="userStore.getUser()">Login</button>
            </div>
            <nav>
                <ul class="nav-list">
                    <li>
                        <!-- Se usa routerlink en lugar de la etiqueta a | to es la extensión establecida en la carpeta router -->
                        <router-link class="link" to="/">Home</router-link>
                    </li>
                    <li>
                        <!-- Se usa routerlink en lugar de la etiqueta a | to es la extensión establecida en la carpeta router -->
                        <router-link class="link" to="/movies">Movies</router-link>
                    </li>
                    <li>
                        <!-- Otra forma de usar el to, con variable -->
                        <router-link class="link" :to="{name: 'create'}">Create Movie</router-link>
                    </li>
                    
                </ul>

            </nav>
        </header>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '../stores/userStore';


    const userStore = useUserStore();

    onMounted(() => {
        // en cuanto accedamos al componente, el usuario se va a loguear 
        userStore.getUser();
    });



</script>

<style scoped>

    .header {
        background-color: #000022;
        color: white;
        text-align: center;
        padding: 20px;

        .login-bar {
            width: 100%;
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            justify-content: end;

            .username {
            margin: 0;
            padding-right: 10px;
            }
        }

        .nav-list {
            display: flex;
            justify-content: space-around;

            .link {
                color: white;
                text-decoration: none;
            }
        }
    }

</style>