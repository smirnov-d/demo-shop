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
    //using with "seo: false", //performance issue //also can be merged with custom user meta/ see https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance
    head () {
      const canonical = `${process.env.BASE_URL}${this.$route.path
        .toLowerCase()
        .replace(/\/$/, '')}`
      return {
        ...this.$nuxtI18nSeo(),
        script: [
          // mobile console
          // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
        ],
        link: [{ rel: 'canonical', href: canonical }]
      }
    },
  }
</script>

<style scoped>

</style>
