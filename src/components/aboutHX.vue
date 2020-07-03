<template>
    <div >
        <!--    展示轮播图-->
        <div class="lunBo" ref="element" >
<!--            <img src="" >-->
        </div>

        <div class="content" >
            <el-row>
                <el-col :span="7">
                    <div>
                        <span style="opacity: 0">123</span>
                        <ul class="left" id="div1" style="margin-top: -15px;z-index: 1;">
                            <div>
                                关于环讯
                            </div>
                            <li @click="tab(1,'公司简介')" :class="index==1?'active1':''"><span>公司简介</span> <i :class="index==1?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i> </li>
                            <li @click="tab(2,'公司使命')" :class="index==2?'active1':''"><span>公司使命</span> <i :class="index==2?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                            <li @click="tab(3,'公司发展战略')" :class="index==3?'active1':''"><span>公司发展战略</span> <i :class="index==3?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                            <li @click="tab(4,'公司资质')" :class="index==4?'active1':''"><span>公司资质</span> <i :class="index==4?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                            <li @click="tab(5,'合作伙伴')" :class="index==5?'active1':''"><span>合作伙伴</span> <i :class="index==5?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
<!--                        <li @click="tab(6,'党建工作')" :class="index==6?'active1':''"><span>党建工作</span> <i :class="index==6?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>-->
                        </ul>
                    </div>
                </el-col>
                <el-col :span="17" :style="{minHeight:height+'px'}">
                    <el-row type="flex" align="middle">
                        <el-col :sm="12">
                            <span class="title"><img src="http://images.gshxkj.com.cn/aboutHX/icon11.png" alt="">{{msg}}</span>
                        </el-col>
                        <el-col :sm="12">
                            <p class="title_right">当前位置：首页 > 关于环讯 > {{msg}}</p>
                        </el-col>
                    </el-row>

<!--                        公司简介-->
                    <div class="main" v-show="index==1">
<!--                        <p>甘肃环讯信息科技有限公司于2018年，在兰州市工商行政管理局兰州高新技术产业开发区分局注册成立，注册资金500万，公司是一家专注于政府机构及金融领域的科技服务公司，致力于通过大数据、云计算等领先技术，为客户提供更专业、更便捷的信息化服务和安全信赖的产品的高科技企业。 公司自成立以来，始终以高新技术为企业发展核心，以服务地方为企业发展初心，秉持“用户体验至上”服务理念，通过诚实规范的经营、创新的技术服务、严格的风险控制，持续创造价值，赢得员工、合作伙伴及客户的一致认可。</p>-->
<!--                        <p>公司主营业务有：甘肃省中小企业公共服务平台运营、金融科技定制化软件研发及技术支持等。公司已通过国际CMMI3认证、ISO9001认证、ISO27001认证、公共安全业务连续性管理体系认证，拥有12项软件著作权；被兰州市政府确定为大学生就业见习基地。</p>-->
<!--                        <p>我公司目前由综合部、产品研发部、技术服务部和实施运维部四个部门组成。公司共有32人，本科及以上学历占比70%，大专学历占比30%。公司人员素质良好，大家在工作中积极合作，勇于负责，对上级、下级、产品用户及整个社会抱有高度的责任心。</p>-->
<!--                        <p>我们拥有一支年轻、敏锐、朝气蓬勃、志向远大的团队。公司倡导团队协作，公平公正，强调员工与企业共成长的企业文化， 鼓励创新，致力于为员工营造充分展示自我才智、发挥潜能的舞台。除了为员工提供极具竞争力的福利待遇外，公司还建立了一整 套与员工的职业生涯发展相结合的合理晋升体系，针对不同特点的员工设置不同的晋升通道，专业技能优秀的员工可以按照技术路线晋升，管理才能卓越的员工可以按照职能体系晋升。员工晋升以绩效考核结果为基础，同时又作为薪酬调整的依据。公司内部空缺岗位优先考虑内部竞聘人员，为员工提供广阔的发展空间，努力做到公司与员工一起成长。</p>-->
                            <p>1.甘肃环讯信息科技有限公司注册于2018年6月，专注于为政府机构及金融机构提供科技服务，为客户提供专业、便捷的信息化服务和安全信赖的产品。</p>
                            <p>2.公司主营业务有：金融科技定制化软件研发及技术支持、甘肃省中小企业公共服务平台运营等。</p>
                            <p>3.公司取得资质有：国际CMMI3认证、ISO9001认证、ISO27001认证、公共安全业务连续性管理体系认证，拥有12项软件著作权；被兰州市政府确定为兰州市青年就业见习基地。</p>
                            <p>4.公司目前由综合部，市场部，产品研发部，技术服务部和实施运维部五个部门组成，本科及以上学历占比100％。</p>
                            <p>5.公司自成立以来，始终以高新技术为企业发展核心，以服务地方为企业发展初心，秉持“用户体验至上”服务理念，通过诚实规范的经营、创新的技术服务、严格的风险控制，持续创造价值，赢得员工、合作伙伴及客户的一致认可。</p>
                    </div>
<!--                        公司使命-->
                    <div class="main" v-show="index==2">
<!--                        <p>我们始终以技术为核心，以科技创新为指引、以强大技术队伍为支撑，同时以“用户体验是我们唯一的工作方向， 科技创新是我们唯一的服务标准”为经营理念，深入细化每一个用户的实际体验，不断向科技要效率， 深入探索更高的司法信息化的行业应用标准，为每一位用户提供安全、快捷、高效、实用的专业信息化服务。</p>-->
                            <p>1.为客户提供更好服务。</p>
                            <p>2.为员工发展搭建广阔平台。</p>
                            <p>3.为西北地区科技创新做出实际行动。</p>
                            <p>4.为实体经济发展承担应尽的企业公民责任。</p>
                    </div>
<!--                        公司发展战略-->
                    <div class="main" v-show="index==3">
<!--                        <p>2018年，是国家十三五规划发展的第三年，同时也是我公司战略规划实施和业务飞速发展的开头年。公司面临着资金投入、产品开发、队伍壮大、市场推广、业务拓展等多方面的挑战和压力，但挑战则代表着机遇。国家十三五规划中将“互联网+”提升到一个前所未有的高度，我公司将顺应国家发展趋势，紧跟互联网发展步伐，抓住这千载难逢的大好机遇，将压力转化为动力，视挑战为机遇，真抓实干，力争2020年实现公司的飞跃发展。</p>-->
                        <p>1.公司以习近平新时代中国特色社会主义思想为指导，以国家十三五规划提出“互联网+”为契机，立足甘肃、辐射西北，以科技创新为使命，以国家实体经济发展为己任，旗帜鲜明，真抓实干，力争实现跨越式发展。</p>
                        <p>2.公司为政府、金融机构提供专业、高效、安全的IT技术服务，与产业链金融同步发展，不断更新技术、持续优化团队，致力于打造稳固、开放、共赢的金融科技生态。未来5年内公司将深挖金融机构信息化平台建设及运行中存在的痛点，结合团队经验与技术，为金融机构信息化过程规避风险、节约成本、提高效能。同时，不断归纳总结，形成自主产品。</p>
                        <p>3.核心技术方面，一是利用微服务模型形成自己的软件应用开发平台，在项目开发过程中已达到敏捷开发的效果；二是融合python、shell和java等技术，根据金融机构技术服务内容，就金融机构信息化项目管理形成全流程控制，就生产系统运行维护形成自动化运维管理；三是利用大数据、云计算等技术，与金融机构合作，挖掘分析金融数据及非金融数据，结合互联网思维，形成全新的金融科技产品及模式。</p>
                        <p>4.产业合作方面，立足与本省金融机构合作，在建立稳固、相互信任、可持续发展的合作基础上，根据自身实力选择金融机构业务拓展中适合公司服务的优质的合作产业及对象。</p>
                    </div>
<!--                        公司资质-->
                    <div class="main" v-show="index==4">
<!--                        <p>为了壮大公司实力，提高公司知名度，积极响应政府对高新技术企业的支持，我公司目前正在进行软著、双软企业、CMMI3等一系列的资质认证。目前软著、CMMI3认证已经下证；其它认证也已经拟定好时间表和工作计划表。</p>-->
                        <p>公司已通过国际CMMI3认证、ISO9001认证、ISO27001认证，公共安全业务连续性管理体系认证。</p>


<!--                        资质展示改为轮播图-->
                        <template>
                            <el-carousel style="margin-bottom: 30px;" :interval="3000" type="card" height="330px" indicator-position="none">
                                <el-carousel-item >
                                    <div class="zizhiL">
                                        <div>
                                            <img src="http://images.gshxkj.com.cn/aboutHX/ISO90011.jpg" alt="">
                                            <img src="http://images.gshxkj.com.cn/aboutHX/ISO90012.jpg" alt="">
                                        </div>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item >
                                    <div class="zizhiL">
                                        <div>
                                            <img src="http://images.gshxkj.com.cn/aboutHX/ISO270011.jpg" alt="">
                                            <img src="http://images.gshxkj.com.cn/aboutHX/ISO270012.jpg" alt="">
                                        </div>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item >
                                    <div class="zizhiL">
                                        <div>
                                            <img src="http://images.gshxkj.com.cn/aboutHX/ISO270013.jpg" alt="">
                                            <img src="http://images.gshxkj.com.cn/aboutHX/ISO270014.jpg" alt="">
                                        </div>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item >
                                    <div class="zizhiL">
                                        <div>
                                            <img src="http://images.gshxkj.com.cn/aboutHX/cmmi.png" alt="" style="width: 100%">
                                        </div>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </template>
                    </div>
<!--                        合作伙伴-->
                    <div class="main" v-show="index==5" style="min-height: 600px;">
                        <el-row class="hzhb" type="flex" justify="center" align="middle" style="flex-wrap: wrap;">
                            <el-col :sm="8">
                                <div>
                                    <img src="http://images.gshxkj.com.cn/aboutHX/banklogo1.png" >
                                </div>
                            </el-col>
                            <el-col :sm="8">
                                <div>
                                    <img src="http://images.gshxkj.com.cn/aboutHX/banklogo2.png" >
                                </div>
                            </el-col>
                            <el-col :sm="8">
                                <div>
                                    <img src="http://images.gshxkj.com.cn/aboutHX/banklogo3.png" alt="">
                                </div>
                            </el-col>
                            <el-col :sm="8">
                                <div>
                                    <img src="http://images.gshxkj.com.cn/aboutHX/banklogo4.png" alt="">
                                </div>
                            </el-col>
                            <el-col :sm="8">
                                <div>
                                    <img src="http://images.gshxkj.com.cn/aboutHX/banklogo5.png" alt="">
                                </div>
                            </el-col>
                            <el-col :sm="8">
                                <div>
                                    <img src="http://images.gshxkj.com.cn/aboutHX/banklogo6.png" alt="">
                                </div>
                            </el-col>
                            <el-col :sm="8">
                                <div>
                                    <img src="http://images.gshxkj.com.cn/aboutHX/banklogo7.png"  class="sft">
                                    <span style="color: #06203E;margin-left: 10px;font-weight: bold">甘肃省司法厅</span>
                                </div>
                            </el-col>
                            <el-col :sm="8">
                                <div><img src="../assets/images/bank_logo.jpg" style="width: 70%"  alt=""></div>
                            </el-col>
                            <el-col :sm="8">
                                <div>
                                    <img src="../assets/images/logo.jpg" style="width: 60%" alt="">
                                </div>
                            </el-col>

                        </el-row>
                    </div>
<!--                    党建工作-->
                    <div class="main" v-show="index==6">
                        <!--                        <p>2018年，是国家十三五规划发展的第三年，同时也是我公司战略规划实施和业务飞速发展的开头年。公司面临着资金投入、产品开发、队伍壮大、市场推广、业务拓展等多方面的挑战和压力，但挑战则代表着机遇。国家十三五规划中将“互联网+”提升到一个前所未有的高度，我公司将顺应国家发展趋势，紧跟互联网发展步伐，抓住这千载难逢的大好机遇，将压力转化为动力，视挑战为机遇，真抓实干，力争2020年实现公司的飞跃发展。</p>-->
                        <h4 class="gsrzTitle">主题教育</h4>
                        <p>1.主要摘录学习强国、人民网、新华网等官宣媒体里的习近平新时代中国特色社会主义思想、“不忘初心，牢记使命”系列文章</p>
                        <h4 class="gsrzTitle">党员风采</h4>
                        <p>2.图文并茂展示公司优秀党员生活及工作中的掠影。</p>
                        <h4 class="gsrzTitle">组织生活</h4>
                        <p>3.记录公司党建工作中的集体组织生活内容，如专题学习习近平总书记讲话、学习党章党规等。</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

    export default {
        name: "aboutHX",
        data(){
            return{
                index:1,
                msg:'公司简介',
                height:window.screen.height-200,
                srcList: [
                    'http://images.gshxkj.com.cn/aboutHX/ISO90011.png',
                    'http://images.gshxkj.com.cn/aboutHX/ISO90012.png',
                    'http://images.gshxkj.com.cn/aboutHX/ISO270011.jpg',
                    'http://images.gshxkj.com.cn/aboutHX/ISO270012.jpg',
                    'http://images.gshxkj.com.cn/aboutHX/ISO270013.jpg',
                    'http://images.gshxkj.com.cn/aboutHX/ISO270014.jpg',
                    // 'http://images.gshxkj.com.cn:8090/aboutHX/hx7.jpg',
                    // 'http://images.gshxkj.com.cn:8090/aboutHX/hx8.jpg',
                    // 'http://images.gshxkj.com.cn:8090/aboutHX/hx9.jpg',
                    // 'http://images.gshxkj.com.cn:8090/aboutHX/hx10.jpg',
                    // 'http://images.gshxkj.com.cn:8090/aboutHX/hx11.jpg',
                    // 'http://images.gshxkj.com.cn:8090/aboutHX/hx12.jpg',
                    'http://images.gshxkj.com.cn/aboutHX/cmmi.png'
                ]
            }
        },
        watch: {
            '$route'() {
                this.index=this.$route.query.num;
                document.body.scrollTop=0;
                document.documentElement.scrollTop=0;
            }
        },
        mounted(){
            this.index=this.$route.query.num||1;
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            this.scrollTab()
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods:{
            tab(index,msg){
                const that=this;
                document.body.scrollTop=that.$refs.element.offsetHeight;
                document.documentElement.scrollTop=that.$refs.element.offsetHeight;
                this.index=index;
                this.msg=msg;
            },
            scrollTab(){
                const that=this;
                function htmlScroll() {
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    if (that.$refs.element.offsetHeight <= top) {

                        elFix.style.position = 'fixed';
                        elFix.style.top = '75px';
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

                var oldHtmlWidth = document.documentElement.offsetWidth;
                window.onresize = function () {
                    var newHtmlWidth = document.documentElement.offsetWidth;
                    if (oldHtmlWidth == newHtmlWidth) {
                        return;
                    }
                    oldHtmlWidth = newHtmlWidth;
                    elFix.style.position = 'static';
                    htmlPosition(elFix);
                    htmlScroll();
                }
                window.onscroll = htmlScroll;

                var elFix = document.getElementById('div1');
                htmlPosition(elFix);
            },
        }
    }
</script>

<style scoped lang="scss">
    .zizhiL{
        height: 100%;
        box-sizing: border-box;
        background: #fff;
        div{
            display: flex;
            box-sizing: border-box;
            padding: 10px;
            height: 100%;
            border: 1px solid #D1D1D1;
            border-radius: 5px;
            img{
                width: 50%;
            }
        }
    }


    .sft{
        width: 30%!important;
    }
    .cmmi{
        margin-bottom: 50px;
        img{
            width: 100%;
        }
        .cmmiTwo{
            width: 150%;
            position: relative;
            left: -60%;
            top: 108px;
        }
    }
    .gsrzTitle{
        color: #333333;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 20px;
    }
    .gsrz{
        div{
            img{
                width: 100%;
            }
        }
    }
    .last1{
        width: 60% !important;
        transform: rotate(-90deg);
        -ms-transform: rotate(-90deg); /* IE 9 */
    }
    .hzhb{
        border: 1px solid #ccc;
        .el-col{
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                min-height: 176px;
                img{
                    width: 90%;
                    /*vertical-align: middle;*/
                }
            }
        }
    }
    .main{
        padding-top: 25px;
        color: #666;
        font-size: 14px;
        p{
            text-indent:2em;
            margin-bottom: 32px;
            line-height: 30px;
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
        height: 392px;
        margin: 0 auto;
        background-image: url("http://images.gshxkj.com.cn/aboutHX/about_bg.png");
        background-repeat: no-repeat;
        background-position: center;
    }
    .content{
        width: 1196px;
        margin: -3px auto 0;
    }
    .left{
        width: 300px;
        position: relative;
        background: #fff;
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
        li{
            display: flex;
            align-items: center;
            width: 100%;
            height: 70px;
            color: #333;
            font-size: 16px;
            background: #F4F4F4;
            margin-bottom: 2px;
            box-sizing: border-box;
            padding: 0 35px;
            span{
                flex: 10;
            }
            i{
                font-size: 20px;
                flex: 1;
                color: #666;
            }
        }
    }
</style>