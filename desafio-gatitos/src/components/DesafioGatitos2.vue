<template>
  <div id="RandomCats">
    <div class="d-flex flex-column flex-wrap">
      <h1 class="mainTitle">Random Gif Cat</h1>
    </div>
    <div class="container d-flex flex-column">
      <div class="d-flex justify-content-center my-3">
        <p class="mx-3">Título</p>
        <input class="catInput" v-model="catTitle" placeholder="Ingrese un título" />
      </div>
      <div class="d-flex justify-content-center my-3">
        <p class="mx-3">Filtro</p>
        <select class="catInput" v-model="catFilter">
          <option v-for="(filter, index0) in filters" :key="index0">
            {{ filter }}
          </option>
        </select>
      </div>
      <div class="d-flex justify-content-center my-3">
        <p class="mx-3">Color</p>
        <select class="catInput" v-model="catColor">
          <option v-for="(color, index1) in colors" :key="index1">
            {{ color }}
          </option>
        </select>
      </div>
      <div class="d-flex justify-content-center my-3">
        <p class="mx-3">Tamaño</p>
        <input class="catInput" v-model.number="catSize" placeholder="Ingrese número" />
      </div>
      <button class="catBtn mx-auto my-3" type="button" @click="lookForCat()">Obtener mi gatito</button>
      <img class="mx-auto my-2" id="catImg" :src="catImg" />
    </div>
    
    
  </div>
  
</template>

<script>
export default {
  name: 'RandomCats',
  data: () => ({
    catImg: '',
    catFilter: '',
    filters: ['blur', 'mono', 'sepia', 'negative', 'paint', 'pixel'],
    catColor: '',
    colors: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
    catTitle: '',
    catSize: ''
  }),
  methods: {
    lookForCat() {
      fetch(
        `https://cataas.com/cat/gif//says/${this.catTitle}?size=${this.catSize}&color=${this.catColor}&filter=${this.catFilter}`
      )
        .then((res) => res.blob())
        .then((blob) => {
          let catUrl = URL.createObjectURL(blob)
          this.catImg = catUrl
        })
    }
  }
}
</script>

<style>
.gatitoPrincipal {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: dashed black 10px;
}
.mainTitle {
  text-align: center;
}
.catBtn {
    width: 200px;
    text-align: center;
}
.catInput {
    
    width: 250px;
    
}
</style>