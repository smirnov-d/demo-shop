<template>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="category in categories" :key="category.id" class="col">
            <div class="card h-100">
                <img src="https://picsum.photos/400/100" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{category.name}}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer text-right">
                    <nuxt-link class="stretched-link" :to="`/categories/${category.id}`">View category</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'index',
    head: {
      title: 'Категории'
    },
    async fetch({ store }) {
      if(!store.state.categories.categories.length) {
        await store.dispatch('categories/fetchData')
      }
    },
    computed: {
      ...mapState({
        categories: ({categories}) => categories.categories,
      })
    },
  }
</script>

<style scoped>

</style>
