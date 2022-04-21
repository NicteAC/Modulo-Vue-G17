<template>
  <div class="hello">
    <div class="card" v-for="(carta, i) in cartas" :key="i">
      <div class="img">
        <img v-if="carta.imageUrl" :src="carta.imageUrl" alt="" />
        <img
          v-else
          src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
          alt=""
        />
      </div>

      <p>{{ carta.name }}</p>
      <p>{{ carta.type }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      cartas: {
        imageUrl: "",
        name: "",
        type: "",
      },
    };
  },
  async mounted() {
    const response = await fetch("https://api.magicthegathering.io/v1/cards");
    const data = await response.json();
    const { cards } = data;
    const cartas = cards.map((carta) => {
      const { imageUrl, name, type } = carta;
      const card = { imageUrl, name, type };
      return card;
    });
    this.cartas = cartas;
  },
  methods: {},
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  color: aliceblue;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 1rem;
}
.card {
  margin: 1rem 2rem;
  padding: 0.5rem;
  border: white 2px solid;
}
.img {
  margin: 0.5rem;
  display: flex;
  min-height: 20rem;
}
img {
  margin: auto;
}
</style>
