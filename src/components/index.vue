<template>
    <div>
        <!--    展示轮播图-->
        <div class="swiper-container" id="swiper1">
            <ul>
                <li :class="indexLunBo==0?'activeLunBo':''" @mouseenter="tabLunBo(0)">服务领域 <span
                        v-show="indexLunBo==0"></span></li>
                <li :class="indexLunBo==1?'activeLunBo':''" @mouseenter="tabLunBo(1)">服务网络 <span
                        v-show="indexLunBo==1"></span></li>
                <li :class="indexLunBo==2?'activeLunBo':''" @mouseenter="tabLunBo(2)">我们的优势 <span
                        v-show="indexLunBo==2"></span></li>
                <li :class="indexLunBo==3?'activeLunBo':''" @mouseenter="tabLunBo(3)">成功案例 <span
                        v-show="indexLunBo==3"></span></li>
            </ul>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="lunBo" style="background-image: url('http://images.gshxkj.com.cn/index/banner1.jpg');">
                    </div>
                </div>
                <!--        <div class="swiper-slide">-->
                <!--          <div class="lunBo" style="background-image: url('http://images.gshxkj.com.cn:8090/index/banner2.jpg');">-->

                <!--          </div>-->
                <!--        </div>-->
                <div class="swiper-slide">
                    <div class="lunBo" style="background-image: url('http://images.gshxkj.com.cn/index/banner4.png');">

                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="lunBo" style="background-image: url('http://images.gshxkj.com.cn/index/banner8.png');">

                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="lunBo" style="background-image: url('http://images.gshxkj.com.cn/index/banner3.png');">
                    </div>
                </div>

            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
            <div class="swiper-button-prev swiper-button-white" style="margin-left: 15px;"></div>
            <div class="swiper-button-next swiper-button-white" style="margin-right: 15px;"></div>
        </div>


        <div class="contnet_height">

            <!--      业务范围-->
            <div class="content" v-show="indexLunBo==0">
                <el-row>
                    <el-col :span="10">
                        <div class="cc_left">
                            <img src="http://images.gshxkj.com.cn/index/ywfl_left.png" alt="">
                        </div>
                    </el-col>
                    <el-col :span="14">
                        <div>
                            <div class="fwly" style="width: 100%;">
                                业务范围
                            </div>
                            <el-row class="ywfw">
                                <el-col :span="6">
                                    <div>
                                        <div class="ywfw_every">
                                            <img src="http://images.gshxkj.com.cn/index/ywfw1.png" alt="">
                                        </div>
                                        <p>产品及解决方案</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <div class="ywfw_every">
                                            <img src="http://images.gshxkj.com.cn/index/ywfw2.png" alt="">
                                        </div>
                                        <p>智慧司法</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <div class="ywfw_every">
                                            <img src="http://images.gshxkj.com.cn/index/ywfw3.png" alt="">
                                        </div>
                                        <p>系统集成</p>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div>
                                        <div class="ywfw_every">
                                            <img src="http://images.gshxkj.com.cn/index/ywfw4.png" alt=""
                                                 style="width: 110px;">
                                        </div>
                                        <p>IT运维服务及其他</p>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <!--      服务网络-->

            <div class="content fwwl" v-show="indexLunBo==1">
                <div>
                    <div class="fwwl_left">
                        <img src="http://images.gshxkj.com.cn/index/chinaMap.png" alt="">
                    </div>
                    <div class="fwwl_right">
                        <div>【客户分布图】</div>
                        <div>
                            公司业务范围目前涵盖甘肃省12个地级市:兰州市、嘉峪关市、金昌市、白银市、天水市、武威市、张掖市、平凉市、酒泉市、庆阳市定西市、陇南市，并辐射西北五省（甘肃、陕西、宁夏、青海、新疆）。
                            大量企业、高校、市县两级政府部门都在与我公司的业务往来中受益匪浅，加速推进了信息化管理，提高了政府办事效率。
                        </div>
                    </div>
                </div>
            </div>

            <!--      我们的优势-->
            <div class="content" v-show="indexLunBo==2" style="padding: 40px 0 20px;">
                <el-row :gutter="20" class="mySuccess">
                    <el-col :span="6">
                        <div style="background-image: url('http://images.gshxkj.com.cn/index/mySuccess.png')">
                            <h6>丰富的行业经验</h6>
                            <p>涉及领域广泛，已成功完成众多项目,满足了不同行业IT需求。</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="border: 1px solid #A6C1DC;border-radius: 10px;height: 203px;margin-top: 8px;">
                            <h6 style="margin-top: 21px;">完善的管理</h6>
                            <p>专业成熟的项目管理、产品管理、IT服务管理以及供应商管理体系，保证每一个项目成功实施。</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="border: 1px solid #A6C1DC;border-radius: 10px;height: 203px;margin-top: 8px;">
                            <h6 style="margin-top: 21px;">专业的技术团队支持</h6>
                            <p>拥有多行业、多品类专业技术人员，跟随时代脚步，掌握行业先进技术，高效率、高质量完成每一个项目。</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="background-image: url('http://images.gshxkj.com.cn/index/mySuccess.png')">
                            <h6>先进的管理理念</h6>
                            <p>
                                公司顺应国家发展趋势，紧跟互联网发展步伐，始终以技术为核心，以科技创新为指引,为每位用户提供安全、快捷、高效、实用的专业信息化服务。
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!--    成功案例-->
            <div class="content success" :style="{opacity:(indexLunBo==3)?'1':'0'}">
                <success></success>
            </div>
        </div>

        <!--      新闻模块-->
        <div class="news">
            <div>
                <p>新闻中心 <span>NEWS</span></p>
                <router-link :to="{ path: '/news',query:{num:0}}" tag="button">了解更多 ></router-link>
                <!--              <button>了解更多 ></button>-->
            </div>
            <div>
                <marquee direction="up" behavior="scroll" scrollamount="2" loop="-1" height="100%" hspace="10"
                         vspace="10" onmouseover="this.stop()" onmouseout="this.start()">
                    <template v-for="(item,index) in tabNews">
                        <router-link :to="{ path: '/news',query:{detailId:item.id,title:item.title,parentId:item.parentId}}" tag="p" >
                            {{item.title}}<span>{{item.gmtCreate}}</span></router-link>
                    </template>

                </marquee>

            </div>

        </div>
        <div class="jbx"></div>
        <!--      服务热线-->
        <div class="content fwrx">
            <h5><span>服务热线</span><img src="@/assets/images/phone.png"><span>0931-8121096</span></h5>
        </div>

    </div>
</template>

<script>
    import success from './success';
    import Swiper from "swiper"

    export default {
        name: 'index',
        components: {
            success
        },
        data() {
            return {
                url: this.$Config.url,
                tabNews:[],//所有标题
                index: 0,
                num: 0,
                indexLunBo: 0,
            }
        },
        mounted: function () {
            var mySwiper = new Swiper('#swiper2', {
                autoplay: 3000,//可选选项，自动滑动
                freeMode: false,
            })
            var mySwiper = new Swiper('#swiper1', {
                autoplay: 3000,
                loop: true,
                pagination: '.swiper-pagination',
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                paginationClickable: true,
                effect: 'fade',
                autoplayDisableOnInteraction: false,
                preventLinksPropagation: true
            })
            this.common();
        },
        methods: {
            common(){
                const that = this;
                this.axios(this.url+'/eduservice/allNewsTitle/getAllNewsTitle')
                    .then(res => {

                        if (res.data.code == 200) {
                            let requestData=res.data.data.item;
                            requestData.forEach((item,index)=>{
                                item.gmtCreate=item.gmtCreate.slice(0,10)
                            })
                            that.tabNews = requestData;
                        }

                    })
                    .catch(res => {

                    })
            },
            dongxiao(index) {
                this.index = index;
            },
            tabLunBo(index) {
                this.indexLunBo = index;

            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../../node_modules/swiper/dist/css/swiper.css";

    .jbx {
        width: 1196px;
        margin: 0 auto;
        height: 1px;
        background: linear-gradient(to right, #fff, #C3C3C3, #fff);
    }

    .news {
        width: 1196px;
        margin: 0 auto 51px;
        display: flex;
        height: 143px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);

        div {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        & > div:first-child {
            flex: 0.58;

            p {
                color: #10538F;
                font-size: 20px;

                span {
                    color: #FB3434;
                    font-size: 12px;
                }
            }

            button {
                outline: none;
                width: 130px;
                height: 32px;
                background: #58A4E7;
                color: #FFFEFE;
                font-size: 14px;
                border: none;
                border-radius: 16px;
                margin-top: 18px;
            }
        }

        & > div:nth-of-type(2) {
            flex: 1.7;
            align-items: flex-start;

            p {
                cursor: pointer;
                padding-left: 73px;
                position: relative;
                color: #666666;
                font-size: 16px;
                margin-bottom: 16px;

                &:last-child {
                    margin-bottom: 0;
                }

                &:before {
                    position: absolute;
                    content: '';
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #58A4E7;
                    left: 34px;
                    top: 7px;
                }

                span {
                    float: right;
                    margin-right: 12px;
                }
            }
        }

    }

    .contnet_height {
        position: relative;
        height: 350px;
        display: flex;
        align-items: center;
    }

    .success {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .mySuccess {
        .el-col {
            div {
                box-sizing: border-box;
                overflow: hidden;
                padding: 0 20px;
                height: 220px;
                background-size: 100% 100%;
                background-repeat: no-repeat;

                h6 {
                    color: #009C8C;
                    text-align: center;
                    font-size: 16px;
                    margin: 30px 0 15px;
                }

                p {
                    font-size: 13px;
                    color: #333;
                    line-height: 30px;
                }
            }
        }
    }

    .fwwl {
        background-image: url("http://images.gshxkj.com.cn/index/fwwl_bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 10px 0;

        div {
            display: flex;

            .fwwl_left {
                flex: 1;

                img {
                    display: block;
                    margin: 0 auto;
                }
            }

            .fwwl_right {
                flex: 1.4;
                display: flex;

                div:first-child {
                    flex: 1;
                    -webkit-writing-mode: vertical-rl;
                    writing-mode: vertical-rl;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #7788B2;
                    font-size: 15px;
                }

                div:last-child {
                    padding: 0 20px 0 10px;
                    color: #656565;
                    font-size: 14px;
                    line-height: 35px;
                    flex: 5;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }

    .fwrx {
        padding: 15px 0;

        h5 {
            font-weight: 400;
            font-size: 18px;
            color: #A2A0A0;
            text-align: center;

            img {
                width: 21px;
                vertical-align: bottom;
            }

            span {
                margin: 0 7px;
            }
        }
    }

    .swiper-pagination {
        box-sizing: border-box;
        padding-right: 150px;
        margin-bottom: 70px;
        display: flex;
        justify-content: flex-end;
    }

    .ywfw {
        .ywfw_every {
            height: 100px;

            img {
                width: 70px;
                display: block;
                margin: 0 auto;
            }
        }

        div {
            padding-top: 15px;

            p {
                color: #1277E0;
                text-align: center;
            }
        }
    }

    .cc_left {
        padding-bottom: 20px;

        img {
            width: 414px;
        }
    }

    .swiper-container {

        position: relative;
        height: 500px;

        ul {
            position: absolute;
            z-index: 9999;
            width: 1196px;
            margin: 0 auto;
            bottom: 25px;
            left: 0;
            right: 0;

            li {
                background: rgba(255, 255, 255, 1);
                opacity: 0.5;
                padding: 8px 0;
                width: 24%;
                margin-right: 1%;
                color: #39393A;
                height: 23.5px;
                text-align: center;
                float: left;
                cursor: pointer;

                span {
                    display: block;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 15px 15px 0 15px;
                    border-color: #1241CE transparent transparent transparent;
                    margin: 10px auto 0;
                }
            }

            .activeLunBo {
                background: #1241CE;
                color: #fff;
                opacity: 0.6;
            }

            z-index: 9999;
        }

    }

    .evenyList {
        overflow: hidden;
        padding-bottom: 50px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        transition: All 1s ease-in-out;
        -webkit-transition: All 1s ease-in-out;
        -moz-transition: All 1s ease-in-out;
        -o-transition: All 1s ease-in-out;

        div:first-child {
            height: 73px;
            margin-top: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
            text-align: center;
            color: #fff;
        }
    }

    .lunBo {
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            color: #FBFCFD;
            font-size: 40px;
            font-weight: normal;
            letter-spacing: 2px;
            text-align: center;
            margin-bottom: 10px;

            span {
                color: #F4DF21;
            }
        }
    }

    .content {

        box-sizing: border-box;
        width: 1196px;
        margin: 0 auto;

        & > p {
            text-align: center;
            color: #FFCC99;
            font-size: 18px;

            span {
                color: #666666;
                font-size: 15px;
            }
        }
    }

    .fwly {
        color: #666699;
        font-size: 28px;
        width: 422px;
        height: 36px;
        margin: 0 auto;
        text-align: center;
        background-image: url(http://images.gshxkj.com.cn/index/icon4@2x.png);
        background-size: 100% 20%;
        background-repeat: no-repeat;
        background-position-y: bottom;
        padding: 10px 0;
    }

</style>
