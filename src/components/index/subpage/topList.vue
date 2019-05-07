<template>
    <div class="main">
        <!-- 新声榜 -->
        <div class="classify">新声榜</div>
        <el-row class="wrap">
            <el-col :span='24'>
                <TopListModule :info='newSingerToplist'></TopListModule>
            </el-col>
        </el-row>
        <!-- 官方榜 -->
        <div class="classify">官方榜</div>
        <el-row class="wrap">
            <el-col :span='24' v-for="(item,index) in officialTopList" :key="index">
                <TopListModule :info='item'></TopListModule>
            </el-col>
        </el-row>
        <!-- 推荐榜 -->
        <div class="classify">推荐榜</div>
           <el-row class="wrap">
            <el-col :span='8' v-for="(item,index) in recommendTopList" :key="index">
                <topListModules :info='item'></topListModules>
            </el-col>
        </el-row>
        <!-- 全球榜单 -->
        <div class="classify">全球榜单</div>
        <el-row class="wrap">
            <el-col :span='8' v-for="(item,index) in globalTopList" :key="index">
                <topListModules :info='item'></topListModules>
            </el-col>
        </el-row>
        <!-- 更多榜单 -->
        <div class="classify">更多榜单</div>
        <el-row class="wrap">
            <el-col :span='8' v-for="(item,index) in moreTopList" :key="index">
                <topListModules :info='item'></topListModules>
            </el-col>
        </el-row>
    </div>
</template>

<script >
//api文件
import { TOPLIST,ALONETOPLIST} from '../../../axios/topList.js'
//模块组件
import TopListModule from '../../global/TopListModule'
import topListModules from '../../global/TopListModules'
export default {
    data(){
        return{
           newSingerToplist:{},
           officialTopList:[],
           recommendTopList:[],
           globalTopList:[],
           moreTopList:[]
        }
    },
    methods:{
        //加载榜单列表
        async loadTopList(){
            //榜单内容摘要
            let toplist = await TOPLIST()
            // for (let i=0;i<23;i++){
            //     let obj = await ALONETOPLIST('?idx='+i+'')
            //     console.log(obj)
            // }
             //榜单列表
            toplist = toplist.data
            this.newSingerToplist = toplist.list[4];
            let obj = {
                official:[0,1,2,3],
                recommend:[5,6,7,8,9,10],
                global:[14,15,16,17,19,20,23],
                more:[11,12,13,18,21,22]
            }
            //榜单分类
            Object.keys(obj).forEach((el,index) =>{
                obj[el].forEach((item) =>{
                    if(index == 0){
                        this.officialTopList.push(toplist.list[item])
                    }else if(index==1){
                        this.recommendTopList.push(toplist.list[item])
                    }else if(index==2){
                        this.globalTopList.push(toplist.list[item])
                    }else if(index==3){
                        this.moreTopList.push(toplist.list[item])
                    }
                })
            })
        }
    },
    created(){
        this.loadTopList()
    },
    components:{
        TopListModule,
        topListModules
    }
}
</script>

<style scoped>
.wrap{
    margin-bottom: 1rem;
}
.classify{
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0.7rem 0 0.7rem 3%;
}
</style>