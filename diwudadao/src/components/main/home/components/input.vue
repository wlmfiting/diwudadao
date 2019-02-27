<template>
    <div class="search-home">
        <div class="search">
            <div class="left">
                <input type="text">
                <div class="input-content">
                    <i class="iconfont">&#xe627;</i>
                    <!-- <span></span> -->
                    <img src="../../../../assets/img/home/5luxpc.png" alt="">
                </div>
            </div>
            <router-link to="" class="iconfont">&#xe613;</router-link>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
    .search-home{
        width: 100%;
        height: .88rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
    .search{
        width: max-content;
    }
    .left{
        float: left;
        position: relative;
    }
    .left>input{
        background: #ffffff;
        opacity: .6;
        width: 6rem;
        height: .6rem;
        border-radius: .2rem;
    }
    .input-content{
        position: absolute;
        left:.3rem;
        top:.1rem;
    }
    .input-content>img{
        width: 3.5rem;
        margin-top: -2rem;
        margin-left: -.3rem;
    }
    .iconfont{
        font-size: .4rem;
        color: #fff;
    }
    .search>.iconfont{
        margin-left: .3rem;
        font-size: .5rem;
    }
</style>
