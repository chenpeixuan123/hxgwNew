<template>
  <div id="app">
    <router-view></router-view>
    <div class="back" v-if="btnFlag" @click="backTop">
      <i class="el-icon-upload2" ></i>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        btnFlag:false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    methods:{
      backTop () {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
      },
      scrollToTop () {
        const that = this;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 60) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      }
    }
  }
</script>
<style lang="scss">
  .back{
    position: fixed;
    bottom: 50px;
    right: 20px;
    font-size: 25px;
    color: rgb(64,158,255);
    border-radius: 50%;
    padding: 10px 14px;
    border: 1px solid rgb(64,158,255);
    z-index: 99999999;
  }
  *{
    margin: 0;
    padding: 0;
    font-family:Microsoft YaHei;
  }
  body{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  ul li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
</style>
