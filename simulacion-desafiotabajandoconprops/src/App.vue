<template>
  <div id="app">
    <ComponentPadre />
  </div>
</template>

<script>
import ComponentPadre from './components/ComponentPadre.vue'

export default {
  name: 'App',
  components: {
    ComponentPadre
}
}
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
