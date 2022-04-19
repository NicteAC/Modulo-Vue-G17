<template>
  <div>
      <div class="personajes">
          <img :src="datos.src" :alt="datos.nombre" class="imagen">
          <p>{{datos.nombre}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        datos: {
            type: Object,
        },
    },

}
</script>

<style scoped>
.personajes {
    display: flex;
}
.imagen {
    border-radius: 50%;
}
</style>