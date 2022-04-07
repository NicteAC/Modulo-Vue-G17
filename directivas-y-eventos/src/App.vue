<template>
  <div id="app">
    <h1>Crear nueva tarea</h1>
    <label>
      Tarea
      <input
        type="text"
        v-model="tarea"
        placeholder="Ingrese una nueva tarea"
      />
    </label>
    <button type="button" class="btn btn-primary mx-2" @click="addTarea">
      Crear
    </button>

    <ul v-for="(tarea, index) in tareas" :key="index">
      <li>
        <strong> {{ index }}: {{ tarea }} </strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tarea: "",
      tareas: [],
    };
  },
  methods: {
    addTarea() {
      const { tarea } = this;
      this.tareas.push(tarea);
      this.tarea = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background-color: pink;
  margin-top: 60px;
}
</style>
