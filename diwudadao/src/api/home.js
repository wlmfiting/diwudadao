import http from "../utils/http"

const DateHomeButton =()=>http("get","/api/index/index_button");
const DateHomeSlider = (params)=>http("get","/api/index/index_slider",params);
const DateHomeRecommend = (params)=>http("get","/api/index/columu_recommend",params);
const DateHomeOtherAds = (params) =>http("get","/api/index/other_advert",params);
const DateHomeArticalAds = (params) =>http("get","/api/index/article_list_ads",params);

export default{
    DateHomeButton,
    DateHomeSlider,
    DateHomeRecommend,
    DateHomeOtherAds,
    DateHomeArticalAds
}