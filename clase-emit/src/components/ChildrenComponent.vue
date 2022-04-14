<template>
  <div class="hijo">
    <div class="contenedor">
      <p class="title">Hola soy <strong>{{ names.nombre }}</strong> </p>
      <img :src="`${names.src}`" alt="" class="imagen" />
      <div class="btn">
        <button class="button" @click="$emit('saludar', names)">Seleccioname</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildrenComponent",
  props: {
    names: {
      type: Object,
    },
  },
};
</script>

<style>
.button {
  background: rgb(2, 211, 219);
  background: linear-gradient(
    90deg,
    rgba(2, 211, 219, 1) 0%,
    rgba(142, 11, 255, 1) 51%,
    rgba(249, 0, 222, 1) 100%
  );
  border-radius: 5px;
  padding: 0.5rem 1em;
  border: 1px solid black;
  font-size: 0.5em;
  margin: auto;
  top: 1px;
}
.contenedor {
  padding: 0.5em;
  min-height: 6em;
  color: rgb(30, 178, 247);
  backdrop-filter: blur(4px) saturate(142%);
  -webkit-backdrop-filter: blur(4px) saturate(142%);
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
img {
  max-height: 3em;
  margin: 0.25em auto;
}
.title {
  font-size: 0.5em;
}
@media screen and (max-width: 425px) {
  .button {
    font-size: 0.75em;
  }
}
</style>
