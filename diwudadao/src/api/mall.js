import http from "../utils/http"

//商城banner接口
//https://apim.restful.5lux.com.cn/shop/slide?mtoken= 
const DateMallButton =(params)=>http("get","/api/shop/slide?mtoken=",params);
const DateMallTabbar =(params)=>http("get","/api/shop/catalist",params);

export default{
	DateMallButton,
	DateMallTabbar,
}
