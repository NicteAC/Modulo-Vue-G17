<template>
  <div class="home">
    <h1>Soy el Home</h1>
    <p>
      Terminos y condiciones
      <input type="checkbox" v-model="terminosYCondiciones" />
    </p>
    <button @click="irAlFormulario">Ir al Formulario</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      terminosYCondiciones: false,
    };
  },
  methods: {
    irAlFormulario() {
      const { terminosYCondiciones } = this; //=> const terminosYCondiciones = this.terminosYCondiciones;
      if (terminosYCondiciones === true) {
        this.$router.push("/about");
      } else {
        alert("Debes aceptar terminos y condiciones");
      }
    },
  },
};
</script>
