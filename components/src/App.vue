<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hola chicos de la G17" />
    <NuevoComponente
      msg2="Estamos enviando informacion de un componente padre a un componente hijo"
    />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import NuevoComponente from "./components/NuevoComponente.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    NuevoComponente,
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
