<template>
    <div class="szdp">
<!--        PC端轮播-->
        <div class="PCproduct">
            <div>
                <template>
                    <el-carousel class="first_lunbo" :interval="3000" type="card" height="300px" indicator-position="none">
                        <el-carousel-item >
                            <div>
                                <img src="http://images.gshxkj.com.cn:8090/product/ksh/pc_ksh1.png" alt="">
                            </div>
                        </el-carousel-item>
                        <el-carousel-item >
                            <div>
                                <img src="http://images.gshxkj.com.cn:8090/product/ksh/pc_keh2.png" alt="">
                            </div>
                        </el-carousel-item>
                        <el-carousel-item >
                            <div>
                                <img src="http://images.gshxkj.com.cn:8090/product/ksh/pc_ksh3.png" alt="">
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </template>
            </div>
            <div>
                <h4><span>PC端案例</span></h4>
                <p>当前，银行业金融科技发展迅速，自身信息系统的迭代更新较快。为更加直观清楚的展示银行各项业务指标，便于高管层统筹研究.</p>
            </div>
        </div>
        <p class="decsribe">
            文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍介绍pc端文字介绍pc端文字介绍pc
            端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介c端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文
        </p>
<!--        移动端轮播-->

        <div class="YDproduct">
            <div>
                <img src="http://images.gshxkj.com.cn:8090/product/ksh/yd_bg.png" alt="" class="yg_bg">
                <template>
                    <el-carousel class="first_lunbo" :interval="3000" type="card" height="300px" indicator-position="none">
                        <el-carousel-item >
                            <div>
                                <img src="http://images.gshxkj.com.cn:8090/product/ksh/yd_ksh1.png" alt="">
                            </div>
                        </el-carousel-item>
                        <el-carousel-item >
                            <div>
                                <img src="http://images.gshxkj.com.cn:8090/product/ksh/yd_ksh2.png" alt="">
                            </div>
                        </el-carousel-item>
                        <el-carousel-item >
                            <div>
                                <img src="http://images.gshxkj.com.cn:8090/product/ksh/yd_ksh3.png" alt="">
                            </div>
                        </el-carousel-item>
                        <el-carousel-item >
                            <div>
                                <img src="http://images.gshxkj.com.cn:8090/product/ksh/yd_ksh4.png" alt="">
                            </div>
                        </el-carousel-item>
                        <el-carousel-item >
                            <div>
                                <img src="http://images.gshxkj.com.cn:8090/product/ksh/yd_ksh5.png" alt="">
                            </div>
                        </el-carousel-item>

                    </el-carousel>
                </template>
            </div>
            <div>
                <h4><span>移动端案例</span></h4>
                <p>当前，银行业金融科技发展迅速，自身信息系统的迭代更新较快。为更加直观清楚的展示银行各项业务指标，便于高管层统筹研究.</p>
            </div>
        </div>
        <p class="decsribe">
            文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍介绍pc端文字介绍pc端文字介绍pc
            端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介c端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文字介绍pc端文
        </p>


    </div>
</template>

<script>
    export default {
        name: "ksh2",
        data(){
            return{

            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">

    .decsribe{
        margin-top: 24px;
        color: #666666;
        line-height: 31px;
        text-indent: 2em;
        font-size: 14px;
    }
    .YDproduct{
        margin-top: 79px;
        height: 300px;
        display: flex;
        &>div:first-child{
            position: relative;
            flex: 3;
            .yg_bg{
                position: absolute;
                top:0;
                left: 235px;
            }
            div{
                height: 300px;
                img{
                    border-radius: 20px;
                    height: 96%;
                    display: block;
                    margin: 7px auto;
                }
            }

        }
        &>div:last-child{
            flex: 1;
            h4{
                padding-top: 10px;
                color: #5C429E;
                font-size: 22px;
                text-align: right;
                span{
                    position: relative;
                    padding: 10px 0;
                    border-top: 2px solid #B4C9DD;
                    &:after{
                        content: '';
                        display: block;
                        width: 45px;
                        height: 1px;
                        position: absolute;
                        right: 0;
                        top: 49px;
                        background: #B4C9DD;
                    }
                }
            }
            p{
                float: right;
                width: 187px;
                margin-top: 20px;
                color: #666666;
                font-size: 14px;
                line-height: 31px;
            }
        }
    }
    .PCproduct{
        margin-top: 79px;
        height: 300px;
        display: flex;
        &>div:first-child{
            flex: 3;
            div{
                transform: translateX(-40px);
                width: 700px;
                height: 300px;
            }
        }
        &>div:last-child{
            flex: 1;

            h4{
                padding-top: 10px;
                color: #5C429E;
                font-size: 22px;
                text-align: right;
                span{
                    position: relative;
                    padding: 10px 0;
                    border-top: 2px solid #B4C9DD;
                    &:after{
                        content: '';
                        display: block;
                        width: 45px;
                        height: 1px;
                        position: absolute;
                        right: 0;
                        top: 49px;
                        background: #B4C9DD;
                    }
                }
            }
            p{
                float: right;
                width: 187px;
                margin-top: 20px;
                color: #666666;
                font-size: 14px;
                line-height: 31px;
            }
        }
    }
</style>