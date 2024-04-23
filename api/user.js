import request from './request.js'


// 用户详情
export const userDetailApi = (uid) => {
  return request({
    url: '/user/detail',
    data: {
      uid
    }
  })
}
// 用户歌单
export const userPlaylistApi = (uid) => {
  return request({
    url: '/user/playlist',
    data: {
      uid
    }
  })
}
