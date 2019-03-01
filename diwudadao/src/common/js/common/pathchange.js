//更改数据路径   替换成localhost:8080
const handleClickTo = (link, id,that)=> {  
    //   http://m.5lux.com/promote/special/3098  http://www.5lux.com/flagship/goods/140
    let newlink = link.replace(/(http:\/\/m\.5lux\.com)/, "/api");
    console.log(this)
    if (id) {
      return that.$router.push(newlink + id);
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
