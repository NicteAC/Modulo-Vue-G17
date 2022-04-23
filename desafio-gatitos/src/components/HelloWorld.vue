<template>
  <div class="hello">
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Card title</h2>
      </div>
      <div class="card-body">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Titulo</span>
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Options</label
          >
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Options</label
          >
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">@</span>
          <input
            type="number"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
      <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary btn-lg">Primary</button>
       <div class="imagen">
          <img src="" class="card-img-top" alt="..." />
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
      
    }
  },
  props: {
    msg: String,
  },
  methods: {
    //`https://api.giphy.com/v1/gifs/search?api_key=shgTn7JQbk1uoqnjRN3sAAj0ni7g7d8V&q=${buscador}&limit=25&offset=0&rating=g&lang=es`;
    async getGif() {
      const URL = `https://api.giphy.com/v1/gifs/search?api_key=shgTn7JQbk1uoqnjRN3sAAj0ni7g7d8V&q=shrek&limit=25&offset=0&rating=g&lang=es`;
      const gifImage= await fetch(URL)
      const data = await gifImage.json();
      this.data = data;
      console.log(this.data)
      console.log("first")
  },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>