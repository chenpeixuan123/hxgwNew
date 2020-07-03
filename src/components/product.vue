<template>
    <div>
        <!--    展示轮播图-->
        <div class="lunBo" ref="element">
<!--            <img src="http://images.gshxkj.com.cn:8090/aboutHX/about_bg.png" alt="">-->
            <el-carousel height="407px">
                <el-carousel-item >
                    <div class="lunboImg bg1" >
                        <h2>住宅维修基金云管理平台</h2>
                        <p><span style="background: #003333">记账到户 / 管理到幢 / 专户储存</span></p>
                    </div>
                </el-carousel-item>
                <el-carousel-item >
                    <div class="lunboImg bg2" >
                        <h2>陇银资本互联网平台</h2>
                        <p><span style="background: #663333">操作简便 / 配置灵活 / 工作效率高</span></p>
                    </div>
                </el-carousel-item>
                <el-carousel-item >
                    <div class="lunboImg bg3" >
                        <h2 style="color: #fff;">“惠民”云服务平台</h2>
                        <p><span style="background: #FFFFCC;color: #336699;">生活缴费 / 安全管理 / 方便快捷</span></p>
                    </div>
                </el-carousel-item>

            </el-carousel>
        </div>

        <div class="content">
            <el-row>
                <el-col :span="7">
                    <span style="opacity: 0">123</span>
                    <ul class="left" id="div2" style="margin-top: -18px;z-index: 2;">
                        <div>
                            业务介绍
                        </div>

                        <li @click="tab(2,'成功案例')" :class="index==2?'active1':''"><span>成功案例</span> <i :class="index==2?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                        <ul v-show="showOrFalse">
<!--                            <li @mouseenter="tabSuccess(1)" :class="indexSuccess==1?'active3':''"><span>数据可视化系统</span></li>-->
                            <li @mouseenter="tabSuccess(6)" :class="indexSuccess==6?'active3':''"><span>数字大屏</span></li>
                            <li @mouseenter="tabSuccess(2)" :class="indexSuccess==2?'active3':''"><span>薪酬管理系统</span></li>
                            <li @mouseenter="tabSuccess(3)" :class="indexSuccess==3?'active3':''"><span>住宅维修资金云管理平台</span></li>
                            <li @mouseenter="tabSuccess(4)" :class="indexSuccess==4?'active3':''"><span>“惠民”云服务平台</span></li>
                            <li @mouseenter="tabSuccess(5)" :class="indexSuccess==5?'active3':''"><span>陇银资本互联网平台</span></li>
                        </ul>
                        <li @click="tab(1,'从事行业')" :class="index==1?'active1':''"><span>从事行业</span> <i :class="index==1?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                        <li style="margin-top: 2px" @click="tab(3,'技术服务')" :class="index==3?'active1':''"><span>技术服务</span> <i :class="index==3?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
<!--                        <li style="margin-top: 2px" @click="tab(4,'重点项目')" :class="index==4?'active1':''"><span>重点项目</span> <i :class="index==4?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>-->

                    </ul>
                </el-col>
                <el-col :span="17" >
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #CCCCCC;">
                        <el-col :sm="12">
                            <span class="title"><img src="http://images.gshxkj.com.cn:8090/aboutHX/icon11.png" alt="">{{msg}}</span>
                        </el-col>
                        <el-col :sm="12">
                            <p class="title_right">当前位置：首页 > 环讯业务 > {{msg}}</p>
                        </el-col>
                    </el-row>

                    <!--                        从事行业-->
                    <div class="main" v-show="index==1">
                        <el-row type="flex" :gutter="20" class="cshy">
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>1</h2>
                                    <p>司法行业</p>
                                </div>
                            </el-col>
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>2</h2>
                                    <p>银行行业</p>
                                </div>
                            </el-col>
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>3</h2>
                                    <p>政府行业</p>
                                </div>
                            </el-col>
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>4</h2>
                                    <p>系统集成与应用</p>
                                </div>
                            </el-col>
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>5</h2>
                                    <p>网络工程技术与服务</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <!--                     成功案例   -->
                    <div class="success" v-show="index==2" style="min-height: 500px;">
                        <div v-show="indexSuccess==0" >
                            <p style="margin-top: 29px;width: 85%;">
                                我公司本着务实创新、认真负责的态度对待每一个项目和每一个客户，通过我们不懈的努力去成就客户，以客户
                                满意度为唯一标准，从而实现客户与公司共赢的发展目标。目前我公司具有大量成功案例，在使用过程中，获得客户的 <span style="font-size: 22px;color: #F0B71D;font-style: oblique;">一致好评。</span>
                            </p>
                            <div style="width: 85%;">
                                <img src="http://images.gshxkj.com.cn:8090/product/hzgy.png" alt="" style="width: 591px;margin: 0 auto;display: block;margin-top: 68px;">
                            </div>
                        </div>
                        <div v-show="indexSuccess==1">
                            <ksh></ksh>
                        </div>
                        <div v-show="indexSuccess==2">
                            <h3>薪酬管理系统</h3>
                            <img src="http://images.gshxkj.com.cn/product/list2.jpg" alt="">
                            <p>基于银行薪酬管理业务的现状和痛点，甘肃环讯定制化开发薪酬管理系统。主要功能包括：组织机构管理、人事管理、考勤管理、审批中心(基于Activity工作流)、自动算薪、BI数据报表及分析、个性化薪资核算配置等，为客户提供了方便、准确、稳定的HR工作平台。</p>
                        </div>
                        <div v-show="indexSuccess==3">
                            <h3>住宅维修资金云管理平台 </h3>
                            <img src="http://images.gshxkj.com.cn/product/list9.png" alt="">
                            <p>
                                针对我省各级房管局单位住宅维修资金管理现状，根据政府出台的住宅维修资金管理制度，结合银行专业、规范的账务处理机制，甘肃环讯研发推出住房维修资金管理云平台。该平台接入房管局、业主、开发商及物业公司等多应用场景，采用金融IT业先进的F5集群技术，为用户提供持续、快速、稳定的线上服务，为维修资金管理提供清晰、简洁的财务数据、丰富的统计报表，规范并简化维修资金的管理流程，从而既保障业主的计息权益，又大大提高了工作效率。
                            </p>
                        </div>
                        <div v-show="indexSuccess==4">
                            <h3>“惠民”云服务平台</h3>
                            <img src="http://images.gshxkj.com.cn/product/list3.jpg" alt="">
                            <p>经调研，现阶段广大居民普遍存在生活缴费难、管理难问题。以便民、惠民为服务宗旨，甘肃环讯推出“惠民”云服务平台。收费单位可通过该平台实现对所有缴费用户统一管理，对收缴 情况一目了然。
                                该平台加入了shiro权限框架，以防止多角色、多用户都越权问题；采用https协议保证数据安全性，通过互联网支付完成二级清分。该平台具有开放性、便捷性、延展性，能快速融入百姓日常生活，为群众提供定制化、差异化、个性化服务。广大居民可通过“惠民”云服务平台足不出户轻松缴费。</p>
                        </div>
                        <div v-show="indexSuccess==5">
                            <h3>陇银资本互联网平台</h3>
                            <img src="http://images.gshxkj.com.cn/product/list2.png" alt="">
                            <p>
                                该平台是甘肃环讯给甘肃陇银资本管理有限公司(简称“陇银资本”)提供的一套数据统计及展示平台。该产品可实现车险分期产品的存量客户交叉导流及自身渠道的客户新增。
                                该平台实现了对用户、部门以及对应权限的管理和配置;通过ODS获取数据，对客户信息及还款计划的管理、报表展示;财务清算功能实现客户短信预警、财务人员短信预警、返佣明细、垫付明细管理;贷款管理功能实现对客户信息、还款记录、放款记录、逾期还款、还款计划的展示、预警、数据更新。该平台还可实现退保、个人信息维护、公共参数配置、地区信息配置及操作日志记录等功能。
                            </p>
                        </div>
                        <div v-show="indexSuccess==6">
                            <szdp></szdp>
                        </div>
                    </div>

                    <!--技术服务-->
                    <div class="success" v-show="index==3">

                        <div v-show="indexSuccess==0">
                            <h3>1.质量管理</h3>
                            <p>该项目立足于优化辖内城市商业银行项目过程、提升项目交付质量的目标，对项目的文档、源码、软件产品等进行集中统一管理。涉及文档有：需求文档、设计文档、接口文档、测试文档等，对文档的新建、变更、基线发布进行登记管理；对源码进行基线变更检查、分支合并检查及发布生产版本的准确性检查；对软件产品进行完整性、可用性、是否符合业务要求等的检查管理。</p>
                            <h3>2.配置管理</h3>
                            <p>该项目通过既定的城市商业银行系统配置管理方案，开展持续交付、持续集成（DevOps）工作，对各系统的版本源码管理、版本制作、版本发布、制品管理等工作事项，保障源码、制品等科技核心内容的准确、安全；对项目组人员进行配置管理体系的推广、培训与指导工作，提升项目团队配置管理的规范及专业化；同时还承担配置库服务及资源库运维，配置库用户及权限集中统一管理，确保配置库平稳、准确的运行。</p>
                            <h3>3.环境管理</h3>
                            <p>该项目服务范围包括测试环境（SIT环境、UAT环境）的基本系统服务及应用服务、数据库服务维护、日常巡检等事项，通过业内专业的开源软件Zabbix实时对系统进行监控和自动运维，支撑测试团队、业务人员进行数据迁移恢复、批量调度、测试等事项，保障测试任务及项目进度按期实施。</p>
                        </div>


                    </div>
                    <!--重点项目-->
                    <div class="success" v-show="index==4">

                        <div v-show="indexSuccess==0">
                            <h3>1.银行生产系统自动化运维平台</h3>
                            <p>项目内容：
                                （1）实时生产数据监测；
                                （2）异常数据预警并通知；
                                （3）可视化界面管理；
                                （4）异常问题自动定位跟踪；
                                （5）自动化数据备份；</p>
                            <h3>2.基于5G移动通信技术的智能农业环境系统</h3>
                            <p>项目内容：
                                （1）基于5G移动网络技术的农业环境监测仪系统架构设计与开发
                                （2）土壤温湿度、PH值、光照度、CO2浓度、养分等传感器系统集成开发
                                （3）基于5G移动网络技术的农业物联网的智能管理系统5个层次的体系架构设计与开发（即，用户层、应用层、传输层、感知层、对象层）。
                                （4）不同农作物及不同生长期需水需肥算法的模型设计
                                （5）农业环境物联网监测数据的接入、高速传输、海量异构信息处理和设备智能控制，对系统开发技术和应用是一个难点。
                                （6）作物营养传感器的开发对物联网技术研发水平和创新能力提出来更高的要求。</p>
                        </div>

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import ksh from "./dapin/ksh2";
    import szdp from "./dapin/szdp1";
    export default {
        name: "aboutHX",
        components:{
            ksh,
            szdp
        },
        data(){
            return{
                index:2,
                msg:'成功案例',
                indexSuccess:0,
                showOrFalse:false
            }
        },
        mounted(){
            if(this.$route.params.num){//1~8
                this.index=2;
                this.indexSuccess=this.$route.params.num;
                this.showOrFalse=true;
            }
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            this.scrollTab()
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods:{
            scrollTab(){
                const that=this;
                function htmlScroll1() {
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    if (that.$refs.element.offsetHeight < top+4 ) {
                        elFix.style.position = 'fixed';
                        elFix.style.top = '78px';
                        elFix.style.width = '300px';

                    }
                    else {
                        elFix.style.top = '0px';
                        elFix.style.width = '300px';
                        elFix.style.position = 'relative';
                    }
                }

                function htmlPosition(obj) {
                    var o = obj;
                    var t = o.offsetTop;
                    var l = o.offsetLeft;
                    while (o = o.offsetParent) {
                        t += o.offsetTop;
                        l += o.offsetLeft;
                    }
                    obj.data_top = t;
                    obj.data_left = l;
                }
                //
                var oldHtmlWidth = document.documentElement.offsetWidth;
                window.onresize = function () {
                    var newHtmlWidth = document.documentElement.offsetWidth;
                    if (oldHtmlWidth == newHtmlWidth) {
                        return;
                    }
                    oldHtmlWidth = newHtmlWidth;
                    elFix.style.position = 'static';
                    htmlPosition(elFix);
                    htmlScroll1();
                }


                window.onscroll = htmlScroll1;
                var elFix = document.getElementById('div2');
                htmlPosition(elFix);
            },
            tab(index,msg){
                const that=this;
                document.body.scrollTop=that.$refs.element.offsetHeight;
                document.documentElement.scrollTop=that.$refs.element.offsetHeight;
                this.index=index;
                this.msg=msg;
                this.indexSuccess=0;
                if(index==2){
                    this.showOrFalse=!this.showOrFalse;
                }else{
                    this.showOrFalse=false;
                }
            },
            tabSuccess(index){
                const that=this;
                document.body.scrollTop=that.$refs.element.offsetHeight;
                document.documentElement.scrollTop=that.$refs.element.offsetHeight;
                this.indexSuccess=index;
            }
        }
    }
</script>

<style scoped lang="scss">
.lunboImg{
    overflow: hidden;
    /*background-size: 100% 100%;*/
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    text-align: center;
    h2{
        margin: 120px 0 25px;
        font-size: 56px;
        color: #FFFFCC;
    }
    p{
        font-size: 18px;
        color: #fff;
        span{
            padding: 5px 15px;
            border-radius: 15px;
        }
    }
}
.bg1{
    background-image: url('http://images.gshxkj.com.cn/product/pro1.jpg');
}
.bg2{
    background-image: url('http://images.gshxkj.com.cn/product/pro2.jpg');
}
.bg3{
    background-image: url('http://images.gshxkj.com.cn/product/pro3.jpg');
}
    .success{
        &>div{

            h5{
                font-size: 15px;
                line-height: 30px;
            }
            h3{
                font-size: 18px;
                margin: 34px 0 13px;
                color: #333333;
                font-weight: normal;
            }
            img{
                width: 100%;
            }
            p{
                margin: 13px 0 34px;
                font-size: 14px;
                color: #666;
                text-indent: 2em;
                line-height: 30px;
            }
        }
    }
    @media screen and (max-width:768px){
        .cshy{
            flex-wrap: wrap;
        }
    }
    .main{
        padding-top: 25px;
        color: #666;
        font-size: 14px;
        div{
            overflow: hidden;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            min-height: 231px;
            padding: 0 10px;
            h2{
                text-align: center;
                margin:25px 0 20px;
                font-size: 26px;
                color: #fff;
            }
            p{
                margin: 60px 0;
                font-size: 18px;
                color: #666666;
                text-align: center;
            }
        }
    }
    .title_right{
        text-align: right;
        font-size: 12px;
        color: #999999;
    }
    .title{
        font-size: 18px;
        color: #333;
        display: inline-block;
        border-bottom: 4px solid #99CCCC;
        padding: 10px 0;
        img{
            vertical-align: bottom;
            margin-right: 5px;
        }
    }
    .lunBo{
        img{
            width: 100%;
            height: 100%;
        }
    }
    .content{
        width: 1196px;
        margin: 0 auto 50px;
    }
    .left{
        z-index: 99;
        width: 300px;
        position: relative;
        ul{
            .active3{
                background: #D0E0E7;
                color: #6598B1;
            }
            li{
                cursor: pointer;
                height: 47px;
                color: #989898;
                font-size: 14px;
                padding: 0 0 0 53px;
                line-height: 47px;
                background: #ECF2F6;
                margin-bottom: 1px;
                &>span{
                    position: relative;
                    &:before{
                        content: ' ';
                        position: absolute;
                        left: -20px;
                        top: 5px;
                        width: 6px;
                        height: 6px;
                        background-color: #989898;
                        border-radius: 50%;
                    }
                }
            }
        }
        .active1{
            background: #6598B1!important;
            color: #fff!important;
        }
        .active2{
            color: #fff!important;
        }
        div{
            width: 100%;
            top: -126px;
            background:  RGBA(114, 156, 173, 0.3);
            position: absolute;
            height: 126px;
            line-height: 126px;
            text-align: center;
            color: #fff;
            font-size: 24px;
        }
        &>li{
            display: flex;
            align-items: center;
            width: 100%;
            height: 70px;
            color: #333;
            font-size: 16px;
            background: #F4F4F4;
            box-sizing: border-box;
            padding: 0 35px;
            &:first-of-type{
                margin-bottom: 1px;
            }
            &>span{
                flex: 10;
            }
            &>i{
                font-size: 20px;
                flex: 1;
                color: #666;
            }
        }
    }
</style>