<template>
  <div>
    <p>peleador: {{ datosPeleador.nombre }}</p>
  </div>
</template>

<script>
import peleadores from "@/peleadores.json";
export default {
  name: "DatosPeleador",
  data() {
    return {
      peleadores,
    };
  },
  computed: {
    datosPeleador() {
      const { peleadores } = this;
      const { id } = this.$route.params;
      const peleador = peleadores.find((u) => u.id == id);
      return peleador;
    },
  },
};
</script>

<style></style>
