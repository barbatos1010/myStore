<template>
    <div class="warp">
       <router-link :to="{name:''}">
          <img :src="info.picUrl" class="img" >
          <p class="name">{{info.name}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    props:['info']
}
</script>
    
<style scoped>
  .warp{
    position: relative;
    width: 85%;
    margin: 0 auto;
  }
  .warp a{
    color:#303133;
  }
  .img{
    width: 100%;
    border-radius:5%;
  }
  .name{
      height:2.8rem;
      word-break: break-all;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
  }
</style>
