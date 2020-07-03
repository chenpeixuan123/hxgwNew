<template>
    <div style="padding-top: 70px;">

        <div class="main" >
<!--           shxkj.com.cn/index/topbj.png');background-position: top center;background-repeat: no-repeat;background-size: 2800px 80px;"-->

            <div class="content" style="height: 70px;">
                <el-row>
                    <el-col :span="4" style="height: 60px;">
                        <img src="http://images.gshxkj.com.cn:8090/index/topbj.png" alt="">
                        <img src="http://images.gshxkj.com.cn:8090/index/logo.png" alt="">
                    </el-col>
                    <el-col :span="20" >
                        <ul class="headerTab">
                            <router-link :to="{ path: '/index' }" tag="li" exact @mouseenter.native="showZheZhao=false"><span >首页</span></router-link>
                            <router-link :to="{ path: '/aboutHX',query:{num:1}}" tag="li"  @mouseenter.native="showZheZhao=true" @click.native="showZheZhao=false"><span>关于环讯</span></router-link>
                            <router-link :to="{ path: '/news',query:{num:0,message:'新闻中心'}}" tag="li"  @mouseenter.native="showZheZhao=false" @click.native="showZheZhao=false"><span>新闻中心</span></router-link>
                            <router-link :to="{ path: '/product' }" tag="li" @mouseenter.native="showZheZhao=false"><span >环讯业务</span></router-link>
                            <router-link :to="{ path: '/addHX' }" tag="li" ><span >人才招聘</span></router-link>
                            <router-link :to="{ path: '/concatOus' }" tag="li" ><span style="border: none;" >联系我们</span></router-link>
                        </ul>
                    </el-col>
                </el-row>
            </div>

                <div class="zhezhao" v-show="showZheZhao" @mouseleave="showZheZhao=false">
                    <el-collapse-transition>
                        <div class="content secondNav"  v-show="showZheZhao" >
                            <div @mouseleave="showZheZhao=false">
                                <div class="c_gyhx" >
                                    <router-link :to="{ path: '/aboutHX',query:{num:1} }" tag="div" @click.native="showZheZhao=false">公司简介</router-link>
                                    <router-link :to="{ path: '/aboutHX',query:{num:2} }" tag="div" @click.native="showZheZhao=false">公司使命</router-link>
                                    <router-link :to="{ path: '/aboutHX',query:{num:3} }" tag="div" @click.native="showZheZhao=false">公司发展战略</router-link>
                                </div>
                                <div class="c_gyhx" >
                                    <router-link :to="{ path: '/aboutHX',query:{num:4} }" tag="div" @click.native="showZheZhao=false">公司资质</router-link>
                                    <router-link :to="{ path: '/aboutHX',query:{num:5} }" tag="div" @click.native="showZheZhao=false">合作伙伴</router-link>
                                </div>
                            </div>
                        </div>
                    </el-collapse-transition>
            </div>

        </div>

        <!--主体内容-->
        <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
        </transition>


        <!--    页脚-->


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
                showZheZhao:false,
                index:1,
                navIndex:1,
                transitionName:'slideLeft'
            }
        },
        watch:{
            '$route'(to,from){
                const path=['/index','/aboutHX','news','/product','/addHX','/concatOus'];
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
    .headerTab{
        li{
            font-size: 16px!important;
        }
    }
    .zhezhao{
        background: rgba(5,14,187,.1);
        height: 124px;
        position: relative;
        .secondNav{
            .c_gyhx{
                width: 130px;
                float: left;
                color: #fff;
                padding-top: 4px;
                &:first-child{
                    margin-left: 586px;
                    padding-left: 15px;
                }
                &:last-child{
                    /*padding-left: 40px;*/
                }
                overflow: hidden;

                div{
                    font-size: 15px;
                    padding: 9px 0;
                    cursor: pointer;
                    &:hover{
                        color: #FCE302;
                    }
                }
            }
        }
    }
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
        max-width: 1920px;
        margin: 0 auto;
        text-align: center;
        font-size: 13px;
        color: #F6F6F6;
        background: #929292;
        padding: 18px 0;
        position: relative;
        z-index: 1;
        span{
            padding-right: 10px;
        }
        a{
            text-decoration: none;
        }
    }
    .footMain{
        img{
            width: 70%;
            margin: 35px 0 12px;
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
        background: #fff;
        width: 100%;
        height: 70px;
        position: fixed;
        top: 0;
        z-index: 5;
        .content{
            width: 1196px;
            margin: 0 auto;
            img:first-of-type{
                width: 550px;
                height: 87px;
                position: relative;
                left: -365px;
                top:0;
                z-index: 6;
            }
            img:last-of-type{
                /*width: 100px;*/
                position: relative;
                top: -70px;
                left: 20px;
                z-index: 7;
            }
            ul{
                width: 100%;
                height: 70px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-wrap: nowrap;
                li{
                    box-sizing: border-box;
                    color: #000;
                    cursor: pointer;
                    font-size: 18px;
                    height: 70px;
                    line-height: 70px;
                    span{
                        padding: 0 30px;
                        border-right: 1px solid #999;
                    }
                }
                .active1{
                    color: #0498FC;
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