<template>
    <div>
        <!--https://www.vuemastery.com/pdf/Nuxtjs-Cheat-Sheet.pdf-->
        <h1>hello world</h1>
        <!--
        Но допустим мы хотим True SSR, тогда как вариант мы можем пользоваться методом asyncData родительской страницы. Это усложняет проект, так как где бы мы не хотели отрендерить список товаров, родитель должно контролировать эти списки и получать для них данные. Ужасно, медленно, неудобно, но мы получим труSSR.
        -->
        <!-- todo: breadcrumbs-->
        <!-- todo: + i18n https://github.com/nuxt/nuxt.js/blob/dev/examples/i18n/middleware/i18n.js -->
        <hr>
        ::marker experimental feature
        <ul class="pl-0 custom-marker">
            <li>notifications (add to cart)</li>
            <li>themes</li>
            <li class="success">i18n</li>
            <li class="success">protected routes</li>
            <li class="success">Отдельный роут в модальном окне</li>
            <li>Хранение идентификатора пользователя в cookie (без авторизации для упрощения).</li>
            <li>Ленивая подгрузка и гидрация компонентов.</li>
            <li class="error">Сжатие изображений, стилей, скриптов, html кода и всего что только можно.</li>
            <li class="success">2 версии сайта: 1) для последних браузеров которым не нужен транспилированный код (через Babel) 2)
                Legacy версия транспилированная через Babel.
            </li>
            <li class="error">Умная загрузка шрифтов без FOUT, FOIT, FOFT (распространённая проблема при использовании своих
                шрифтов, пока они не загрузятся у пользователя, он не будет видеть текст).
            </li>
            <li class="success">Поддержка всех браузеров от IE 10.</li>
            <li class="error">Поддержка svg.</li>
            <li class="success">Работа со всеми SEO тегами.</li>
            <li>Автоопределение устройства пользователя ещё до рендера сайта, для отдачи нужного html контента.</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'index',
    head: {
      title: 'Домашнаяя страница'
    },
  }
</script>

<style>
    ul.custom-marker {
        list-style-position: inside;
    }
    .custom-marker ::marker{
        content: '#';
        color: #47494e;
        /*text-align: left;*/
        font-size: 1.2rem;
    }
    .custom-marker .success::marker{
        content: '✓';
        color: #10ff76;
    }
    .custom-marker .error::marker{
        content: "✕";
        color: red;
    }
</style>
