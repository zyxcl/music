
const BASE_URL = 'https://zyxcl.xyz'

function request({ url, method = 'GET',  data = {}, header = {} }) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + url,
      data,
      header,
      method,
      success: resolve,
      fail: reject
    })
  })
}

request.get = function(url, { data, header } = { data: {}, header: {} }) {
  return request({
    url,
    data,
    header,
    method: 'GET'
  })
}

request.post = function(url, { data, header } = { data: {}, header: {} }) {
  return request({
    url,
    data,
    header,
    method: 'POST'
  })
}


export default request

