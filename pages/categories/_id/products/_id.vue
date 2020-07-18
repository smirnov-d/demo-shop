<template>
    <div>
        <h1>{{product.name}}</h1>
        <figure class="figure">
            <img :src="product.image" class="figure-img img-fluid rounded" :alt="product.name">
            <figcaption class="figure-caption">{{product.price}}</figcaption>
            <div v-html="product.description"></div>
        </figure>
        <p></p>
    </div>

</template>

<script>
  export default {
    name: "product",async fetch({ store, params }) {
      if(!store.state.products.products.length) {
        await store.dispatch('products/fetchData')//, params.id
      }
    },
    computed: {
      product() {
        return this.$store.getters['products/getProductById'](this.$route.params.id)
      },
    },

  }
</script>

<style scoped>

</style>
