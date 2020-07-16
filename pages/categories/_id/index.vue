<template>
    <div>
        <h1>Category {{$route.params.id}}</h1>
        <div
            v-for="product in products"
            :key="product.id"
            class="card mb-3"
            style="max-width: 540px;"
        >
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="product.image"  alt="product.name">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <div class="card-text" v-html="product.description"></div>
                        <p class="card-text">{{product.price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: '_id',
    // validate ({ params }) {
      // Должен быть числом
      //todo: :to принимает только строку. чекнуть примеры с числом
      // return /^\d+$/.test(params.id)
    // },
    head: {
      title: 'Категория'
    },
    async asyncData({$api, params}) {
      return  {
        products: await $api.getProductsByCategory(params.id),
      }
    }
  }
</script>

<style scoped>

</style>
