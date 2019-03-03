<template>
    <div>
        我的首页信息
        <button @click="handleClick()">我的购物车</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick(){
            this.$router.push("/cart")
        }
    }
}
</script>

<style lang="" scoped>
   
</style>