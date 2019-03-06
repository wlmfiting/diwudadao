//更改数据路径   替换成localhost:8080
const handleClickTo = (link, params,that)=> {  
    //   http://m.5lux.com/promote/special/3098  http://www.5lux.com/flagship/goods/140
    ///http://www.5lux.com/brand/detail/436cata_id=0
    //http://mobile.5lux.com
    let newlink = link.replace(/^(http:\/\/m\.5lux\.com)|(http:\/\/www\.5lux\.com)|(http:\/\/mobile\.5lux\.com)/, "/api");
    if (params) {
      // console.log(newlink + "?" + params)
      return that.$router.push(newlink + "?" + params);
     
    } else {
      return that.$router.push(newlink);
    }
  };

//   报403错误，可以使用该方法
  const changeImgPath = (params)=> {
    if(params){
      let newlink = params.replace(/(http:\/\/)/, "https://images.weserv.nl/?url="); //通过缓存图片
      return newlink;
    }else{
      return params
    }
    
    
  }
// export  handleClickTo
  export default{
    handleClickTo,
    changeImgPath
  }
