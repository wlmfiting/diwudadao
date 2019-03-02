<template>
    <div class="que">
        <h3>互动问答</h3>
        <div v-for="item in email" class="stiong">
        <p>{{item.question}}</p>
        <p>{{item.reply_cont}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        email:Array
    }
}
</script>

<style lang="" scoped>
    .que{background: #fff;margin-top:.2rem;padding: .3rem;padding-bottom:1rem }
    h3{padding: .4rem 0;font-size: .35rem;}
    .stiong{padding: .2rem 0;font-size:.28rem;border-bottom:2px solid #f2f2f2 }
    .stiong>p:nth-of-type(1){padding: .2rem 0;}
</style>