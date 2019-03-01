<template>
    <div class="login">
        <div class="top">
            <div class="return" @click="handleReturn()">
                <img src="../../assets/img/registerlogin/return.png" alt="">
            </div>
            <h4>登录第五大道</h4>
        </div>
        <div class="content">
            <div class="username-box input-box">
                <mt-field label="用户名" placeholder="请输入用户名" ></mt-field>

            </div>
            <div class="pwd-style input-box">
                <mt-field label="邮箱" placeholder="请输入邮箱" type="email" ></mt-field>
                <span class="iconfont">&#xe7b5;</span>
            </div>
            <div class="loginButton" @click="handleLogin()">登录</div>
            <div class="others">
                <span @click="handleForgetPwd()">忘记密码？</span>
                <span @click="handleToRegister()">用户注册</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Field } from 'mint-ui';
import "mint-ui/"
export default {
    methods: {
        handleReturn(){

        },
        handleLogin(){

        },
        handleForgetPwd(){

        },
        handleToRegister(){

        }
    }
}
</script>

<style lang="" scoped>
    .login{
        width: 100%;
        height: 100%;
        background: #fff;
        font-family: \\9ED1\4F53;
    }
    .login>.top{
        width: 100%;
        height: .88rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
    }
    .login>.top>.return{
        position: absolute;
        left: .2rem;
        top: .2rem;
    }
    .login>.top>h4{
        vertical-align: baseline;
        text-align: center;
        font-weight: normal;
        font-size: .32rem;
        color: #333;
    }
    .login>.content{
        border-top:.01rem solid #999;
        padding-top: .96rem;
    }
    .login>.content>.input-box{
        height: .8rem;
        margin: 0 .8rem;  
        position: relative;  
        border-bottom: 1px solid rgb(231, 231, 231)
    }
    .login>.content>.input-box>mt-field{
        position: absolute;
        left: 0;
        top: .1rem;
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        font-size: .32rem;
        color: #666;
        background: transparent;
    }
    .login>.content>.pwd-style{
        padding-top: 2.6%;
        position: relative;
        display: flex;
        align-items: center;
    }
    .login>.content>.pwd-style>.iconfont{
        position: absolute;
        right: 0;
        font-size: .44rem;
        color: #666;
    }
    .login>.content>.loginButton{
        margin: 0 .8rem;
        margin-top: 8%;
        height: .8rem;
        background: #ccc;
        border-radius: .08rem;
        font-size: .3rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login>.content>.others{
        margin: .4rem .8rem;
        display: flex;
        justify-content: space-between;
        font-size: .24rem;
        color: #999;
    }
    .mint-cell:last-child {
        height: 100%;
    }
    .mint-cell-wrapper{
        font-size: .3rem;
    }
</style>