export default {
    handleGoodInfo(state,params){
        
        state.goodsbanner=params.goods_gallery
        state.goodsprice=params.user_price_info
        state.goodsshui=params.share_title
        state.goodsment=params.installment_str
        state.goodsImg=params.shara_image

        state.goodstogo1=params.installment_info
        state.goodstogo2=params.service_info
        state.goodsto0=params.sku.all[0]
        state.goodsto1=params.sku.all[1]
        state.goodsparaarr=params.para_arr

      
    }
}