<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中使用 V-for一定要使用 key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.image" alt="">1
            </mt-swipe-item>
            
        </mt-swipe>

        <!-- 九宫格到六宫格的改造过程 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu1.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                 <img src="../../image/menu2.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu3.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu4.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu5.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/menu6.png" alt="">
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                lunbotuList: [] //保存轮播图的数组
            }
        },
        created() {
            this.getLunboTu();
        },
        methods: {
            getLunboTu(){
                this.$http.get("http://Vue.studyit.io/api/getlunbo").then(result=>{
                    if (result.body.status === 0) {
                        this.lunbotuList = result.body.message;
                    } else {
                        Toast("加载轮播图失败")
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px
    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        img {
            width: 60px;
            height: 60px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>