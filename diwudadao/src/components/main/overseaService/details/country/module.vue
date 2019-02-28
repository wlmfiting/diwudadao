<template>
    <div>
        <div v-for="item in email">
        <div class="success">
            <div class="tittle">
                <p>{{item.cata_name}}</p>
                <p>查看更多 ></p>
            </div>
            <div v-for="list in item.project_info" class="caseinfo">
                <div class="caseimg">
                    <img :src="list.project_img">
                </div>
                <div class="casefont">
                    <p class="casefontinfo">{{list.project_title}}</p>
                    <div class="hosefont2">{{list.flag}}:<span>{{list.market_price}}</span></div>
                </div>
            </div>
        </div>
    </div>      
    <p>{{email}}</p>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    props:{
        email:Array
    },
}
</script>

<style lang="" scoped>
    .success{width: 100%;background: #fff;padding: .4rem;margin-top: .3rem; }
    .tittle{width: 100%;display: flex;justify-content: space-between;padding-bottom: .1rem;font-size: .3rem;font-weight: 700;}
    .tittle_en{padding-bottom: .5rem;color: #999;}
    .caseinfo{display: flex;padding: .3rem 0;border-bottom:2px solid #f2f2f2 }
    .caseimg>img{width: 2.24rem;margin-right: .4rem}
    .casefontinfo{font: 545 .3rem/1.4 '微软雅黑';}
    .read{padding: .3rem 0 0 0}
    .read span{padding-left:.15rem }
    .read i:nth-of-type(2){padding-left:.2rem }
    .hosefont2{color: #999;font-size: .28rem;bottom: 0;position: absolute;}
    .casefont{position: relative;}
    .hosefont2>span{color:cornflowerblue;}
</style>