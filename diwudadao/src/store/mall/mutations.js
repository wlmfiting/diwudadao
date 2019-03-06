export default{
    handleDateMallButton(state,data){
    	state.bannerSlider = data;
    },
    handleDateMallTabbar(state,data){   	
    	state.mallTabbar = data;
    },
    handleDateMallButtonList(state,data){
    	state.mallButtonList = data.button_list;
    	console.log(5,data.button_list)
    },
    handleDateMallFlag(state,data){
    	state.mallFlag = data;
    	
    },
    handleDateMallAll(state,data){
    	state.fashion_video = data.fashion_video;
    	console.log(1,data.fashion_video)
    	state.oversea_recommend = data.oversea_recommend;
    	console.log(2,data.oversea_recommend)
    	state.vip_special = data.vip_special;
    	console.log(3,data.vip_special)
    	state.new_recommend = data.new_recommend;
    	state.top5flag = data.top5flag;
    	state.fashion_guide = data.fashion_guide;
    	state.product_info = data.fashion_guide.list;
    	console.log(4,state.product_info)
    },
}