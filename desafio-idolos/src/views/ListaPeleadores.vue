<template>
  <div>
    <p>lista peleadores</p>
    <ul>
      <li v-for="(peleador, i) in peleadores" :key="i">
        <router-link :to="`/peleadores/${peleador.id}`">
          {{ peleador.nombre }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import peleadores from "@/peleadores.json";
export default {
  name: "ListaPeleadores",
  data() {
    return {
      peleadores,
    };
  },
};
</script>

<style></style>
