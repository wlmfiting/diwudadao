<template>
    <div>
    <div class="success">
        <div class="tittle">
            <p>{{email.sucess_title}}</p>
            <p>查看更多 ></p>
        </div>
        <p class="tittle_en">{{email.sucess_en_title}}</p> 
        <div v-for="item in email.sucess_case_article" class="caseinfo">
            <div class="caseimg">
                <img :src="item.thumb">
            </div>
            <div class="casefont">
                <p class="casefontinfo">{{item.title}}</p>
                <div class="read"><i class="iconfont">&#xe661;</i><span>{{item.views}}</span><i class="iconfont">&#xe611;</i><span>{{item.liked}}</span></div>
            </div>
        </div>
    </div>      
</div>
</template>
<script>
import Vuex from 'vuex'
export default {
    computed: {
        ...Vuex.mapState({
        case: state => state.overseaService.successcase,
        caseList: state => state.overseaService.successcase.sucess_case_article,
        }),      
    },
    props: {
        email:Object
    }  
}
</script>
<style scoped>
    .success{width: 100%;background: #fff;padding: .4rem;margin-top: .3rem;padding-bottom:1rem }
    .tittle{width: 100%;display: flex;justify-content: space-between;padding-bottom: .1rem;font-size: .3rem;font-weight: 700;}
    .tittle_en{padding-bottom: .5rem;color: #999;}
    .caseinfo{display: flex;padding: .3rem 0;border-bottom:2px solid #f2f2f2 }
    .caseimg>img{width: 2.24rem;margin-right: .4rem}
    .casefontinfo{font: 545 .3rem/1.4 '微软雅黑'}
    .read{padding: .3rem 0 0 0}
    .read span{padding-left:.15rem }
    .read i:nth-of-type(2){padding-left:.2rem }
</style>