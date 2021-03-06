import oversea from "../../api/overseaService"
export default{
    async handleOverseaBanner({commit}){
        let data = await oversea.DateOverseaBanner(); 
        commit("handleOverseaBanner",data.data);
    },
    async handleOverseaButton({commit}){
        let data = await oversea.DateOverseabuttons(); 
        commit("handleOverseaButton",data.data);
    },
    async handleOverseaIndex({commit}){
        let data = await oversea.DateOverseaindex(); 
        commit("handleOverseaIndex",data.data);
    },
    async handelDataCountry({commit},params){
        let data = await oversea.DataOverCountry(params);
        commit('handelDataCountry',data.data)
    },
    async handelPeoData({commit},params){
        
        let data = await oversea.DataOverPeople(params);
        //console.log(data)
        commit('handelPeoData',data.data)
    },
    async handelprojectData({commit},params){
        
        let data = await oversea.DataOverProjec(params);
        commit('handelprojectData',data.data)
    },
}