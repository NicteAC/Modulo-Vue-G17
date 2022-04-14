<template>
  <div id="app">
    <h1>Listado de alumnos G17</h1>
    <p><strong>Seleccione Estudiante para la lista</strong></p>
    <div class="componentes">
      <div v-for="(name, index) in names" :key="index">
        <ChildrenComponent :names="name" @saludar="saludando" />
      </div>
    </div>
    <div class="label">
        <label>
          Usted ha seleccionado al estudiante: 
          <input class="input" type="text" v-model="respuesta.nombre">
        </label>
      </div>
  </div>
</template>

<script>
import ChildrenComponent from "./components/ChildrenComponent.vue";
export default {
  name: "App",
  data() {
    return {
      names: [
        {
          nombre: "Dirk Gaston",
          src: "https://avatars.dicebear.com/api/avataaars/dirk.svg",
        },
        {
          nombre: "Ambar Medina",
          src: "https://avatars.dicebear.com/api/avataaars/ambar.svg",
        },
        {
          nombre: "Esteban Vargas",
          src: "https://avatars.dicebear.com/api/avataaars/esteban.svg",
        },
        {
          nombre: "Florangel Orochena",
          src: "https://avatars.dicebear.com/api/avataaars/florangel.svg",
        },
        {
          nombre: "Nialdi Castro",
          src: "https://avatars.dicebear.com/api/avataaars/nialdic.svg",
        },
        {
          nombre: "Carlos Araya",
          src: "https://avatars.dicebear.com/api/avataaars/caarlos.svg",
        },
        {
          nombre: "Diego Pizarro",
          src: "https://avatars.dicebear.com/api/avataaars/diego.svg",
        },
      ],
      respuesta: "",
    };
  },
  components: { ChildrenComponent },
  methods: {
    saludando(nombre) {
      this.respuesta = nombre;
      console.log(this.respuesta.nombre)
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  vertical-align: baseline;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
body {
  background-image: url("./assets/poderosa-galaxia-201.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(248, 110, 110);
  font-size: 2rem;
}
.componentes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  margin-bottom: 0.5em;
  margin: 0.5em;
}
.input {
  background-color: rgba(116, 25, 235, 0.637);
  max-width: 10em;
  margin: auto;
  font-size: 0.75em;
  margin-bottom: 1rem;
}
.label {
  margin: 2em 0.5em;
}
@media screen and (max-width: 425px) {
  .componentes {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .componentes {
    margin-bottom: 2rem;
  }
}
</style>
