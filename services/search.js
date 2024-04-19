import request from './request.js'
// 搜索相关接口

export const searchApi = (keywords) => {
  return request.get('/music_api/search', {
    data: {
      keywords
    }
  })
}