<template>
	<div class="box">
		<!--时尚发布厅-->
		<div class="com_title">
			<p class="name">{{fashion_video.title}}</p>
			<div class="en_name">
				<span class="line"></span>
					<p class="text">{{fashion_video.title_en}}</p>
				<span class="line"></span>	
			</div>			
		</div>
		<div class="adv_fir">			
				<img src="http://img550.5lux.com.cn/2018/03/20/jk/152154672489_369x456.png" alt="" />
				<!--<h3>意大利顶级珠宝——Bvlgari宝格丽</h3>-->
		</div>
		<div class="adv_fir">		
				<img src="http://img550.5lux.com.cn/2019/02/22/qr/155082865851_668x380.jpg" alt="" />
		</div>
		
		<!--海外馆-->
		<div class="com_title">
			<p class="name">{{oversea_recommend.title}}</p>
			<div class="en_name">
				<span class="line"></span>
					<p class="text">{{oversea_recommend.title_en}}</p>
				<span class="line"></span>	
			</div>			
		</div>
		<div class="adv_fir">
			<div class="haiwai">
				<img src="http://img550.5lux.com.cn/2018/03/12/vw/152084229223_750x422.jpg" alt="" />
				<!--<p v-for="(item1,index) in list1">{{item1[0].ad_name}}</p>-->
				<!--<h3>Louis Vuitton/LV路易.威登</h3>-->
			</div>
		</div>
		
		<!--会员专享-->
		<div class="com_title">
			<p class="name">{{vip_special.title}}</p>
			<div class="en_name">
				<span class="line"></span>
					<p class="text">{{vip_special.title_en}}</p>
				<span class="line"></span>	
			</div>			
		</div>
		<div class="adv_fir">
			<div  class="huiyuan">				
				<img src="http://img550.5lux.com.cn/2019/02/27/uv/155125132318_750x422.jpg" alt="" />
				<!--<p v-for="(item2,index) in list2">{{item2[0].ad_name}}</p>-->
			</div>
		</div>
		
		
		<!--最新上架-->
		<div class="com_title">
			<p class="name">{{new_recommend.title}}</p>
			<div class="en_name">
				<span class="line"></span>
					<p class="text">{{new_recommend.title_en}}</p>
				<span class="line"></span>	
			</div>			
		</div>
		<div class="adv_fir">
			<div class="top">
				<img src="http://img550.5lux.com.cn/2019/03/04/uv/155166677234_369x456.jpg" alt="" />
				<img class="top1" src="http://img550.5lux.com.cn/2019/03/04/fg/155166677251_369x456.jpg" alt="" />
			</div>
		</div>
		<div class="adv_fir">
			<div class="top">
				<img src="http://img550.5lux.com.cn/2019/02/11/ef/154985223614_369x456.jpg" alt="" />
				<img class="top1" src="http://img550.5lux.com.cn/2019/02/11/jk/154985223686_369x456.jpg" alt="" />	
			</div>
		</div>
		
		
		<!--旗舰店-->
		<div class="com_title">
			<p class="name">{{top5flag.title}}</p>
			<div class="en_name">
				<span class="line"></span>
					<p class="text">{{top5flag.title_en}}</p>
				<span class="line"></span>	
			</div>			
		</div>
		<div class="adv_fir">
			<a href="http://mobile.5lux.com/flagship/detail/50">
				<img src="http://img.5lux.com.cn/511/avatar/2016/05/04/14623679718768.jpg" alt="" />
			</a>
		</div>
		
		<div class="adv_fir">
			<a href="http://mobile.5lux.com/flagship/detail/39">
				<img src="http://img.5lux.com.cn/511/avatar/2015/11/19/14479049586771.jpg" alt="" />
			</a>
		</div>
		
		<div class="adv_fir">
			<a href="http://mobile.5lux.com/flagship/detail/38">
				<img src="http://img.5lux.com.cn/511/avatar/2016/05/04/14623674103465.jpg" alt="" />
			</a>
		</div>
		
		<div class="adv_fir">
			<a href="http://mobile.5lux.com/flagship/detail/36">
				<img src="http://img.5lux.com.cn/511/avatar/2016/05/04/14623671284485.jpg" alt="" />
			</a>
		</div>
		
		<div class="adv_fir">
			<a href="http://mobile.5lux.com/flagship/detail/34">
				<img src="http://img.5lux.com.cn/511/avatar/2016/05/04/14623673093684.jpg" alt="" />
			</a>
		</div>
		
		<div class="adv_fir">
			<a href="http://mobile.5lux.com/flagship/detail/28">
				<img src="http://img.5lux.com.cn/511/avatar/2016/05/04/14623665946931.jpg" alt="" />
			</a>
		</div>
		
		<div class="adv_fir">
			<a href="http://mobile.5lux.com/flagship/detail/15">
				<img src="http://img.5lux.com.cn/511/avatar/2015/11/19/14478997359229.jpg" alt="" />
			</a>
		</div>
		
		<div class="adv_fir">
			<a href="http://mobile.5lux.com/flagship/detail/3">
				<img src="http://img.5lux.com.cn/511/avatar/2016/05/04/14623665121091.jpg" alt="" />
			</a>
		</div>
		
		
		<!--时尚指南-->
		<div class="com_title zhinan">
			<p class="name">{{fashion_guide.title}}</p>
			<div class="en_name">
				<span class="line"></span>
					<p class="text">{{fashion_guide.title_en}}</p>
				<span class="line"></span>	
			</div>			
		</div>
		<div class="adv_fir">
			<a href="http://m.5lux.com/promote/special/4691">
				<img src="http://img550.5lux.com.cn/2019/03/05/uv/155176663464_750x422.jpg" alt="" />
			</a>
		</div>
		
		
		<!--<div class="tabBar wrapper" ref="tabBar" >
			<ul class="content" >
				<li v-for="(item4,index) in list4">
					<p>{{item4}}</p>
					<img :src="item4.list" alt="" />
				</li>
			</ul>
		</div>-->
		
	</div>
	
</template>

<script>import Vuex from 'vuex'
import BScroll from "better-scroll";
export default {
	data() {
		return {
			list: [],
			list1: [],
			list2: [],
			list3: [],
			//				list4:[],
//			list4:[],
		}
	},
	created() {
		this.list = this.fashion_video.list;
		this.list1 = this.oversea_recommend.list;
		this.list2 = this.vip_special.list;
		this.list3 = this.new_recommend.list;
		//			this.list3 = this.top5flag.list;
		this.list4 = this.product_info;
		console.log(6,this.product_info)
		console.log(7,this.product_info)
		
	},
	computed: {
		...Vuex.mapState({
			fashion_video: state => state.mall.fashion_video,
			oversea_recommend: state => state.mall.oversea_recommend,
			vip_special: state => state.mall.vip_special,
			new_recommend: state => state.mall.new_recommend,
			top5flag: state => state.mall.top5flag,
			fashion_guide: state => state.mall.fashion_guide,
			product_info :state => state.mall.product_info,
		})
	},
	//监听下数据变化 下面用下判断的方法    其实用下延时器也可以
		updated(){
//			if(!this.scroll){
//				this.scroll = new BScroll(this.$refs.tabBar,{
//					scrollX:true
//				})
//			}
			
		},
}

</script>

<style>.com_title {
	height: 1rem;
	color: #333;
}

.com_title>.name {
	font-size: .32rem;
	font-weight: 700;
	padding: .16rem 0 .1rem;
	text-align: center;
}

.com_title>.en_name {
	font-size: .26rem;
	padding-bottom: .16rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.com_title>.en_name>.line {
	height: .02rem;
	background: #333;
	width: .4rem;
}

.com_title>.en_name>.text {
	padding: 0 .1rem;
}

.box>.adv_fir {
	width: 100%;
	height: 4.22rem;
	margin-top: 0.05rem;
}

.box>.adv_fir>img {
	width: 100%;
	height: 4.22rem;
}


/*.box>.adv_fir>h3{
		
		font-size: .26rem;
   	 	align-items: center;
    	z-index: 500;
	}*/

.box>.adv_fir>.haiwai>img {
	width: 100%;
	height: 4.22rem;
}

.box>.adv_fir>.top {
	display: flex;
	height: 4.6rem;
}

.box>.adv_fir>.top>img {
	width: 3.7rem;
	height: 4.6rem;
}

.box>.zhinan {
	margin-top: .3rem;
}
.box>.tabBar{
	width:100%;
	height:3rem;
	background:red;
}
</style>