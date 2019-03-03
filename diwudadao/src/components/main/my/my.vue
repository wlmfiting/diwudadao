<template>
    <div>
        <Login-com v-if="!tokenFlag"/>
        <MyHomePage-com v-else if="tokenFlag"/>
    </div>
</template>

<script>
import Register from "../../registerLogin/register"
import Login from "../../registerLogin/login"
import MyHomePage from "./myHomePage"
import Cookie from "js-cookie"
export default {
    data() {
        return {
            tokenFlag:false
        }
    },
    components:{
        "Login-com":Login,
        "MyHomePage-com":MyHomePage
    },
    methods: {
        judgeToken(){
            let token = Cookie.get("X-token");
            if(token){
                this.tokenFlag = true;
            }else{
                this.tokenFlag = false;
            }
        }
    },
    created () {
        this.judgeToken();
    }
}
</script>

<style lang="sass" scoped>
    
</style>