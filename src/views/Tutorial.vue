<!--suppress ALL -->
<template>
    <div class="ttr">
        <div class="markdown" v-html="htmlContent">

        </div>
    </div>
</template>

<script>
    import showdown from 'showdown'

    export default {
        name: "tutorial",
        data() {
            return {
                ttrPageId: 1,
                htmlContent: '',
                timer: null,
                progress: 0
            }
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

            this.request
                .get(`/pages/${this.ttrPageId}`)
                .then(res => {
                    const converter = new showdown.Converter()
                    this.htmlContent = converter.makeHtml(res.data.ypContent)
                    _this.$store.commit('setLoadingProgress', _this.progress);
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    this.$store.commit('stopLoading');
                })
        },
        beforeDestroy() {
            this.$store.commit('stopLoading');
        }
    }
</script>

<style scoped>
    .ttr {
        width: 55%;
        margin: auto;
    }
</style>
