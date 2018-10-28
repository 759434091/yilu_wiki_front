<template>
    <div class="not-found">
        <button @click="doLogin()">Login</button>
        <h2 class="brand">暂未开放，等王志远</h2>
    </div>
</template>

<script>
    export default {
        name: "forum",
        data() {
            return {
                clientId: '6f6caa3910db2c0b8284',
                redirectURI: 'http://www.yilustudio.cn/github_callback/',
                scopes: 'user',
                state: 'yilu-studio'
            }
        },
        methods: {
            doLogin() {
                window.location.href = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectURI}&scope=${this.scopes}&state=${this.state}`
            }
        }
    }
</script>

<style scoped>
    .not-found {
        display: flex;
        height: 100vh;
        width: 100vw;
        overflow-y: hidden;
        justify-content: center;
        align-items: center;
    }

    .brand {
        margin: 0;
        font-size: 5rem;
        text-align: center;
        font-weight: normal;
        color: #fafafa;
    }

    @media screen and (max-width: 480px) {
        .brand {
            font-size: 2rem;
        }
    }
</style>