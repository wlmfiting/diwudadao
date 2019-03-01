<template>
	<div id="mall">
		<div class="header">
			<Header-com/>
		</div>
		<Swiper/>
		<Tabbar/>
		<>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import Header from "./components/header"
	import Swiper from "./components/banner"
	import Tabbar from "./components/tabBar"
	export default {
		components: {
			"Header-com": Header,
			"Swiper": Swiper,
			"Tabbar":Tabbar,
		},
		created() {
			this.handleDateMallButton();
			this.handleDateMallTabbar();
		},
		methods: {
			...Vuex.mapActions({
				handleDateMallButton: "mall/handleDateMallButton",
				handleDateMallTabbar: "mall/handleDateMallTabbar",
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