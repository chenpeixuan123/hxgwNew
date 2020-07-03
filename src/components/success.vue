<template>
    <div>
        <div class="swiper-father">
            <div class="swiper-container" id="aa">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in tabList">
                        <img :src="item.url" alt="">
                        <p>{{item.msg}}</p>
                        <router-link :to="item.noTo!=1?{ name: 'product',params:{num:index+1} }:''" tag="div" style="cursor:pointer;">
                            <span>查看详情</span>
<!--                            <img src="http://images.gshxkj.com.cn:8090/index/toRight.png" alt="">-->
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev prev swiper-button-white"></div>
            <div class="swiper-button-next next swiper-button-white"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "success",
        data(){
            return{
                tabList:[
                    {
                        url:'http://images.gshxkj.com.cn/index/success4.jpg',
                        msg:'环讯数据可视化系统'
                    },
                    {
                        url:'http://images.gshxkj.com.cn/index/success2.jpg',
                        msg:'薪酬管理系统'
                    },
                    {
                        url:'http://images.gshxkj.com.cn/index/success1.png',
                        msg:'住宅维修资金云管理平台'
                    },
                    {
                        url:'http://images.gshxkj.com.cn/index/success3.jpg',
                        msg:'“惠民”云服务平台'
                    },
                    {
                        url:'http://images.gshxkj.com.cn/index/success2.png',
                        msg:'陇银资本互联网平台'
                    },
                    {
                        url:'http://images.gshxkj.com.cn/index/success5.jpg',
                        msg:'运营甘肃省中小企业公共服务平台',
                        noTo:1
                    },
                ]
            }
        },
        mounted() {
            var mySwiper = new Swiper('#aa', {
                autoplay: 3000,//可选选项，自动滑动
                slidesPerView : 4,
                slidesPerGroup : 1,
                spaceBetween : 20,
                loop : true,
                paginationClickable :true,
                autoplayDisableOnInteraction:false,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                preventLinksPropagation:true
            })
        }
    }
</script>

<style scoped lang="scss">
    .swiper-father {
        position: relative;
    }
    .prev,.next{
        top: 110px;
        background-repeat: no-repeat;
        width: 34px;
        height: 125px;
        background-color: #CCCDCC;
    }
    #aa{
        padding: 45px 0px 33px;
        width: 89%;
        .swiper-slide{
            background: #F6F6F6;
            padding-bottom: 11px;
            img{
                width: 100%;
            }
            p{
                padding: 14px 0 21px;
                color: #646464;
                font-size: 16px;
                text-align: center;
            }
            div{
                width: 140px;
                height: 25px;
                line-height: 25px;
                text-align: center;
                border: 1px solid #949191;
                margin: 0 auto;
                color: #FFAD6B;
                font-size: 12px;
                img{
                    width: 30px;
                    height: 4px;
                    margin-left: 19px;
                }
            }
        }
    }
</style>