<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SSR Demo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ml-3 mb-2 mb-lg-0">
                    <!--<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>-->
                    <li class="nav-item">
                        <nuxt-link active-class="active" exact class="nav-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link active-class="active" class="nav-link" to="/categories">Categories</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link active-class="active" class="nav-link" to="/news">News</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <!-- todo: Nuxt.js v2.10.0, you can also use the prefetch prop set to false --><!--no-prefetch :prefetch="false"-->
                        <nuxt-link active-class="active" :prefetch="false" class="nav-link" to="/checkout">Checkout</nuxt-link>
                    </li>
                </ul>

                <div class="d-inline-flex">
                    <h3>{{ $t('greeting') }}</h3>
                    <div
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        class="btn btn-link"
                        @click="$i18n.setLocale(locale.code)"
                    >
                        {{ locale.name }}
                    </div>
                </div>

                <form @submit.prevent class="d-flex mx-3">
                    <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                <button v-if="!isLoggedIn" key="login" class="btn btn-primary mx-3" @click="login">Login</button>
                <button v-else key="logout" class="btn btn-primary mx-3" @click="logout">Logout</button>
            </div>
        </div>
    </nav>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'navigation',
    computed: {
      ...mapGetters({
        isLoggedIn: 'auth/isLoggedIn'
      }),
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    },
    methods: {
      async login() {
        await this.$store.dispatch('auth/login', {
          "email": "eve.holt@reqres.in",
          "password": "cityslicka",
          // "email": "peter@klaven"
        });
      },
      logout() {
        this.$store.dispatch('auth/logout');
      }
    },
  }
</script>

<style scoped>

</style>
