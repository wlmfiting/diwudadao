<template>
  <div class="content">
    <div class="new_register" v-for="(item) in new_register">
      <a @click="handleChangePathTo(item.ad_link)">
        <img :src="item.ad_code" :alt="item.ad_name">
      </a>
    </div>
    <div class="vip_member">
      <div v-for="(item,index) in vip_member">
        <a v-if="index === 0" @click="handleChangePathTo(item.ad_link)">
          <img :src="item.ad_code" :alt="item.ad_name">
        </a>
        <a v-else class="smallImg" @click="handleChangePathTo(item.ad_link)">
          <img :src="item.ad_code" :alt="item.ad_name">
        </a>
      </div>
    </div>
    <div class="five_example">
      <a @click="handleChangePathTo(five_example.ads_info.ad_link) " v-if="five_example.ads_info">
        <img :src="five_example.ads_info.ad_code">
      </a>
    </div>
    <div class="buy_list" v-for="(item) in buy_list">
      <a @click="handleChangePathTo(item.ad_link)">
        <img :src="item.ad_code" :alt="item.ad_name">
      </a>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import obj from "../../../../common/js/common/pathchange.js"
export default {
  created() {
    this.handleDateHomeOtherAds();
  },
  methods: {
    ...Vuex.mapActions({
      handleDateHomeOtherAds: "home/handleDateHomeOtherAds"
    }),
    handleChangePathTo(link,id){
        obj.handleClickTo(link,id,this)
    }
  },
  computed: {
    ...Vuex.mapState({
      new_register: state => state.home.new_register,
      vip_member: state => state.home.vip_member,
      five_example: state => state.home.five_example,
      buy_list: state => state.home.buy_list,
      article_list: state => state.home.article_list,
      current_topic: state => state.home.current_topic,
      flash_sales: state => state.home.flash_sales,
      newly_added: state => state.home.newly_added
    })
  },
};
</script>

<style lang="" scoped>
.content {
  overflow: hidden;
}
.new_register {
  margin-bottom: 0.2rem;
}
.vip_member {
  background: #fff;
}
.vip_member > div {
  float: left;
}
.vip_member {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 0.05rem;
}
.vip_member > div > .smallImg {
  display: inline-block;
  margin: 0.2rem 0;
}
.five_example {
  padding-bottom: 0.3rem;
  background: #fff;
}
.buy_list {
  margin-bottom: 0.2rem;
}
</style>