<template>
  <div class="hijo">
    <ul v-if="alumnos.length > 0">
      <li v-for="(alumno, index) in alumnos" :key="index">
        {{ index + 1}} {{ alumno }}
        <button @click="btnDelete(index)">Elimar alumno de la asistencia</button>
      </li>
    </ul>
    <p v-else>
      No hay alumnos ingresados en la asistencia de hoy
    </p>
  </div>
</template>

<script>
export default {
  name: "ComponentHijo",
  props: {
    alumnos: {
      type: Array,
    },
  },
  methods: {
      btnDelete(index) {
         this.$emit("eliminar", index) 
      }
  },
};
</script>

<style></style>
