<template>
    <div>
        <!--    展示轮播图-->
        <div class="lunBo" ref="element">
<!--            <img src="http://images.gshxkj.com.cn:8090/aboutHX/about_bg.png" alt="">-->
        </div>

        <div class="content">
            <el-row>
                <el-col :span="7">
                    <span style="opacity: 0">123</span>
                    <ul class="left" id="div4" style="margin-top: -15px;z-index: 2;">
                        <div>
                            联系我们
                        </div>
                        <li @click="tab(1,'联系方式')" :class="index==1?'active1':''"><span>联系方式</span> <i :class="index==1?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i> </li>

                    </ul>
                </el-col>
                <el-col :span="17">
                    <el-row type="flex" align="middle" style="margin-bottom: 40px;">
                        <el-col :sm="12">
                            <span class="title"><img src="http://images.gshxkj.com.cn/aboutHX/icon11.png" alt="">{{msg}}</span>
                        </el-col>
                        <el-col :sm="12">
                            <p class="title_right">当前位置：首页 > 联系我们 > {{msg}}</p>
                        </el-col>
                    </el-row>

                    <!--                        联系方式-->
                    <div class="main1" v-show="index==1">
                        <h2>甘肃环讯信息科技有限公司</h2>
                        <div id="mapContainer" style="width:100%;height:308px;margin-bottom: 80px;"></div>
                            <el-row class="concat_list" :gutter="20">
                                <el-col :span="8">
                                    <div>
                                        <img src="http://images.gshxkj.com.cn/concat/h1.png" alt="">
                                        <h2>公司地址</h2>
                                        <p>甘肃省兰州市城关高新区南河北路高新大厦B座21A</p>
                                        <div>
                                            <span>Address</span>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div>
                                        <img src="http://images.gshxkj.com.cn/concat/h2.png" alt="">
                                        <h2 style="color: #996633;">联系电话</h2>
                                        <p>王女士</p>
                                        <p>0931-8121096</p>
                                        <div>
                                            <span style="background: #FFCC99">Contact</span>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div>
                                        <img src="http://images.gshxkj.com.cn/concat/h3.png" alt="">
                                        <h2 style="color: #006666;">邮箱</h2>
                                        <p>huanxunkeji@gshxkj.com.cn</p>
                                        <p style="opacity: 0">dsdf</p>
                                        <div>
                                            <span style="background: #99CCCC">Mailbox</span>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
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
                msg:'联系方式',
                activeName: '1'
            }
        },
        mounted(){
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            this.scrollTab()
            function initMap() {
                createMap(); //创建地图
                setMapEvent(); //设置地图事件
                addMapControl(); //向地图添加控件
                addMapOverlay(); //向地图添加覆盖物
            }

            function createMap() {
                map = new BMap.Map("mapContainer");
                map.centerAndZoom(new BMap.Point(103.901009, 36.054137), 14);
                var marker = new BMap.Marker(new BMap.Point(103.901009, 36.054137)); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            }

            function setMapEvent() {
                map.enableScrollWheelZoom();
                map.enableKeyboard();
                map.enableDragging();
                map.enableDoubleClickZoom()
            }

            function addClickHandler(target, window) {
                target.addEventListener("click", function() {
                    target.openInfoWindow(window);
                });
            }

            function addMapOverlay() {
                var labels = [{
                    position: {
                        lng: 103.901009,
                        lat: 36.054137
                    },
                    content: "甘肃环讯信息科技有限公司"
                }];
                for(var index = 0; index < labels.length; index++) {
                    var opt = {
                        position: new BMap.Point(labels[index].position.lng, labels[index].position.lat)
                    };
                    var label = new BMap.Label(labels[index].content, opt);
                    map.addOverlay(label);
                };
            }
            //向地图添加控件
            function addMapControl() {
                var scaleControl = new BMap.ScaleControl({
                    anchor: BMAP_ANCHOR_BOTTOM_LEFT
                });
                scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
                map.addControl(scaleControl);
                var navControl = new BMap.NavigationControl({
                    anchor: BMAP_ANCHOR_TOP_LEFT,
                    type: BMAP_NAVIGATION_CONTROL_LARGE
                });
                map.addControl(navControl);
                var overviewControl = new BMap.OverviewMapControl({
                    anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
                    isOpen: true
                });
                map.addControl(overviewControl);
            }
            var map;
            initMap();

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
                function htmlScroll1() {
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    if (that.$refs.element.offsetHeight < top+4 ) {
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
                var elFix = document.getElementById('div4');
                htmlPosition(elFix);
            },
        }
    }
</script>

<style scoped lang="scss">
    .concat_list{
        margin-bottom: 30px;
        .el-col{
            &>div{
                padding: 0 20px 20px;
                background: #F4F4F4;
                img{
                    width: 108px;
                    margin: 0 auto ;
                    display: block;
                    position: relative;
                    top: -54px;
                }
                h2{
                    color: #006666;
                    font-size: 18px;
                    text-align: center;
                    margin: -45px 0 20px;
                }
                p{
                    color: #666666;
                    font-size: 14px;
                    text-align: center;
                    line-height: 25px;
                }
                div{
                    margin-top: 21px;
                    text-align: center;
                    span{
                        background: #99CCCC;
                        color: #fff;
                        display: inline-block;
                        margin: 0 auto;
                        padding: 3px 15px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .fenQing{
        background: #EAE9EC;
        padding: 30px 27px;
        h3{
            color: #515252;
            font-size: 15px;
        }
        p{
            color: #515252;
            line-height: 30px;
            font-size: 15px;
        }
        button{
            background:#006DBA ;
            color: #fff;
            font-size: 15px;
            outline: none;
            border: none;
            padding: 6px 20px;
            margin: 20px 0 0;

        }
    }
    .fenge{
        height: 8px;
        background: #A3BCD4;
        margin: 30px 0;
    }
    .main2_content{
        display: flex;
        .main2_left{
            flex: 2;
            img{
                width: 100%;
            }
        }
        .main2_right{
            flex: 1;
            h2{
                margin-top: 30px;
                color: #654DA3;
                font-size: 28px;
                font-weight: normal;
                text-align: right;
                span{
                    padding: 10px 0;
                    border-top: 3px solid #A3BCD4;
                    border-bottom: 1px solid #A3BCD4;
                }
            }
            p{
                margin-top: 30px;
                width: 80%;
                margin-left: 20%;
                color: #666666;
                font-size: #666666;
                line-height: 25px;
            }
        }
    }
    .ygfz{
        .ygfz_bottom{
            margin-top: -4px;
            box-sizing: border-box;
            padding: 23px 50px 38px;
            height: 194px;
            color: #fff;
            background: #8A9FAD;
            h3{
                color: #D5D5A1;
                font-size: 18px;
                margin-bottom: 16px;
            }
            p{
                font-size: 14px;
                line-height: 30px;
            }
        }
        .el-col{
            padding: 10px 0;
        }
        img{
            width: 100%;

        }
    }
    .ygfl:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    };
    .main1{

        .ygfl{
            padding: 110px 0 30px;

            >div{
                width: 20%;
                float: left;
                position: relative;
                span{
                    display: block;
                    width: 100%;
                    background: #6598B1;
                    height: 2px;
                    position: absolute;
                    left: 50%;
                    z-index: -1;
                }
                div{
                    z-index: 999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 69px;
                    height: 69px;
                    margin: 0 auto;
                    background: #6598B1;
                    border-radius: 50%;
                    img{
                        width: 65%;
                    }
                }
                p{
                    text-align: center;
                    color: #666565;
                    font-size: 18px;
                    margin-top: 20px;
                }
            }
        }
        &>h2{
            color: #333;
            font-size: 18px;
            padding-left: 11px;
            border-left: 7px solid #FACD89;
            margin: 47px 0 21px;
            font-weight: normal;
        }
        &>p{
            color: #666;
            font-size: 14px;
            line-height: 30px;
            text-indent: 2em;
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
        /*background-image: url("http://images.gshxkj.com.cn:8090/aboutHX/about_bg.png");*/
        background-image: url("../assets/images/content.jpg");
        background-repeat: no-repeat;
        background-position: center -15px;
    }
    .content{
        width: 1196px;
        margin: -3px auto 0;
    }
    .left{
        width: 300px;
        position: relative;
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