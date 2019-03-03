import handleHome from "../../api/home"
export default{
    async handleHomeDataButton({commit}){
        let data = await handleHome.DateHomeButton(); 
        commit("handleHomeDataButton",data.data);
    },
    async handleHomeDateSlider({commit}){
        let data = await handleHome.DateHomeSlider();
        commit("handleHomeDateSlider",data.data)
    },
    async handleDateHomeRecommend({commit}){
        let data = await handleHome.DateHomeRecommend();
        commit("handleDateHomeRecommend",data.data)
    },
    async handleDateHomeOtherAds({commit}){
        let data = await handleHome.DateHomeOtherAds();
        commit("handleDateHomeOtherAds",data.data);
    },
    async handleDateHomeArticalAds({commit},params){
        let data = await handleHome.DateHomeArticalAds(params);
        commit("handleDateHomeArticalAds",data.data)
    },
    async handleHomeRegister({commit},params){
        let data = await handleHome.DateRegister(params);
        commit("handleRegister",data)
    },
    async handleHomeLogin({commit},params){
        let data = await handleHome.DateLogin(params);
        commit("handleHomeLogin",data)
    }
}