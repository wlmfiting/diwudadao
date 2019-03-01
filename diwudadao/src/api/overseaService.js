import http from "../utils/http"

const DateOverseaBanner =()=>http("get","/api/overseas/slide");
const DateOverseabuttons =()=>http('get','/api/overseas/buttons_info')
const DateOverseaindex =()=>http('get','/api/overseas/overseas_index')
const DataOverCountry =(params)=>http('post','/api/ovscountry/ovscountry_detail',params)


export default {
    DateOverseaBanner,
    DateOverseabuttons,
    DateOverseaindex,
    DataOverCountry
}