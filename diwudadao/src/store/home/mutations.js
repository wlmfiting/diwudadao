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
        console.log(state,params)
        state.content = params.content;
        state.new_register = params.new_register;
        state.vip_member = params.vip_member;
        state.five_example = params.five_example;
        state.buy_list = params.buy_list;
        state.article_list = params.article_list;
    }
}