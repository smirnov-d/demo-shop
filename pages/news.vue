<template>
    <div>
        <h1>news</h1>
        <input type="number" v-model="test">
        <button @click="goToNews">go to news #{{test}}</button>
        <nuxt-child keep-alive :keep-alive-props="{ max: 10 }"/><!--:key="$route.params.id" -->
    </div>
</template>

<script>
    /*todo: check camel-case in page name*/
  export default {
    name: "news",
    data: () => ({
      test: 0,
    }),
    // async fetch({ store, params }) {
    //   console.log('server fetch');
    //   if(!store.state.products.products.length) {
    //     await store.dispatch('products/fetchData')//, params.id
    //   }
    // },
    methods: {
      goToNews() {
        this.$router.push(`/news/${this.test}`)
      }
    }
  }
</script>

<style scoped>

</style>
