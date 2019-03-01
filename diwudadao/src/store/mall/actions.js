import handleMall from "../../api/mall"


export default{
	 //lili  执行DateMallButton   注await只能在async的函数中使用
    async handleDateMallButton({commit}){
    	let data = await handleMall.DateMallButton();   	
    	commit("handleDateMallButton",data.data);
    },
    async handleDateMallTabbar({commit}){    	
    	let data = await handleMall.DateMallTabbar();    
    	commit("handleDateMallTabbar",data.data);
    },
    async handleDateMallButtonList({commit}){
    	let data = await handleMall.DateMallButtonList();
    	commit("handleDateMallButtonList",data.data);
    },
    async handleDateMallFlag({commit}){
    	let data = await handleMall.DateMallFlag();
    	commit("handleDateMallFlag",data.data);
    }
}
