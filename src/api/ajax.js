import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    console.log(url, data)
    let promise
    if (type === 'GET') {
      let dataStr = '' // 数据拼接参数
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    console.log(promise)

    promise
      .then(function (res) {
        resolve(res.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
