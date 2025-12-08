<template>
    <div>
        <header class="header">
            <h1>Movies</h1>
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

</script>

<style scoped>

.header {
  background-color: #000022;
  color: white;
  text-align: center;
  padding: 20px;

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