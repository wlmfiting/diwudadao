<template>
  <div class="header">
    <div class="header-box">
      <div class="title">
        <div class="back" @click="handleBack()">
          <img src="../../../../assets/img/registerlogin/return.png" alt>
        </div>
        <h4>{{name}}</h4>
      </div>
      <div class="tab-choose">
        <div class="left item">
          <span>综合</span>
          <i class="iconfont">&#xe601;</i>
        </div>
        <div class="classify item">
          <span>分类</span>
        </div>
        <div class="filter item">
          <span>筛选</span>
          <i class="iconfont">&#xe73a;</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  props: ["name"],
  methods: {
    handleBack() {
      //返回按钮
      this.$router.back();
    }
  }
};
</script>

<style lang="" scoped>
.header{
    width: 100%;
    height: 1.68rem;
}
.header-box {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 100;
}
.header>.header-box > .title {
  width: 100%;
  text-align: center;
  line-height: 0.88rem;
  font-family: \\9ed1\4f53;
  font-size: 0.32rem;
}
.header>.header-box > .title > .back {
  position: absolute;
  left: 0.4rem;
  top: 0.24rem;
  width: 0.44rem;
  height: 0.44rem;
}
.header>.header-box > .title > .back > img {
  width: 100%;
  height: 100%;
}
.header>.header-box > .tab-choose {
  width: 100%;
  height: 0.78rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  border-top: 0.01rem solid #999;
  border-bottom: 0.01rem solid #999;
}
.header>.header-box > .tab-choose > .item {
  flex: 1;
  line-height: 0.78rem;
  font-family: \\9ed1\4f53;
  font-size: 0.28rem;
  color: #999;
  margin-right: 0.12rem;
  text-align: center;
}
.header>.header-box > .tab-choose > .left {
  color: #9b885f;
}
.header>.header-box > .tab-choose > .left > i {
  color: #333;
}
</style>