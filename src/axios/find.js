import config from './config'

//推荐页轮播图
export const BANNER = params => config('get','/banner',params)
export const PLAYLIST = params => config('get','/top/playlist'+ params)
//每日推荐歌单
export const RECOMMEND_LIST = params => config('get','/personalized',params)





