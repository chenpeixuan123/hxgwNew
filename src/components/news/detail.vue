<template>
    <div>
        <div class="header">
            <h5>{{msg}}</h5>
            <p>发布时间： 2020-03-01 16:50:18</p>
        </div>
        <div class="main_news" v-html='content.content'>
            {{msg}}
            <!-- <p class="next" @click="toParent">下一篇：观点 | 区块链技术对商业银行的影响分析及启示</p>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        props:{
            msg:""
        },
        data() {
            return {
                url: this.$Config.url,
                content: {},
            }
        },
        methods: {
            common(id) {
                const that = this;
                this.axios(this.url + '/eduservice/detail/newsDetail/' + id)
                    .then(res => {
                        if (res.data.code == 200) {
                            that.content = res.data.data.item
                        }
                    })
                    .catch(res => {

                    })
            },

        }
    }
</script>

<style lang="scss">
    .next{
        color: #095793;
        font-size: 14px;
        cursor: pointer;
        text-align: right;
        margin-bottom: 86px;
    }
    .header{
        margin-bottom: 35px;
        h5{
            color: rgba(1,1,1,.9);
            font-size: 20px;
            text-align: center;
            margin: 33px 0 12px;
        }
        p{
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            color:rgba(1,1,1,.9);
            background: rgba(1,1,1,.05);
        }
    }
    .main_news{
        p{
            color: #666666;
            font-size: 14px;
            line-height: 31px;
            text-indent: 2em;
            margin-bottom: 25px;
        }
    }
</style>