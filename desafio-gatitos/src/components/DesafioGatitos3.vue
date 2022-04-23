<template>
  <div id="app" class="container">
    <div class="row">
      <h1 class="col-12 text-center">Random Gif Cat</h1>
      <div class="col-12">
        <div class="mb-3">
          <label class="form-label">Título</label>
          <input type="text" class="form-control" v-model="myTitle" />
        </div>
        <div class="mb-3">
          <label class="form-label">Filtro</label>
          <select class="form-select" v-model="myFilter">
            <option v-for="(item, i) in filters" :key="i" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <div>
            <label class="form-label">Color</label>
            <select class="form-select" v-model="myColor">
              <option v-for="(item, i) in colors" :key="i" :value="item">
                {{ item }}
              </option>
            </select>
            <div
              class="colorsito"
              :style="{ 'background-color': getColor }"
            ></div>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Tamaño</label>
          <input type="number" class="form-control" v-model="mySize" />
        </div>
        <button class="btn btn-primary" @click="clicked()">
          Obtener gatito
        </button>
      </div>
      <div class="col-12">
        <img :src="myCat" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    getColor() {
      return this.myColor;
    },
  },
  data() {
    return {
      filters: ["blur", "mono", "sepia", "negative", "paint", "pixel"],
      colors: ["green", "red", "orange", "white", "yellow", "purple", "brown"],
      myCat: "",
      myFilter: "",
      myColor: "",
      myTitle: "",
      mySize: "",
    };
  },
  methods: {
    async getKittins(titulo, filtro, color, tamaño) {
      try {
        const req = await fetch(
          `https://cataas.com/cat/gif/says/${titulo}?filter=${filtro}&color=${color}&size=${tamaño}&type=or`
        );
        this.myCat = req.url;
        console.log(req.url);
      } catch (error) {
        this.myCat =
          "https://www.meme-arsenal.com/memes/c9e6371faa3b57eaee1d35595ca8e910.jpg";
        console.log(error);
      }
    },
    clicked() {
      this.getKittins(this.myTitle, this.myFilter, this.myColor, this.mySize);
    },
  },
};
</script>

<style >

.colorsito {
  width: 38px;
  height: 38px;
  border: 2px solid black;
  border-radius: 50% 50%;
}
</style>