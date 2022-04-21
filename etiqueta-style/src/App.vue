<template>
  <div id="app">
    <h1>Lista ToDo genial hecha con VUE</h1>
    <h2>style binding</h2>
    <ul>
      <li v-for="(item, i) in items" :key="i"
      :style="{
        'text-decoration': item.listo === true ? 'line-through' : 'none',
        'background-color': item.prioridad === 'alta' ? 'green' : 'orange',
        'font-style': item.dificultad >= 3 ? 'italic' : 'normal', 
        'color': item.prioridad === 'alta' ? 'white' : 'red'
      }" >
        {{item.texto}} 
        <input type="checkbox" v-model="item.listo">
      </li>
    </ul>
    <h2>class binding</h2>
    <ul>
      <li v-for="(lista, i) in items" :key="i"
      :class="{
        'prioridad-baja': lista.prioridad === 'baja',
        'prioridad-alta': lista.prioridad === 'alta',
        'dificultad-media': lista.dificultad <= 3
       }" >
        {{lista.texto}} 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          texto: "Despertar en la mañana",
          prioridad: "alta",
          dificultad: 1,
          listo: false,
        },
        {
          texto: "Hacer aseo",
          prioridad: "alta",
          dificultad: 3,
          listo: false,
        },
        {
          texto: "Estudiar",
          prioridad: "baja",
          dificultad: 5,
          listo: false,
        },
      ],
    };
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
.prioridad-alta {
  background-color: red;
}
.prioridad-baja {
  background-color: aquamarine;
}
.dificultad-media {
  font-size: 2em;
}
</style>
