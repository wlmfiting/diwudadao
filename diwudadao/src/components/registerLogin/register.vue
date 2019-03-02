<template>
  <div class="login">
    <div class="top">
      <div class="return" @click="handleReturn()">
        <img src="../../assets/img/registerlogin/return.png" alt>
      </div>
      <h4>用户注册</h4>
    </div>
    <div class="content">
      <div class="username-box input-box">
        <mt-field placeholder="请输入用户名" state="success" style="text" class="username" v-model="username"></mt-field>
      </div>
      <div class="pwd-style input-box">
        <mt-field placeholder="请输入密码" state="success" type="password" v-model="pwd"></mt-field>
        <span class="iconfont look111" @click="handleLookChange($event)">&#xe7b5;</span>
      </div>
      <span>1111111</span>
      
      <div>111111</div>
      <!-- <div @click="handleLogin()" ref="lognButton" :class="[{'loginButton':index == 0},'yeloginButton','commonLoginButton']">登录</div> -->
      <div class="others">
        <span @click="handleForgetPwd()">忘记密码？</span>
        <span @click="handleToRegister()">用户注册</span>
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
      look:false
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
    }
  },
  methods: {
    handleReturn() {
      this.$router.push("/home");
    },
    handleForgetPwd() {
        this.$router.push("/my/forgetpwd")
    },
    handleToRegister() {
        this.$router.push("/my/register")
    },
    handleLookChange(e){
        alert(1)
        this.look = !this.look;
        console.log(1)
        if(this.look){
            console.log(e);
            e.target.innerHTML = "&#xe661;"
        }else{
            e.target.innerHTML = ";"
        }
    },
    handleLogin() {
        
    },
  }
};
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
  border-bottom: 1px solid rgb(134, 129, 129);
}
.login > .content > .input-box > input {
  border: 0;
  position: absolute;
  bottom: 0.1rem;
  left: 0;
  font-size: 0.32rem;
}
/*     
    .username{
        position: absolute;
        left: 0;
        top: .1rem;
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
        font-size: .32rem !important;
        color: #666;
        background: transparent;
    } */

.login > .content > .pwd-style {
  padding-top: 2.6%;
  position: relative;
  display: flex;
  align-items: center;
}
.login > .content > .input-box > .iconfont {
  position: absolute;
  right: 0;
  font-size: 0.44rem;
  color: #666;
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
.mint-cell:last-child {
  height: 100%;
  display: flex;
}
.mint-cell-wrapper {
  font-size: 0.3rem !important ;
}
.mint-field-core {
  font-size: 0.3rem !important;
}
.yeloginButton{
    background: #c1a166;
}
</style>