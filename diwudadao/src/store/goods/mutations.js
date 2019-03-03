export default {
    handleGoodInfo(state,params){
        
        state.goodsbanner=params.goods_gallery
        state.goodsprice=params.user_price_info
        state.goodsshui=params.share_title
        console.log(1,state.goodsbanner)
    }
}