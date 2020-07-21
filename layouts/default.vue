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
    },
    //using with seo: false, //performance issue //also can be merged with custom user meta/ see docs
    head () {
      return this.$nuxtI18nSeo()
    }
  }
</script>

<style scoped>

</style>
