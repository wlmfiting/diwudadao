<template>
	<div class="box">
		<div class="swiper-container flag-contation" ref="flagContainer">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in mallFlag">
					<div class="datu">
						<img :src="item.img_url" alt="" />
						<p class="p_text">{{item.title}}</p>
					</div>
					<div class="xiaotu">
						<div v-for="(its,indexs) in item.store_infos" class="info">
							<img :src="its.store_thumb" alt="" />
							<!--<p class="p_text1">{{its.store_title}}</p>-->
						</div>
					</div>
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
		height: 6.6rem;
	}
	
	.swiper-container>.swiper-wrapper {
		width: 100%;
		height: 100%;
	}
	
	.swiper-slide>.datu {
		width: 100%;
		height: 4.18rem;
		position: relative;
	}
	
	.swiper-slide>.datu>img {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.swiper-slide>.datu>.p_text {
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
	
	.swiper-slide>.xiaotu {
		width: 100%;
		height: 2.42rem;
		display: flex;
	}
	
	.swiper-slide>.xiaotu>.info {
		display: flex;
	}
	
	.swiper-slide>.xiaotu>.info>img {
		margin-left: .08rem;
		width: 2.42rem;
		height: 2.42rem;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}
	
	.swiper-slide>.xiaotu>.p_text1 {
		display: flex;
		position: absolute;
		left: 0;
		bottom: 0;
		font-size: .26rem;
		color: #fff;
		width: 100%;
		padding-bottom: .01rem;
		padding-top: .64rem;
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