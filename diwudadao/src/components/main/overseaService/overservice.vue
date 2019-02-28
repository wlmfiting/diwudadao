<template>
  <div id="oversea">
    <div class="wrapper overseaWrapper" ref="overseaWrapper">
      <div class="content">
        <Banner-con></Banner-con>
        <Tab-con></Tab-con>
        <Person-con>
            <div class="tittle" slot="tittle">
                <p>海外专家</p>
                <p>查看更多 ></p>
            </div>
            <ul class="content personcont"  slot="info">
                <li v-for="item in personList" class="perInfo">
                <img :src="item.expert_home_img" alt>
                <p class="perifont">{{item.expert_summary}}</p>
                </li>
            </ul>
        </Person-con>
        <Person-con>
            <div class="tittle" slot="tittle">
                <p>热门国家</p>
                <p>查看更多 ></p>
            </div>
            <ul class="content personcont"  slot="info">
                <li v-for="item in country" class="country">
                <img :src="item.banner_m" >
                <p class="countryfont"><img :src="item.national_flag">{{item.name}}</p>
                </li>
            </ul>
        </Person-con>
        <Person-con v-for='(items,index) in cata' :key='items.id'>
                <div class="tit" slot="tittle">
                    <p>{{items.cata_name}}</p>
                    <p>查看更多 ></p>
                </div>
                <p slot="tittle_en" class="tit_en">{{items.cata_name_en}}</p>
            <ul class="content hosete"  slot="info">
                <li v-for="item in items.overseas_project" class="hose">
                <img :src="item.project_img" >
                <p class="hosefont">{{item.project_title}}</p>
                <div class="hosefont2">服务费：<span>{{item.mobile_price}}</span></div>
                </li>
            </ul>
        </Person-con>
        <Success-con></Success-con>
        <Case-con></Case-con>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Banner from "./components/banner";
import Tab from "./components/tab";
import Person from "./components/person";
import Success from './components/success'
import Case from "./components/case";
import Bscroll from "better-scroll";
export default {
    data() {
        return {
            flag:false
        }
    },
  components: {
    "Banner-con": Banner,
    "Tab-con": Tab,
    "Person-con": Person,
    'Success-con':Success,
    'Case-con':Case
  },
  created() {
    this.handleOverseaBanner();
    this.handleOverseaButton();
    this.handleOverseaIndex();
  },
  computed: {
    ...Vuex.mapState({
        personList: state => state.overseaService.personList,  
        country: state => state.overseaService.country,
        cata: state => state.overseaService.cata,
       
    }), 
  },
  watch: {
     
  },
  methods: {
    ...Vuex.mapActions({
      handleOverseaBanner: "overseaService/handleOverseaBanner",
      handleOverseaButton: "overseaService/handleOverseaButton",
      handleOverseaIndex: "overseaService/handleOverseaIndex"
    })
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new Bscroll(this.$refs.overseaWrapper, {
        click: true,
        tap: true
      });
    
    }
  }
};
</script>

<style lang="" scoped>
#oversea {
  background: #f2f2f2;
  height: 100%;
}
.overseaWrapper {
  height: 100%;
}
</style>