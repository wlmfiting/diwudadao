import http from "../utils/http"

const DateGoodsInfo =(id)=>http("get","/api/good/goodsdetail/?id="+id+"&from=&mtoken=");




export default {
    DateGoodsInfo
}