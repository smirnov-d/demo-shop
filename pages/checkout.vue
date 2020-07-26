<template>
    <!--todo: check full height issue-->
    <div class="d-flex flex-column" style="min-height: 100vh">
        <div class="d-flex align-items-center">
            <a style="position: absolute;" href="#" @click.prevent="$router.go(-1)">&#x21A9; Back</a>
            <h1 class="mx-auto">checkout</h1>
        </div>
        <client-only>
            <div v-if="cart.length" class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th class="col-1" scope="col">#</th>
                        <th class="col-5" scope="col">Name</th>
                        <th class="col-5" scope="col">Price</th>
                        <th class="col-1" scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="product in cart" :key="product.id">
                        <th scope="row">{{product.id}}</th>
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" @click.prevent="removeFromCart(product.id)">&times; remove</button>
                        </td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <td>
                        <h5>Total:</h5>
                    </td>
                    <td></td>
                    <td>
                        {{total}}$
                    </td>
                    <td></td>
                    </tfoot>
                </table>
            </div>
            <div v-else class="d-flex m-auto">
                <h1>Cart is empty</h1>
            </div>
            <div slot="placeholder">
                <h1>This is placeholder for products</h1>
                <p>Cart stored on a client side only. It calls a "hydration". Server take static without products in cart. Then a client side getting cart data (from localstorage) and rerender</p>
                <p>
                    < client-only > tag can resolve this issue
                </p>
            </div>
        </client-only>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'cart',
    head: {
      title: 'Оформление заказа'
    },
    layout: 'empty',
    middleware: ['auth'],
    computed: {
      ...mapState({
        cart: ({cart}) => cart.cart,
      }),
      total() {
        return this.cart.reduce((total, item) => total + item.price, 0)
      },
    },
    methods: {
      ...mapActions({
        removeFromCart: 'cart/removeFromCart'
      }),
    }
  }
</script>

<style scoped>

</style>
