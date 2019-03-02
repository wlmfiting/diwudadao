<template>
	<div class="tabBar wrapper" ref="tabBar">
		<ul class="content">
			<li v-for="(item,index) in tabBar">{{item.cata_name}}</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	//让她动引入下better-scroll
	import BScroll from "better-scroll";
	export default{
		computed:{
			...Vuex.mapState({
				tabBar:state=>state.mall.mallTabbar
			})
		},
		//监听下数据变化 下面用下判断的方法    其实用下延时器也可以
		updated(){
			if(!this.scroll){
				this.scroll = new BScroll(this.$refs.tabBar,{
					scrollX:true
				})
			}
		},
	}
</script>

<style>
	.tabBar{
		width:100%;
		height:.8rem;
		background:#fff;
	}
	.tabBar>ul{
		width:max-content;
		height:100%;
		display:flex;
		align-items:center;
		flex-wrap:nowrap;
	}
	.tabBar>ul>li{
		padding:0 .5rem;
		flex-shrink: 0;
	}
</style>