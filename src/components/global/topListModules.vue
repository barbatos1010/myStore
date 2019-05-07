<template>
    <div class="wrap">
        <div class="cover">
            <img :src="info.coverImgUrl">
            <div class="updateFrequency">{{info.updateFrequency}}</div>
        </div>
        <div class="name">{{info.name}}</div>
    </div>
</template>

<script>
export default {
    props:['info']
}
</script>

<style scoped>
.wrap{
    width:85%;
    margin:7.5%;
}
.cover{
    position: relative;
    width:100%;
    border-radius: 0.7rem;
    overflow: hidden;
}
img{
    width:100%
}
.name{
    height:2.5rem;
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
