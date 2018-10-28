<template>
    <nav class="idx_nav">
        <div class="loading" v-show="loading.display" :style="widthstyle"></div>
        <ul class="idx_nav_ul">
            <li class="idx_nav_li" v-for="route of navRoutes" :key="route.name">
                <router-link :to="route.path" v-text="route.name"
                             :style="activeIndex === route.name.toLocaleLowerCase() ? 'border-bottom: 3px solid #fafafa;' : ''"></router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'navigation',
        computed: {
            ...mapState({
                loading: 'loading'
            })
        },
        watch: {
            $route(to) {
                if ('page' === to.name)
                    this.activeIndex = 'tutorial'
                else
                    this.activeIndex = to.name
            },
            'loading.progress'(progress) {
                if (0 === progress) {
                    this.widthstyle = `width: 0; transaction: none;`
                }
                this.widthstyle = `width: calc(100vw * ${progress / 100})`
            }
        },
        data() {
            return {
                activeIndex: 'home',
                widthstyle: '',
                navRoutes: [
                    {
                        path: '/',
                        name: 'HOME'
                    },
                    {
                        path: '/intro',
                        name: 'INTRO'
                    },
                    {
                        path: '/tutorial',
                        name: 'TUTORIAL'
                    },
                    {
                        path: '/forum',
                        name: 'FORUM'
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .idx_nav {
        color: white;
        position: fixed;
        top: 0;
        width: 100vw;
    }

    .idx_nav_ul {
        display: flex;
        justify-content: center;
        height: 60px;
        margin: 0;
        padding: 0;
    }

    .idx_nav_li {
        padding: 0 1rem 0 1rem;
        font-size: 1.2rem;
        display: inline;
        text-align: center;
        line-height: 60px;
    }

    .idx_nav_li a {
        color: white;
        text-decoration: none;
        padding-bottom: 3px;
        transition: all 200ms;
    }

    .idx_nav_li a:hover {
        border-bottom: 3px solid #fafafa;
    }

    .loading {
        background-color: #fafafa;
        position: fixed;
        top: 0;
        margin: 0;
        padding: 0;
        height: 0;
        width: 90vw;
        border: 1.5px solid #c9c9c9;
        border-radius: 1.5px;
        transition: width 200ms;
    }
</style>
