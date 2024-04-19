
const BaseURL = 'https://zyxcl.xyz/music_api'

// 封装请求函数
export const request = ({ url, method = 'GET', data = {}, header = {} }) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BaseURL + url,
      method,
      data: {
        cookie: uni.getStorageSync('curCookie') || '',
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

// 轮播图
export const bannerApi = () => {
  return request({ url: '/banner' })
}
// 推荐歌单
export const topPlaylistApi = (data = {}) => {
  return request({ url: '/top/playlist', data })
}
// 首页图标
export const dragonBalltApi = () => {
  return request({ url: '/homepage/dragon/ball' })
}
// 所有榜单
export const toplistApi = () => {
  return request({ url: '/toplist/detail' })
}
// 歌单详情
export const playlistDetailApi = (id) => {
  return request({ url: '/playlist/detail', data: { id } })
}
// 热搜列表
export const searchHotApi = () => {
  return request({ url: '/search/hot/detail'})
}
// 搜索建议
export const searchSuggestApi = (keywords) => {
  return request({
    url: '/search/suggest',
    data: {
      keywords,
      type: 'mobile'
    }
  })
}
// 搜索
export const searchApi = (keywords) => {
  return request({
    url: '/search',
    data: {
      keywords
    }
  })
}
// 登录
export const loginApi = ({ email, password }) => {
  return request({
    url: '/login',
    method: 'GET',
    data: {
      email,
      password
    }
  })
}
// 登录状态
export const loginStatusApi = () => {
  return request({
    url: '/login/status',
  })
}
// 歌曲详情
export const songDetailApi = (ids) => {
  return request({
    url: '/song/detail',
    data: {
      ids
    }
  })
}
// 歌词
export const lyricApi = (id) => {
  return request({
    url: '/lyric',
    data: {
      id
    }
  })
}
// 音乐url
export const songUrlApi = (id) => {
  return request({
    url: '/song/url',
    data: {
      id
    }
  })
}
// 评论
export const commentApi = (type, id) => {
  return request({
    url: `/comment/${type}`,
    data: {
      id
    }
  })
}
