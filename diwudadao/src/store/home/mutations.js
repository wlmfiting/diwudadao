export default{
    handleHomeDataButton(state,params){
        state.navlist = params.list;
    },
    handleHomeDateSlider(state,params){
        state.bannerSlider = params;
    },
    handleDateHomeRecommend(state,params){
        state.recommend = params
    },
    handleDateHomeOtherAds(state,params){
        state.new_register = params.new_register;
        state.vip_member = params.vip_member;
        state.five_example = params.five_example;
        state.buy_list = params.buy_list;
        state.article_list = params.article_list;
        state.current_topic = params.current_topic;
        state.flash_sales = params.flash_sales;
        state.newly_added = params.newly_added;
    },
    handleDateHomeArticalAds(state,params){
        if(!state.artical_others_ads.ads_info){
            state.artical_others_ads = params;
            
        }else{
            state.artical_others_ads = {...state.artical_others_ads,...params};
            state.artical_others_ads.ads_info = [...state.artical_others_ads.ads_info,...params.ads_info]
        }
        
        console.log(state.artical_others_ads)
        
        state.homePage ++;
    }
}