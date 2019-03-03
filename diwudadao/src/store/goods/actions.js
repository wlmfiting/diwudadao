import Goods from "../../api/goods"


export default {
	async handleGoodInfo({commit},params){
		let data=await Goods.DateGoodsInfo(params)
		commit('handleGoodInfo',data.data)
	}
}
