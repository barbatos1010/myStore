import config from './config'


//根据id获取排行榜
export const ALONETOPLIST = params => config ('get','/top/list'+params)
//获取所有排行榜
export const TOPLIST = params => config ('get','/toplist/detail')