import axios from 'axios'
// import Cookie from 'js-cookie'

const TIMEOUT_NUMBER = 10

let loading

const pending: any[] = []
const CancelToken = axios.CancelToken

const instance = axios.create({
    baseURL: '',
    timeout: TIMEOUT_NUMBER * 1000,
    headers: {
        post: {
            'Content-Type': 'application/json;'
        }
    }
})

const startLoading = () => {
    console.log('loading...')
}

const endLoading = () => {
    console.log('endloading...')
}

const cancelPending = (config: any) => {
    pending.forEach((item, index) => {
        if (config) {
            if (item.UrlPath === config.url) {
                item.Cancel() // 取消请求
                pending.splice(index, 1) // 移除当前请求记录
            };
        } else {
            item.Cancel() // 取消请求
            pending.splice(index, 1) // 移除当前请求记录
        }
    })
}

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    // 获取登陆token
    // if (Cookie.get('User_Token')) {
    //     config.headers['Authorization'] = Cookie.get('User_Token')
    // }

    cancelPending(config)

    config.cancelToken = new CancelToken(res => {
        pending.push({
            UrlPath: config.url,
            Cancel: res
        })
    })

    startLoading()

    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    endLoading()
    cancelPending(response.config)

    return response
}, function (err) {
    // 对响应错误做点什么
    
    const errorFmt = handleErrorResponse(err)
    return Promise.reject(errorFmt)
})


const handleErrorResponse = (err: any)=>{
    let errData = {}
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '错误请求'
                break
            case 401:
                err.message = '未授权，请重新登录'
                break
            case 403:
                err.message = '拒绝访问'
                break
            case 404:
                err.message = '请求错误,未找到该资源'
                break
            case 405:
                err.message = '请求方法未允许'
                break
            case 408:
                err.message = '请求超时'
                break
            case 500:
                err.message = '服务器端出错'
                break
            case 501:
                err.message = '网络未实现'
                break
            case 502:
                err.message = '网络错误'
                break
            case 503:
                err.message = '服务不可用'
                break
            case 504:
                err.message = '网络超时'
                break
            case 505:
                err.message = 'http版本不支持该请求'
                break
            default:
                err.message = `连接错误${err.response.status}`
        }
        errData = {
            code: err.response.status,
            message: err.message
        }
        // 统一错误处理可以放这，例如页面提示错误...
        console.log('统一错误处理: ', errData)
    }
    return errData
}

export default instance