<template>
    <div class="szdp">
        <div>
            <img src="http://images.gshxkj.com.cn/news/tszs/szdp1.png" alt="">
            <p><span>商业银行股份有限公司大屏</span></p>
        </div>
        <div>
            <img src="http://images.gshxkj.com.cn/news/tszs/szdp2.png" alt="">
            <p><span>商业银行大屏详情大屏</span></p>
        </div>
        <div>
            <img src="http://images.gshxkj.com.cn/news/tszs/szdp3.png" alt="">
            <p><span>统一调度平台日终批量实时监控大屏</span></p>
        </div>
        <div>
            <img src="http://images.gshxkj.com.cn/news/tszs/szdp4.png" alt="">
            <p><span>存贷款地图大屏</span></p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ksh2"
    }
</script>

<style scoped lang="scss">
    .szdp {
        & > div {
            margin-bottom: 41px;
            border-bottom: 1px solid #eee;
            img{
                width: 100%;
            }
            p{
                text-align: center;
                margin: 21px 0 27px;
                span{
                    color: #282828;
                    border-left: 3px solid #99CCCC;
                    padding-left: 19px;
                }
            }
        }
        &>div:last-child{
            border: none;
        }
        &>div:first-child{
            margin-top: 44px;
        }
    }
</style>