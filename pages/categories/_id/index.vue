<template>
    <div>
        <h1>Category {{$route.params.id}}</h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div
                v-for="product in products"
                :key="product.id"
                class="col"
            >
                <div class="card h-100">
                    <div class="flex-grow-1">
                        <div class="row g-0 h-100">
                            <div class="col-md-4">
                                <img :src="product.image"  :alt="product.name">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body d-flex flex-column h-100">
                                    <h5 class="card-title">{{product.name}}</h5>
                                    <div class="card-text flex-grow-1" v-html="product.description"></div>
                                    <p class="card-text">{{product.price}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex align-items-center justify-content-between">
                        <nuxt-link :to="`/products/${product.id}`">View more</nuxt-link>
                        <!--<a href="" @click.prevent="addToCart">В корзину</a>-->
                        <cart-button :product="product"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // import { mapGetters } from 'vuex';
  import CartButton from '~/components/cartButton';

  export default {
    name: 'category',
    components: {
      CartButton,
    },
    validate ({ params }) {
      // render the error page if false
      return /^\d+$/.test(params.id)
    },
    head () {
      return {
        title: `Category-${this.$route.params.id}`
      }
    },
    // async asyncData({$api, params}) {
    //   return  {
    //     products: await $api.getProductsByCategory(params.id),
    //   }
    // },
    async fetch({ store, params }) {
      if(!store.state.products.products.length) {
        await store.dispatch('products/fetchData')//, params.id
      }
    },
    computed: {
      // todo: check best practices for Method-style Getters with nuxt
      products() {
        return this.$store.getters['products/getProductsByCategory'](this.$route.params.id)
      },
      // products() {
      //   return this['products/getProductsByCategory'](this.$route.params.id)
      // },
      // ...mapGetters([
      //   'products/getProductsByCategory',
      // ]),
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
