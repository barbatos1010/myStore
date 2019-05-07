<template>
  <div class="wrap">
    <!-- 红色背景 -->
    <div class="red-bg"></div>
    <!-- 走马灯 -->
    <el-carousel :autoplay="false" height="33.3vw">
      <el-carousel-item v-for="(item,index) in banners" :key="index" class="carousel-item">
        <img :src="item.imageUrl">
        <label>{{item.typeTitle}}</label>
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="classify">推荐歌单</div>
    <el-row class="recommend-wrap" type="flex">
     <el-col :span='8' v-for="(item,index) in hotPlay" :key="index">
         <card :info='item'></card>
     </el-col>
</el-row>
  </div>
</template>
<script>
//api文件
import { BANNER, RECOMMEND_LIST } from "../../../axios/find.js";
//歌单样式组件
import card from "../../global/card";

export default {
  data() {
    return {
      banners: [],
      hotPlay: []
    };
  },
  methods: {
    async getBanner() {
      //请求轮播图
      let data = await BANNER();
      console.log(data.data.banners)
      this.banners = data.data.banners;
    },
    async getHot() {
      //请求热门歌单
      let data = await RECOMMEND_LIST();
      console.log(data.data.result)
      this.hotPlay = data.data.result;
    }
  },
  created() {
    this.getBanner();
    this.getHot();
  },
  mounted() {},
  components: {
    card
  }
};
</script>

<style scoped>
.wrap {
  position: relative;
}
.red-bg {
  width: 100%;
  height: 15rem;
  position: absolute;
  top: -7.5rem;
  background: #c20c0c;
  z-index: -10;
}
.carousel-item {
  width: 90vw;
  height: 33.3vw;
  margin: 0 5vw;
  border-radius: 0.6rem;
}
.carousel-item img {
  width: 100%;
  height: 100%;
}
.carousel-item label {
  display: inline-block;
  padding: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 5px 0 0 0;
  background: #c20c0c;
  color: #fff;
}
.classify{
    font-size: 1.5rem;
    font-weight: 700;
    margin:0.7rem 1rem;
}
.recommend-wrap{
  flex-wrap: wrap;
}
</style>
