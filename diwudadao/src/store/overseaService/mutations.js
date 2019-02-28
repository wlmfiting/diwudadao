
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
       // console.log(state.successcase)
       
      
    },
}