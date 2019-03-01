<template>
	<div class="tabBer">
		<ul>
			<li v-for="(item,index) in tabBar">{{item.cata_name}}</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				tabBar:state=>state.mall.mallTabbar
			})
		}
	}
</script>

<style>
</style>