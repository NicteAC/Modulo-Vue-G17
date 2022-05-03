<template>
  <div>
    <form>
      <input
        class="form-control"
        type="search"
        :value="search"
        @input="$store.dispatch('setSearch', $event.target.value)"
      />
    </form>
    <div>
      <div v-if="searchProducts.length > 0">
        <ProductsGrid :products="searchProducts" />
      </div>
      <div v-else>No hay productos para mostrar</div>
    </div>
  </div>
</template>

<script>
import ProductsGrid from "../components/ProductsGrid.vue";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  components: {
    ProductsGrid,
  },
  created() {
    this.setSearch;
  },
  computed: {
    ...mapState(["search"]),
    ...mapGetters(["searchProducts"]),
  },
  methods: {
    ...mapActions(["setSearch"]),
  },
};
</script>

<style scoped>
.container {
  margin-top: 75px;
}

.search-bar {
  margin-top: 100px;
}

form {
  margin-top: 100px;
}

input {
  border: 1px solid #d454c3;
}

.product-not-found {
  font-size: 24px;
  font-weight: bold;
}
</style>
