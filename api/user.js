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