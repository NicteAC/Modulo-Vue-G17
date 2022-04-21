<template>
  <div id="app">
    <h1>Ejercicio</h1>
    <div>{{ texto }}</div>
    <button @click="borrar">Destruir</button>
    <hr>
    <HelloWorld v-show="mostrar"/>
    <hr>
    <DestroyExample />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DestroyExample from "./components/DestroyExample.vue";

export default {
  components: { DestroyExample, HelloWorld },
  name: "App",
  data() {
    return {
      texto: "Hola mundo",
      mostrar: true,
    };
  },
  methods: {
    borrar() {
      this.$destroy();
    },
  },
  props: {},
  beforeCreate() {
    //antes que se cree el componente
    console.log("before create");
  },
  created() {
    //cuando se crea el componente
    //cuando llamo algo externo
    //no existe la vista pero si existe todo lo demas
    console.log("created");
  },
  beforeMount() {
    //antes que se monte el componente
    console.log("beforeMount");
  },
  mounted() {
    //cuando se monta el componente -> vista
    //cuando el componente esta listo, ir a buscar algo a la vista
    //llenar data, traer datos de internet
    console.log("mounted");
  },
  beforeUpdate() {
    // antes que se actualice el componente
    console.log("beforeUpdate");
  },
  updated() {
    // cuando se actualiza el componente -> data
    console.log("updated");
  },
  beforeDestroy() {
    //antes de que desmonte el componente -> v-if
    console.log("beforeDestroy");
  },
  destroyed() {
    // cuando se desmonta el componente
    console.log("destroyed");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
