<template>
    <div>
        <header class="sticky-top">
            <v-navigation/>
        </header>
        <main class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nuxt/>
                    </div>
                </div>
            </div>
        </main>
        <footer></footer>
    </div>
</template>

<script>
  import VNavigation from '../components/VNavigation'
  export default {
    name: 'default',
    components: {
      VNavigation,
    }
  }
</script>

<style scoped>

</style>
