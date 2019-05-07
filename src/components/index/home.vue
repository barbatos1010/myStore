<template>
  <div class="main">
    <el-row type="flex" class="header">
      <el-col :span="6">
        <i class="el-icon-s-unfold more" style="cursor: pointer;"></i>
      </el-col>
      <el-col :span="12" class="title">
        <strong>V M U S I C J I N</strong>
      </el-col>
      <el-col :span="6" class="search">
        <router-link :to="{name:'search'}">
          <i class="el-icon-search" style="color:white;"></i>
        </router-link>
      </el-col>
    </el-row>
    <el-row type="flex" class="navbar">
      <el-col :span="8">
        <router-link :to="{name:'recommend'}">推 荐</router-link>
      </el-col>
      <el-col :span="8">
        <router-link :to="{name:'topList'}">排 行</router-link>
      </el-col>
      <el-col :span="8">
        <router-link :to="{name:'singer'}">歌 手</router-link>
      </el-col>
    </el-row>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {}
};
</script>
<style scoped>
.header {
  height: 3.5rem;
  background: #C20C0C;
  align-items: center;
  color: #fff;
  /* position: fixed;
  top: 0;
  width: 100%; */
}
.more,
.search {
  display: inline-block;
  font-size: 1.6rem;
}
.more {
  margin-left: 0.7rem;
}
.search {
  margin-right: 0.7rem;
  text-align: right;
}
.title {
  text-align: center;
  font-size: 1.2rem;
}
.navbar {
  background: #C20C0C;
  text-align: center;
  height: 4rem;
  font-size: 1.2rem;
  align-items: center;
  /* position: fixed;
  top: 3.5rem;
  width: 100%; */
}
.navbar a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  width: 2.75rem;
  position: relative;
  top: -2px;
  padding-bottom: 2px;
}
.router-link-active{
  border-bottom: #fff 2px solid;
  font-weight: 700;
}
.view{
  display: block;
  height: calc(100% - 7.5rem);
  width: 100%;
}
</style>


