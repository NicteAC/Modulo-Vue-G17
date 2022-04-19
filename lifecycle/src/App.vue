<template>
  <div id="app">
    <h1>Hola</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: "holi holi",
    pokemon: {
      name:"plusle"
    }
    }
    },
    // beforeCreate () {
    //   console.log("beforeCreate");
    // },
     created() {
      this.getData()
     },
    // beforeMount () {
    //   console.log("beforeMount");
    // },
    // mounted () {
    //   console.log("Hola chicos de la G17");
    // },
    // beforeUpdate() {
    //   console.log("beforeUpdate");
    // },
    // updated () {
    //   console.log("beforeDestroy");
    // },
    // beforeDestroy () {
    //   console.log("beforeDestroy");
    // },
    // destroyed () {
    //   console.log("destroyed");
    // },
    methods: {
     getData() {
         fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => (this.pokemon = json))
        console.log(this.getData)        
     }
    },
    computed: {
      pokeName() {
        return this.pokemon.name 
      }
    },
    //Los metodos se ocupan cuando queremos agregar metodos con funcionalidades especificas como por ejemplo push()
    //Las computed sirven para transformar nuestros datos ejemplo split('').reverse().join('')

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
