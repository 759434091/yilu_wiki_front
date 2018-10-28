<template>
    <div class="not-found">
        <h2 class="brand">暂未开放，敬请期待</h2>
    </div>
</template>

<script>
    export default {
        name: "Forum"
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