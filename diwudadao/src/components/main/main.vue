<template>
    <div id="main">
        <router-view/>
        <Footer-com/>
    </div>
</template>

<script>
import Footer from "../common/footer"
export default {
    components:{
        "Footer-com":Footer
    }
}
</script>

<style lang="" scoped>
    #main{
        height: 100%;
    }
</style>