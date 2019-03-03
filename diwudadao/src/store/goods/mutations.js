export default {
    handleGoodInfo(state,params){
        
        state.goodsbanner=params.goods_gallery
        state.goodsprice=params.user_price_info
        state.goodsshui=params.share_title
        state.goodsment=params.installment_str

        state.goodstogo1=params.installment_info
        state.goodstogo2=params.service_info
        state.goodstogo3=params.para_arr
        state.goodstogo4=params.sku

       

        console.log(1,state.goodsment)
    }
}