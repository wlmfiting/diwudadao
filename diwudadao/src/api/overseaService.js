import http from "../utils/http"

const DateOverseaBanner =()=>http("get","/api/overseas/slide");
const DateOverseabuttons =()=>http('get','./api/overseas/buttons_info')
const DateOverseaindex =()=>http('get','./api/overseas/overseas_index')


export default {
    DateOverseaBanner,
    DateOverseabuttons,
    DateOverseaindex
}