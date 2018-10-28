<template>
    <div id="app">
        <navigation/>
        <router-view/>
    </div>
</template>

<script>
    import navigation from '@/components/Navigation.vue'

    export default {
        name: 'app',
        components: {navigation}
    }
</script>

<style>
    html {
        background-color: #0d0d0d;
        font-family: Roboto, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    body {
        margin: 0;
    }

    .markdown {
        margin-top: 100px;
        color: #fafafa;
    }

    .markdown h1 {
        font-size: 5rem;
        font-weight: normal;
    }

    .markdown h3 {
        font-size: 3rem;
        font-weight: normal;
    }

    .markdown p {
        margin-left: 0.5rem;
    }

    @media screen and (max-width: 480px) {
        .markdown {
            margin-top: 80px;
        }

        .markdown h1 {
            font-size: 3rem;
            font-weight: normal;
        }

        .markdown h3 {
            font-size: 2rem;
            font-weight: normal;
        }

        .markdown p {
            margin-left: 0.2rem;
        }
    }
</style>
