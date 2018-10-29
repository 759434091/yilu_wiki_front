<template>
    <div class="pg">
        <div class="markdown" v-html="htmlContent" v-highlight></div>
    </div>
</template>

<script>
    import showdown from 'showdown'

    export default {
        name: "page",
        props: {
            ypId: String
        },
        created() {
            this.$store.commit('startLoading')
            const _this = this
            this.timer = setInterval(() => {
                _this.progress += 10;
                if (_this.progress >= 100) {
                    clearInterval(_this.timer)
                    return;
                }
                _this.$store.commit('setLoadingProgress', _this.progress);
            }, 200)

            const ypId = parseInt(this.ypId)
            this.$request
                .get(`/pages/${ypId}`)
                .then(res => {
                    const converter = new showdown.Converter()
                    this.htmlContent = converter.makeHtml(res.data.ypContent)
                    this.$store.commit('setLoadingProgress', _this.progress);
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    this.$store.commit('stopLoading');
                })
        },
        data() {
            return {
                htmlContent: null
            }
        },
        beforeDestroy() {
            this.$store.commit('stopLoading');
        }
    }
</script>

<style scoped>
    .pg {
        width: 55%;
        margin: auto;
        padding-bottom: 10%;
    }

    @media screen and (max-width: 1366px) {
        .pg {
            width: 70%;
            margin: auto;
        }
    }

    @media screen and (max-width: 1024px) {
        .pg {
            width: 80%;
            margin: auto;
        }
    }


    @media screen and (max-width: 480px) {
        .pg {
            width: 95%;
            margin: auto;
        }
    }
</style>