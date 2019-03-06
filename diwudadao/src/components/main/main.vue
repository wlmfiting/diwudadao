<template>
    <div id="main">
        <router-view/>
        <Footer-com v-if="!this.$route.meta.footerflag"/>
    </div>
</template>

<script>
import Footer from "../common/footer"
export default {
    components:{
        "Footer-com":Footer
    },
    created () {
        console.log(this.$route.meta.footerflag)
    }
}
</script>

<style lang="" scoped>
    #main{
        height: 100%;
    }
</style>