<template>
  <div style="padding-top: 81px;">
    <div class="main">
      <div class="content">
        <el-row>
          <el-col :span="4">
            <img src="http://images.gshxkj.com.cn:8090/index/hx_logo.png" alt="">
          </el-col>
          <el-col :span="20" >
            <ul>
              <router-link :to="{ path: '/index' }" tag="li" exact>首页</router-link>
              <router-link :to="{ path: '/aboutHX',query:{num:1}}" tag="li" >关于环讯</router-link>
              <router-link :to="{ path: '/product' }" tag="li" >产品介绍</router-link>
              <router-link :to="{ path: '/addHX' }" tag="li" >加入环讯</router-link>
              <router-link :to="{ path: '/concatOus' }" tag="li" >联系我们</router-link>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>

    <!--主体内容-->
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>


    <!--    页脚-->
    <div class="footContent">
      <div class="footMain">
        <el-row class="footer" type="flex" justify="center" style="flex-wrap: wrap;">
          <el-col :xs="12" :sm="4">
            <h2>关于我们</h2>
            <router-link :to="{ path: '/aboutHX',query:{num:1} }" tag="p" >公司简介</router-link>
            <router-link :to="{ path: '/aboutHX',query:{num:2}}" tag="p" >公司使命</router-link>
            <router-link :to="{ path: '/aboutHX',query:{num:3}}" tag="p" >公司发展战略</router-link>
            <router-link :to="{ path: '/aboutHX',query:{num:4}}" tag="p" >公司资质</router-link>
            <router-link :to="{ path: '/aboutHX',query:{num:5}}" tag="p" >合作伙伴</router-link>
          </el-col>
          <el-col :xs='12' :sm="4">
            <h2>加入我们</h2>
            <router-link :to="{ path: '/addHX',query:{num:1}}" tag="p" >人文关怀</router-link>
            <router-link :to="{ path: '/addHX',query:{num:2}}" tag="p" >招聘信息</router-link>

          </el-col>
          <el-col :xs="24" :sm="10" >
            <h2>联系我们</h2>

            <p @click="toAddress"><img src="http://images.gshxkj.com.cn:8090/index/icon6.png" alt="" class="img_botton" ><span>地址:兰州市城关高新区南河北路高新大厦B座21A</span></p>
            <p><img src="http://images.gshxkj.com.cn:8090/index/icon7.png" alt="" class="img_botton"><span>电话:17361617371</span></p>
            <p><img src="http://images.gshxkj.com.cn:8090/index/icon8.png" alt="" class="img_botton"><span>邮箱:huanxunkeji@gshxkj.com.cn</span></p>
          </el-col>
          <el-col :xs="24" :sm="6" style="margin: 0 auto;text-align: center;">
            <img src="http://images.gshxkj.com.cn:8090/index/code.png" alt="">
            <p style="font-size: 12px;">关注微信公众号</p>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="banquan"><span>©  2018-2020</span><span>甘肃环讯信息科技有限公司(<a href="http://gshxkj.com.cn" style="color: #fff;">gshxkj.com.cn</a>)</span><span>版权所有</span> <span>陇ICP备<a href="http://beian.miit.gov.cn" style="color: #fff;">19001769</a>号-1</span> <span></span></div>



  </div>

</template>

<script>

  import IndexComponent from '../components/index';
  import aboutHX from '../components/aboutHX';
  import product from '../components/product';
  import addHX from '../components/addHX';
  import concatOus from '../components/concatOus';

  export default {
    name: 'Index',
    data(){
      return{
        index:1,
        navIndex:1,
        transitionName:'slideLeft'
      }
    },
    watch:{
      '$route'(to,from){
        const path=['/index','/aboutHX','/product','/addHX','/concatOus'];
        if(path.indexOf(to.path)>path.indexOf(from.path)){
          this.transitionName='slideLeft';
        }else{
          this.transitionName='slideRight';
        }

      }
    },
    components:{
      IndexComponent,
      aboutHX,
      product,
      addHX,
      concatOus
    },
    methods:{
      toAddress(){
        this.$router.push({ path: '/concatOus' })
      }
    }
  }
</script>

<style scoped lang="scss">
  .slideLeft-enter-active {
    animation: fadeInLeft 1s;
  }
  .slideLeft-leave-active {
    animation: fadeOut;
  }
  .slideRight-enter-active {
    animation: fadeInRight 1s;
  }
  .slideRight-leave-active {
    animation: fadeOut;
  }
  .img_botton{
    vertical-align: middle;
    width: 15px!important;
    margin: 0 10px 0 0!important;
  }
  .banquan{
    text-align: center;
    font-size: 14px;
    color: #F6F6F6;
    background: #0066CC;
    padding: 18px 0;
    span{
      padding-right: 10px;
    }
  }
  .footMain{
    img{
      width: 70%;
      margin: 35px 0 12px;
    }
  }

  .footContent{
    position: relative;
    z-index: 1000;
    background: #0644DA;
    .footMain{
      width: 1196px;
      margin: 0 auto;
    }

  }
  .footer{
    h2{
      margin: 35px 0 35px;
      color: #FCFBFB;
      font-size: 18px;
    }
    p{
      color: #FCFBFB;
      font-size: 16px;
      margin-bottom: 15px;
      cursor: pointer;
    }
  }
  .main{
    background: #00309D;
    width: 100%;
    height: 81px;
    position: fixed;
    top: 0;
    z-index: 5;
    .content{
      width: 1196px;
      margin: 0 auto;
      img{
        width: 152px;
        height: 67px;
        margin-top: 7px;
      }
      ul{
        width: 100%;
        height: 81px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        li{
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          font-size: 18px;
          margin-left: 50px;
          height: 80px;
          line-height: 80px;
        }
        .active1{
          color: #FFCC99;
          border-bottom: 2px solid #FFCC99;
        }
      }
    }
  }

  .icon_phone{
    display: none;
    color: #fff;
    font-size: 40px;
    float: right;
    margin-top: 20px;
  }


</style>