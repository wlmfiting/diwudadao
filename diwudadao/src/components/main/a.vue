<template>
  <div class="login" id="login">
    <div class="top">
      <div class="return" @click="handleReturn()">
        <img src="../../assets/img/registerlogin/return.png" alt>
      </div>
      <h4>注册账号</h4>
    </div>
    <div class="content" id="content">
      <div class="username-box input-box">
        <mt-field placeholder="请输入用户名" type="text"  state="" class="username" v-model="username" width="90%"></mt-field>
      </div>
      <div class="pwd-style input-box">
        <mt-field placeholder="请输入密码" :type="type"  state="" v-model="pwd" ref="pwd" class="pwd"></mt-field>
        <span class="iconfont look" @click="handleLookChange($event)">&#xe7b5;</span>
      </div>
      <div @click="handleLogin()" ref="lognButton" :class="[{'loginButton':index == 0},'yeloginButton','commonLoginButton']">注册</div>
      <div class="others">
        <span @click="handleToLogin()">已存在账号？请登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Field } from "mint-ui";
import "mint-ui/";
export default {
  data() {
    return {
      username: "",
      pwd: "",
      index:0,
      type:"password",
      typeBool:true
    };
  },
  watch: {
    username(){
        if(this.username && this.pwd){
            this.index = 1;
        }else{
            this.index = 0;
        }
    },
     pwd(){
        if(this.username && this.pwd){
            this.index = 1;
        }else{
            this.index = 0;
        }
    },
  },
    
  methods: {
    handleReturn() {
      this.$router.push("/home");
    },
    handleForgetPwd() {
        this.$router.push("/login/forgetpwd")
    },
    handleToLogin() {
        this.$router.push("/login")
    },
     handleLookChange(e){   //改变input输入类型
        this.typeBool = !this.typeBool;
        if(this.typeBool){
            e.target.innerHTML = "&#xe661;"
            this.type = "text"
        }else{
            e.target.innerHTML = "&#xe7b5;"
             this.type = "password";
        }
    },
    handleLogin() {

    },
  }
};

// 注册 http://localhost:8080/dao/find/dao?uname=nan&pword=123
// nice 16:01:01
// 登陆 http://localhost:8080/dao/find/da?uname=nan&pword=123
</script>

<style lang="" scoped>
 .login {
  width: 100%;
  height: 100%;
  background: #fff;
  font-family: \\9ed1\4f53;
}
.login > .top {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
.login > .top > .return {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
}
.login > .top > h4 {
  vertical-align: baseline;
  text-align: center;
  font-weight: normal;
  font-size: 0.32rem;
  color: #333;
}

.login > .content {
  border-top: 0.01rem solid #999;
  padding-top: 0.96rem;
}

.login > .content > .input-box {
  height: 0.8rem;
  margin: 0 0.8rem;
  position: relative;
}

.login > .content > .input-box > input {
  border: 0;
  position: absolute;
  bottom: 0.1rem;
  left: 0;
  font-size: 0.32rem;
}
 #login>#content>.input-box>.mint-field{
  font-size: .3rem;
  height:100%;
  width: 100%;
} 

.input-box>.mint-field>.mint-cell-wrapper{
  font-size: .3rem;
}
.login > .content > .pwd-style {
  position: relative;
  display: flex; 
   align-items: center;
}
.login > .content > .input-box > .iconfont {
  position: absolute;
  right: 0;
  font-size: 0.44rem;
  color: #666;
  margin-left: 1rem
}
.login > .content >.commonLoginButton{
    margin: 0 0.8rem;
    margin-top: 8%;
    height: 0.8rem;
    border-radius: 0.08rem;
    font-size: 0.3rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login > .content > .loginButton {
  background: #ccc;
  
}
.login > .content > .others {
  margin: 0.4rem 0.8rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.24rem;
  color: #999;
}
.yeloginButton{
    background: #c1a166;
} 
</style>