<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: { HelloWorld },

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  vertical-align: baseline;
}
#app {
  background-image: url("./assets/bg.jpg");
}

</style>