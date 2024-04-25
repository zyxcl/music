
const BaseURL = 'https://zyxcl.xyz/music/api'
// const BaseURL = 'http://121.89.213.194:5001'

// 封装请求函数
const request = ({ url, method = 'GET', data = {}, header = {} }) => {
  return new Promise((resolve, reject) => {
    const curCookie = uni.getStorageSync('curCookie') || ''
    const cookieData = curCookie ? { curCookie } : {}
    uni.request({
      url: BaseURL + url,
      method,
      data: {
        ...cookieData,
        ...data
      },
      header,
      withCredentials: true, // 跨域请求携带 cookie
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

export default request