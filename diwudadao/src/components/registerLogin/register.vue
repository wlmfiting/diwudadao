<template>
  <div class="register" id="register">
    <div class="top">
      <div class="return" @click="handleReturn()">
        <img src="../../assets/img/registerlogin/return.png" alt>
      </div>
      <h4>用户注册</h4>
    </div>
    <div class="content" id="content">
      <div class="username-box input-box">
        <mt-field placeholder="请输入用户名" type="text"  :state="stateuser" class="username" v-model="username" @blur.native.capture="userBlur($event)" width="90%"></mt-field>
      </div>
      <div class="pwd-style input-box">
        <mt-field placeholder="请输入密码" :type="type"  :state="statepwd" v-model="pwd" ref="pwd" @blur.native.capture="pwdBlur" class="pwd"></mt-field>
        <span class="iconfont look" @click="handleLookChange($event)">&#xe7b5;</span>
      </div>
      <div @click="handleRegisterClick()" ref="registerButton" :class="[{'registerButton':index == 0},'yeRegisterButton','commonRegisterButton']">注册</div>
      <div class="others">
        <span @click="handleToRegister()">已注册过？请登录~</span>
      </div>
    </div>
    <!-- 弹出框 -->
    <mt-popup v-model="flag" position="top" popup-transition="popup-fade">注册成功</mt-popup>
  </div>
</template>

<script>
import { Field } from "mint-ui";

import "mint-ui/";
import Vuex from "vuex"
import { Popup } from 'mint-ui';
import axios from "axios"
import "./registerlogin.scss"
export default {
  data() {
    return {
      username: "",
      pwd: "",
      index:0,
      type:"password",
      look:false,
      flag:false,  //是否弹出框弹出
      stateuser:"",   //判断input状态
      statepwd:""
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
  computed: {
    ...Vuex.mapState({
      regloginMsg:state=>state.home.regloginMsg
    })
  },
  methods: {
    userBlur(){
      let userReg = /^[0-9a-zA-Z_]{4,}$/g;
      if(userReg.test(this.username)){
        this.stateuser = "success";
      }else{
        this.stateuser = "error";
      }
    },
    pwdBlur(){
      let pwdReg = /^[0-9a-zA-Z_]{6}$/g;
      if(pwdReg.test(this.pwd)){
        this.statepwd = "success";
      }else{
        this.statepwd = "error";
      }
    },
    handleReturn() {
      this.$router.push("/home");
    },
    handleToRegister() {
      console.log(this)
        this.$router.push("/login")
    },
    handleLookChange(e){
        this.typeBool = !this.typeBool;
        if(this.typeBool){
            e.target.innerHTML = "&#xe661;"
            this.type = "text"
        }else{
            e.target.innerHTML = "&#xe7b5;"
             this.type = "password";
        }
    },
    ...Vuex.mapActions({
      handleHomeRegister:"home/handleHomeRegister"
    }),
    async handleRegisterClick() {
      if(this.index){
      await this.handleHomeRegister({uname:this.username,pword:this.pwd});
      if(this.regloginMsg.status){
          this.flag = true;
          setTimeout(()=>{
            this.$router.push("/login")
          },500)
        }else{
          this.flag = false;
        }
      }
    },
  }
};
</script>

<style lang="" scoped>
.register {
  width: 100%;
  height: 100%;
  background: #fff;
  font-family: \\9ed1\4f53;
}
.register > .top {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
.register > .top > .return {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
}
.register > .top > h4 {
  vertical-align: baseline;
  text-align: center;
  font-weight: normal;
  font-size: 0.32rem;
  color: #333;
}
.register > .content {
  border-top: 0.01rem solid #999;
  padding-top: 0.96rem;
}

.register > .content > .input-box {
  height: 0.8rem;
  margin: 0 0.8rem 0 .5rem;
  position: relative;
  border-bottom: 1px solid rgb(134, 129, 129);
}
.register > .content > .input-box > input {
  border: 0;
  position: absolute;
  bottom: 0.1rem;
  left: 0;
  font-size: 0.32rem;
}
#register>#content>.input-box>.mint-field{
  font-size: .3rem;
  height:100%;
  width: 100%;
} 
.register > .content > .pwd-style {
  position: relative;
  display: flex;
  align-items: center;
}
.register > .content > .input-box > .iconfont {
  position: absolute;
  right: 0;
  font-size: 0.44rem;
  color: #666;
}
.register > .content >.commonRegisterButton{
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
.register > .content > .registerButton {
  background: #ccc;
  
}
.register > .content > .others {
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
.yeRegisterButton{
    background: #c1a166;
}
.mint-popup{
  padding: .3rem .8rem;
  background: #fff;
  color: green;
  font-size: .3rem;
}
</style>