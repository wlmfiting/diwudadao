<template>
	<div id="box">
		<div class="swiper-container banner-contation" ref="bannerContainer">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in bannerSlider">
					<img :src="item.silde_original" alt="" />
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination banner-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.css";
	import Vuex from "vuex";
	export default {
		computed: {
			...Vuex.mapState({
				bannerSlider: state => state.mall.bannerSlider,
			})
		},
		updated() {
			if(!this.swiper) {
				this.swiper = new Swiper(this.$refs.bannerContainer, {
					autoplay: {
						disableOnInteraction: false
					},
					//分页器配置项
					pagination: {
						el: '.banner-pagination',
					},
				});
			}
		},
		//		mounted(){
		//			console.log(2,this.bannerSlider)
		//		}
	}
	//  mounted() {
	//      var swiper = new Swiper(this.$refs.bannerContainer, {
	//          loop:true,
	//          observer:true,
	//          pagination: {
	//              el: '.banner-pagination',
	//              clickable: true,
	//          },
	//          autoplay: {
	//              delay: 2500,
	//              // disableOnInteraction: false,
	//          },
	//      });
</script>

<style scoped>

</style>