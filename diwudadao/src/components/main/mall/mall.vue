<template>
	<div id="mall" ref="mallPage">
		<Header-com/>
		<div class="wrapper mallwrapper" ref="mallwrapper">
			<div class="content">
				<div class="header">
				</div>
				<Tabbar/>
				<Swiper/>
				<ButtonList/>
				<Flag/>
				<Flag/>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import Header from "./components/header"
	import Swiper from "./components/banner"
	import Tabbar from "./components/tabBar"
	import ButtonList from "./components/buttonList"
	import Flag from "./components/flag"
	import BScroll from "better-scroll";
	export default {
		
		components: {
			"Header-com": Header,
			"Swiper": Swiper,
			"Tabbar": Tabbar,
			"ButtonList": ButtonList,
			"Flag": Flag,
		},
		created() {
			this.handleDateMallButton();
			this.handleDateMallTabbar();
			this.handleDateMallButtonList();
			this.handleDateMallFlag();
		},
		methods: {
			...Vuex.mapActions({
				handleDateMallButton: "mall/handleDateMallButton",
				handleDateMallTabbar: "mall/handleDateMallTabbar",
				handleDateMallButtonList: "mall/handleDateMallButtonList",
				handleDateMallFlag: "mall/handleDateMallFlag",
			})
		},
		
		mounted() {
			this.$nextTick(() => {
				if(!this.scroll) {
					this.scroll = new BScroll(this.$refs.mallwrapper, {})
					console.log(this.scroll)
				}
			})
		},
	}
</script>

<style lang="scss" scoped>
	#mall {
		height: 100%;
		background: #f1f1f1;
	}
	
	#mall>.mallwrapper {
		height:100%;
	}
</style>