<template>
	<div class="box">
		<div class="swiper-container flag-contation" ref="flagContainer">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in mallFlag">
					<img :src="item.img_url" alt="" />
					<p class="p_text">{{item.title}}</p>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination flag-pagination"></div>
		</div>
		<div class="all_flag">
			<a href="##" class="all_flag_link">产看所有旗舰店></a>
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
				mallFlag: state => state.mall.mallFlag,
			})
		},
		//轮播
		updated() {
			if(!this.swiper) {
				this.swiper = new Swiper(this.$refs.flagContainer, {
					//分页器配置项
					pagination: {
						el: '.flag-pagination',
					},
				});
			}
		},
		//		mounted(){
		//			console.log(2,this.bannerSlider)
		//		}
	}
</script>

<style scoped>
	.swiper-container {
		width: 100%;
		height: 4.2rem;
	}
	
	.swiper-wrapper {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide>img {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.swiper-slide>.p_text {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1.35rem;
		padding-top: .05rem;
		font-size: .48rem;
		color: #fff;
		text-align: center;
		background: -webkit-gradient(linear, 0 0, 0 bottom, from(transparent), to(rgba(0, 0, 0, .7)));
	}
	
	.box>.all_flag {
		height: .72rem;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: .2rem;
	}
	
	.box>.all_flag>a {
		width: 2.7rem;
		height: .48rem;
		background: #333;
		text-align: center;
		line-height: .48rem;
		color: #fff;
		font-size: .28rem;
		border-radius: .1rem;
	}
</style>