
export default {
    handleOverseaBanner(state,params){
        state.bannerList=params

    },
    handleOverseaButton(state,params){ 
       state.scrollList=params.button_list
    },
    handleOverseaIndex(state,params){
        state.personList= params.oversea_expert
        state.country= params.hot_country
        state.cata= params.overseas_cata
        state.successcase= params.success_case 
    },
    //详情页 国家
    handelDataCountry(state,params){
        state.countryInfo= params
    },
    handelPeoData(state,params){
        state.people= params
    },
    handelprojectData(state,params){
        state.project= params
    },
}