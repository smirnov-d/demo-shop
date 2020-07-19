<template>
    <div>
        <button v-if="!inCart" class="btn btn-success" @click.prevent="addButtonHandler">
            Add to card
        </button>
        <a v-else href="#" @click.prevent="removeButtonHandler">
            Already added
        </a>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "cartButton",
    props: {
      product: {
        type: Object,
        required: true,
      }
    },
    computed: {
      inCart() {
        return this.inCartIDs.includes(this.product.id);
      },
      ...mapGetters({
        inCartIDs: 'cart/inCartIDs',
      })
    },
    methods: {
      ...mapActions({
        addToCart: 'cart/addToCart',
        removeFromCart: 'cart/removeFromCart'
      }),
      addButtonHandler() {
        this.addToCart(this.product)
      },
      removeButtonHandler() {
        this.removeFromCart(this.product.id)
      }
    }
  }
</script>

<style scoped>

</style>
