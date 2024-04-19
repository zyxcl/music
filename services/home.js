import request from './request.js'
// 首页相关接口


export const getBanner = () => {
  return request.get('/music_api/banner')
}