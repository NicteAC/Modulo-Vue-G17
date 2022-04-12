<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <img
              :src="`${datos.background_image}`"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-title">{{ datos.name }}</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Rating: {{ datos.rating }}</li>
                <li class="list-group-item">Release: {{ datos.released }}</li>
                <li class="list-group-item">Updated: {{ datos.updated }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ComponenteNieto />
  </div>
</template>

<script>
import ComponenteNieto from "./ComponenteNieto.vue";
export default {
    name: "ComponenteHijo",
    props: {
        datos: {
            type: Object,
        },
    },
    components: { ComponenteNieto }
};
</script>

<style></style>
