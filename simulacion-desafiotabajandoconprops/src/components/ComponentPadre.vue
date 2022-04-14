<template>
  <div class="padre">
    <h1>Asistencia G17</h1>
    <form @submit.prevent="addStudent">
        <label>
      Alumno: 
      <input
      @keyup.enter="addStudent"
        type="text"
        placeholder="ingresa nombre del alumno"
        v-model="alumnoPresente"
      />
    </label>
    </form>
    <button @click="addStudent">Poner Presente</button>
    <ComponentHijo :alumnos="alumnos" @eliminar="deleteStudent" />
  </div>
</template>

<script>
import ComponentHijo from "./ComponentHijo.vue";
export default {
  data() {
    return {
      alumnos: [],
      alumnoPresente: "",
    };
  },
  components: { ComponentHijo },
  methods: {
    addStudent() {
      this.alumnos.push(this.alumnoPresente);
      this.alumnoPresente = "";
    },
    deleteStudent(index){
        this.alumnos.splice(index, 1)
    }
  },
};
</script>

<style></style>
