<template>
  <div id="app">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Rut</th>
            <th scope="col">Edad</th>
            <th scope="col">Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in personas" :key="index">
            <th scope="row">{{index}}</th>
            <td>{{item.nombre}}</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>         
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return  {
      personas: [
        {
          nombre: "pepito",
          apellido: "perez",
          rut: "12345678-2",
          fecha: "01-01-2001",
          edad: "21",
        },
        {
          nombre: "pepito2",
          apellido: "perez2",
          rut: "11111111-2",
          fecha: "01-01-2000",
          edad: "22",
        },
        {
          nombre: "pepito3",
          apellido: "perez3",
          rut: "22222222-2",
          fecha: "01-01-2002",
          edad: "20",
        },
      ],
    }
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
