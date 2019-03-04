import http from "../utils/http"

const DateGoodsInfo =(id)=>http("get","/api/good/goodsdetail/?id="+id+"&from=&mtoken=");
const DateGoodsAll =(id)=>http("get","/api/good/service_info/?product_id="+id);



export default {
    DateGoodsInfo,
    DateGoodsAll
}