<template>
    <div>
        <h2>Este es el componente hijo</h2>

        <!-- información de la variable extraida desde el padre -->
        <p>{{ msg }}</p>

    </div>

    <div>
        <label for="">Género:</label>
        <!-- el ? se usa para decir: en dado caso que no se encuentren sus propiedades, no los utilices -->
        {{ people?.sex }}

        <br>

        <label for="">Edad:</label>
        {{ people?.age }}
    </div>
</template>

<script setup>

    // aquí se colocarán el nombre y el tipo de variables que serán extraidas desde el componente padre 
  defineProps({
    msg: String,
    //people: Object
    people: { // si queremos ser más específicos con lo que se va a recibir
        sex: String,
        age: Number
    }
  })

</script>

<style scoped>

</style>