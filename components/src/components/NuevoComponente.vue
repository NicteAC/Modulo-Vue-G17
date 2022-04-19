<template>
  <div>
      <p class="saludo">Hola este es un nuevo componente</p>
      <p>{{msg2}}</p>
  </div>
</template>

<script>
export default {
    name: "NuevoComponente",
    props: {
        msg2: {
            type: String, 
        },
    },
}
</script>

<style>
.saludo {
    font-size: 40px;
}

</style>