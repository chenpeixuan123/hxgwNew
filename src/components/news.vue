<template>
    <div>
        <!--    展示轮播图-->
        <div class="lunBo" ref="element">
            <!--            <img src="" >-->
        </div>
        <div class="content">
            <el-row>
                <el-col :span="7">
                    <div>
                        <span style="opacity: 0">123</span>
                        <ul class="left" id="div1" style="margin-top: -15px;z-index: 1;">
                            <div>
                                新闻中心
                            </div>
                            <li @click="tab((index1+1),item.title)" :class="index==(index1+1)?'active1':''"
                                v-for="(item,index1) in tabNews" :key="index1"><span>{{item.title}}</span> <i
                                    :class="index==(index1+1)?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="17" :style="{minHeight:height+'px'}">
                    <el-row type="flex" align="middle">
                        <el-col :sm="12">
                            <span class="title"><img src="http://images.gshxkj.com.cn/aboutHX/icon11.png" alt="">{{msg}}</span>
                        </el-col>
                        <el-col :sm="12">
                            <p class="title_right">当前位置：<span @click="toNews">新闻中心</span> <span v-if="msg!='新闻中心'">{{msg=='新闻中心'?'':'>'+msg}}</span>
                            </p>
                        </el-col>
                    </el-row>


                    <div class="main" v-show="!detailShow">
                        <div class="news_title">
                            <div>
                                <img src="@/assets/images/news/xwzx.jpg" alt="">
                            </div>
                            <div>
                                <!--                                <span>2020-2-11</span>-->
                                <h5>“致敬奋斗者，凝心聚力“ ——记环讯科技端午团建活动</h5>
                                <p>6月20日，甘肃环讯信息科技有限公司（简称：环讯科技）组织了以“致敬奋斗者，凝心聚力”为主题的端午团建活动，通过爬山和烧烤等活动，丰富了员工的业余生活，营造了员工之间团结协作、轻松愉快的团队氛围，并宣传和落实了公司的企业文化建设。上午9点，大家在事先安排好的地点集合，统一乘......</p>
                            </div>
                        </div>
                        <ul class="news_every">
                            <li @click="toDetail(item)" v-for="(item,index) in newsList"
                                :key="index">{{item.title}}
                                <span> </span><span>{{item.gmtCreate.slice(0,11)}}</span>
                            </li>
                        </ul>
                        <el-pagination
                                background
                                :page-size="15"
                                @current-change="changePage"
                                layout="prev, pager, next"
                                :total="total">
                        </el-pagination>
                    </div>

                    <div v-show="detailShow">
                        <div class="main" >
                            <detail :msg='newTitle' ref="mychild"></detail>
                        </div>

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

    import detail from "./news/detail"
    export default {
        name: "aboutHX",
        components: {
            detail,
        },
        data() {
            return {
                url:this.$Config.url,
                tszsIndex: 1,
                detailShow: false,//控制是否显示详情
                index: 0,
                msg: '新闻中心',
                height: window.screen.height - 200,
                newsList: [],//总的分页
                total: 1,
                slideList: [],//点击侧边栏分页
                ifAllList: true,//查询所有的
                tabNews: [],//左边标题列表
                detailId:'',
                newTitle:'',//文章标题
                
            }
        },
        watch: {
            '$route'() {
                this.index = this.$route.query.num;
                this.msg = '新闻中心';
                console.log(this.$route.query.message + '1')
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        },
        mounted() {
            this.common();
            this.pageList();



            let detailId= this.$route.query.detailId;
            let title= this.$route.query.title;
            let parentId= this.$route.query.parentId;

            if(detailId){
                this.detailShow=true;
                this.$refs.mychild.common(detailId);
                this.newTitle=title;
                this.index=parentId;
            }
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.scrollTab()
        },
        destroyed() {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods: {
            common() {
                const that = this;
                this.axios(this.url+'/eduservice/news/getAllNews')
                    .then(res => {
                        if (res.data.code == 200) {
                            that.tabNews = res.data.data.list;
                        }

                    })
                    .catch(res => {

                    })
            },
            pageList(currentPage=1) {
                const that = this;
                this.axios(this.url+'/eduservice/allNewsTitle/seleteAllNewsTitle/'+currentPage+'/15')
                    .then(res => {
                        if (res.data.code == 200) {
                            that.newsList=res.data.data.item;
                            that.total=res.data.data.total;
                        }

                    })
                    .catch(res => {

                    })

            },
            changePage(page) {
                this.pageList(page);
            },
            toNews() {
                this.detailShow = false;
                this.msg = '新闻中心';
            },
            toDetail(item) {
                //index  左边四栏  detailIndex 每一栏中的第几条
                document.body.scrollTop = this.$refs.element.offsetHeight;
                document.documentElement.scrollTop = this.$refs.element.offsetHeight;
             
                this.detailShow=!this.detailShow;
                this.index=item.parentId;
                this.newTitle=item.title;
                this.$refs.mychild.common(item.id);
            },
            tab(index, msg) {
                document.body.scrollTop = this.$refs.element.offsetHeight;
                document.documentElement.scrollTop = this.$refs.element.offsetHeight;
                this.index = index;
                this.msg = msg;
                this.detailShow = false;//控制显示与否详情

                this.slideBarCheck(index)
            },
            slideBarCheck(id){//根据左边菜单查询
                const that = this;
                this.axios(this.url+'/eduservice/allNewsTitle/getNewsTitleById/'+id+'/1/15')
                    .then(res => {
                        console.log(res)
                        if (res.data.code == 200) {
                            that.newsList = res.data.data.item;
                            that.total=res.data.data.total;
                        }

                    })
                    .catch(res => {

                    })
            },
            tabSuccess(index) {
                const that = this;
                that.tszsIndex = index
                document.body.scrollTop = that.$refs.element.offsetHeight;
                document.documentElement.scrollTop = that.$refs.element.offsetHeight;
            },
            scrollTab() {
                const that = this;

                function htmlScroll() {
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    if (that.$refs.element.offsetHeight <= top) {

                        elFix.style.position = 'fixed';
                        elFix.style.top = '75px';
                        elFix.style.width = '300px';

                    } else {
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
    .el-pagination {
        margin: 31px 0 63px;
        display: flex;
        justify-content: center;
    }

    .news_every {
        li {
            cursor: pointer;
            position: relative;
            color: #000;
            font-size: 14px;
            padding: 9px 0 13px 30px;
            opacity: 0.9;
            border-bottom: 1px solid rgba(112, 112, 112, .4);

            span {

                &:last-child {
                    float: right;
                }
            }

            &:before {
                content: '';
                display: block;
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #58A4E7;
                top: 15px;
                left: 0;
            }
        }
    }

    .news_title {
        cursor: pointer;
        display: flex;
        margin-bottom: 20px;

        div {
            img {
                width: 305px;
            }
        }

        div:first-child {
            flex: 0.7;
        }

        div:last-child {
            flex: 1;

            h5 {
                color: rgba(1, 1, 1, .9);
                font-size: 16px;
                font-weight: bold;
                padding-bottom: 8px;
                border-bottom: 1px solid rgba(112, 112, 112, .4);

                span {
                    font-size: 12px;
                    float: right;
                    color: #010101;
                    vertical-align: bottom;
                }
            }

            p {
                color: #666666;
                font-size: 14px;
                line-height: 31px;
                margin-bottom: 0;
            }
        }
    }

    .zizhiL {
        height: 100%;
        box-sizing: border-box;
        background: #fff;

        div {
            display: flex;
            box-sizing: border-box;
            padding: 10px;
            height: 100%;
            border: 1px solid #D1D1D1;
            border-radius: 5px;

            img {
                width: 50%;
            }
        }
    }


    .sft {
        width: 30% !important;
    }

    .cmmi {
        margin-bottom: 50px;

        img {
            width: 100%;
        }

        .cmmiTwo {
            width: 150%;
            position: relative;
            left: -60%;
            top: 108px;
        }
    }

    .gsrzTitle {
        color: #333333;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 20px;
    }

    .gsrz {
        div {
            img {
                width: 100%;
            }
        }
    }

    .last1 {
        width: 60% !important;
        transform: rotate(-90deg);
        -ms-transform: rotate(-90deg); /* IE 9 */
    }

    .hzhb {
        border: 1px solid #ccc;

        .el-col {
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                min-height: 176px;

                img {
                    width: 90%;
                    /*vertical-align: middle;*/
                }
            }
        }
    }

    .main {
        padding-top: 25px;
        color: #666;
        font-size: 14px;

        p {
            text-indent: 2em;
            margin-bottom: 32px;
            line-height: 30px;
        }
    }

    .title_right {
        padding-top: 18px;
        text-align: right;
        font-size: 12px;
        color: #999;

        span {
            cursor: pointer;
        }

        span:last-child {
            color: #6598B1;
        }
    }

    .title {
        font-size: 16px;
        color: #333;
        display: inline-block;
        border-bottom: 4px solid #99CCCC;
        padding: 20px 0 4px;

        img {
            vertical-align: middle;
            margin-right: 5px;
        }
    }

    .lunBo {
        height: 392px;
        margin: 0 auto;
        background-image: url("http://images.gshxkj.com.cn/news/tszs/banner.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .content {
        width: 1196px;
        margin: -3px auto 0;
    }

    .left {
        width: 300px;
        position: relative;
        background: #fff;

        ul {
            .active3 {
                background: #D0E0E7;
                color: #6598B1;
            }

            li {
                cursor: pointer;
                height: 47px;
                color: #989898;
                font-size: 14px;
                padding: 0 0 0 53px;
                line-height: 47px;
                background: #ECF2F6;
                margin-bottom: 1px;

                & > span {
                    position: relative;

                    &:before {
                        content: ' ';
                        position: absolute;
                        left: -20px;
                        top: 21px;
                        width: 6px;
                        height: 6px;
                        background-color: #989898;
                        border-radius: 50%;
                    }
                }
            }
        }

        .active1 {
            background: #6598B1 !important;
            color: #fff !important;
        }

        .active2 {
            color: #fff !important;
        }

        div {
            width: 100%;
            top: -126px;
            background: RGBA(114, 156, 173, 0.3);
            position: absolute;
            height: 126px;
            line-height: 126px;
            text-align: center;
            color: #fff;
            font-size: 24px;
        }

        li {
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

            span {
                flex: 10;
            }

            i {
                font-size: 20px;
                flex: 1;
                color: #666;
            }
        }
    }
</style>