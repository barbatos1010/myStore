<template>
    <div class="wrap clearfix">
        <div class="cover">
            <img :src="info.coverImgUrl">
            <div class="updateFrequency">{{info.updateFrequency}}</div>
        </div>
        <div class="song-list" >
            <ol>
                <li v-for="(item,index) in info.tracks" :key="index">{{item.first}} - {{item.second}}</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    props:["info"]
}
</script>

<style scoped>
.wrap{
   margin-bottom: 1rem;
}
.cover{
    position: relative;
    border-radius:0.5rem;
    overflow: hidden;
    width: 30%;
    margin: 0 1.5rem;
    float: left;
}
img{
    width:100%;
    vertical-align: top;
}
.song-list{
    width:50%;
    float: left;
    line-height:3rem;
}
.song-list li {
    word-break: break-all;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
}
.updateFrequency{
    position: absolute;
    bottom:0;
    display: inline-block;
    width:100%;
    height: 3rem;
    line-height: 3rem;
    text-indent: 1rem;
    color: white;
    background: linear-gradient(to top, rgba(0,0,0,.2) ,rgba(0,0,0,0))
}
</style>
