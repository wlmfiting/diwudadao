export default{
    handleDateMallButton(state,data){
    	state.bannerSlider = data;
    },
    handleDateMallTabbar(state,data){   	
    	state.mallTabbar = data;
    },
    handleDateMallButtonList(state,data){
    	state.mallButtonList = data.button_list;
    },
    handleDateMallFlag(state,data){
    	state.mallFlag = data;
    }
}