import Goods from "../../api/goods"


export default {
	async handleGoodInfo({commit,state},params){
		let data=await Goods.DateGoodsInfo(params)
		let date=await Goods.DateGoodsAll(params)
		state.goodAll=date.data
		commit('handleGoodInfo',data.data)
	}
}
