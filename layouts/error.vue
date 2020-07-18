<template>
    <div class="container">
        <h1>this is custom error page</h1>
        <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
        <h1 v-else>Произошла ошибка</h1>
        <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
</template>

<script>
  export default {
    name: 'error',
    props: ['error'],
    head: {
      title: 'Ошибка!'
    }
  }
</script>

<style scoped>

</style>
