<template>
  <div class="hello">
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Buscador de gif</h2>
      </div>
      <div class="card-body">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Apikey</span>
          <input
            type="text"
            class="form-control"
            placeholder="Apikey"
            aria-describedby="addon-wrapping"
            v-model="apiKey"
          />
        </div>

        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">Buscar</span>
          <input
            type="text"
            class="form-control"
            placeholder="Ingresar texto a buscar"
            aria-describedby="addon-wrapping"
            v-model="buscar"
          />
        </div>
      </div>
      <div class="card-footer text-muted">
        <button
          type="button"
          @click="getGif"
          class="btn btn-outline-primary btn-lg"
        >
          Obtener Gif
        </button>
        <div class="imagen">
          <iframe v-for="(imagen, i) in getId" :key="i"
            :src="`https://giphy.com/embed/${imagen.id}`"
            width="480"
            height="359"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      apiKey: "shgTn7JQbk1uoqnjRN3sAAj0ni7g7d8V&q",
      buscar: "",
      imagenGif: {
        data: [],
      },
    };
  },
  mounted() {
    console.log("first");
  },
  methods: {
    async getGif() {
      await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}=${this.buscar}&limit=25&offset=0&rating=g&lang=es`
      )
        .then((response) => response.json())
        .then((data) => (this.imagenGif = data));
      console.log(this.imagenGif);
    },
  },
  computed: {
    getId() {
      return this.imagenGif.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
