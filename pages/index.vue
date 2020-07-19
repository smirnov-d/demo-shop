<template>
    <h1>hello world</h1>
    <!--
    Но допустим мы хотим True SSR, тогда как вариант мы можем пользоваться методом asyncData родительской страницы. Это усложняет проект, так как где бы мы не хотели отрендерить список товаров, родитель должно контролировать эти списки и получать для них данные. Ужасно, медленно, неудобно, но мы получим труSSR.
    -->
    <!-- todo: breadcrumbs-->
    <!-- todo: i18n https://github.com/nuxt/nuxt.js/blob/dev/examples/i18n/middleware/i18n.js -->
</template>

<script>
  export default {
    name: 'index',
    head: {
      title: 'Домашнаяя страница'
    }
  }
</script>

<style scoped>

</style>
