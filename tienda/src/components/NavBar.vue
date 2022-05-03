<template>
  <div id="navbar">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        ><img src="../assets/262486764006212.png" alt="" class="logo-navbar"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'products' }" class="nav-link"
              >Productos</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link :to="{ name: 'addproducts' }" class="nav-link"
              >Añadir Productos</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav mr-5">
          <li class="nav-item active">
            <router-link :to="{ name: 'shoppingcart' }" class="nav-link"
              >Carro de Compras ({{
                $store.getters.totalQuantityInShoppingCart
              }})
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar-light {
  background-image: linear-gradient(
    15deg,
    #d454c3 20%,
    #1fa2ff 100%
  ) !important;
}

.nav-link {
  color: #ffffff !important;
}

.nav-link:hover {
  text-decoration: underline white !important;
}

.logo-navbar {
  height: 50px;
}
</style>
