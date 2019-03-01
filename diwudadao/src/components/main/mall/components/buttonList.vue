<template>
	<div class="buttonList">
		<ul>
			<li v-for="(item,index) in buttonList">
				<router-link :to="item.ad_link">
                   <img :src="item.ad_code" alt="">
                   <span>{{item.ad_name}}</span>
               </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	
	export default{
		computed:{
			...Vuex.mapState({
				buttonList:state=>state.mall.mallButtonList
			})
		},
	}
</script>

<style scoped lang="scss">
	  .buttonList{
        width: 100%;
        height: 1.5rem;
        background: #f2f2f2;
    }
    .buttonList>ul{
        width: 100%;
        height: 100%;
        
    }
    li{
        width: 20%;
        height: 100%;
        float: left;
    }
    a{
        width: 100%;
        height: 100%;
        color: #7e8c8d;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        width: .5rem;
    }
    a>span{
        padding-top: 8%;
    }
</style>