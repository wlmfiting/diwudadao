<template>
	<div id="mall">
		<div class="header">
			<Header-com/>
		</div>
		<Tabbar/>
		<Swiper/>
		<ButtonList/>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import Header from "./components/header"
	import Swiper from "./components/banner"
	import Tabbar from "./components/tabBar"
	import ButtonList from "./components/buttonList"
	export default {
		components: {
			"Header-com": Header,
			"Swiper": Swiper,
			"Tabbar":Tabbar,
			"ButtonList":ButtonList,
		},
		created() {
			this.handleDateMallButton();
			this.handleDateMallTabbar();
			this.handleDateMallButtonList();
		},
		methods: {
			...Vuex.mapActions({
				handleDateMallButton: "mall/handleDateMallButton",
				handleDateMallTabbar: "mall/handleDateMallTabbar",
				handleDateMallButtonList:"mall/handleDateMallButtonList",
			})
		},
	}
</script>

<style lang="scss" scoped>
	#mall {
		height: 100%;
		background: #f1f1f1;
	}
	
	#mall>.header {
		width: 100%;
		height: 0.88rem;
		background: black;
	}
</style>