
import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function (app) {

  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "https://tingfengtest.oss-cn-shanghai.aliyuncs.com"); // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   res.header('Access-Control-Allow-Methods', "GET,POST,OPTIONS")
  //   next();
  // });


  app.use(
    createProxyMiddleware('/word', {
      target: 'https://api.ixiaowai.cn/api/ylapi.php',
      changeOrigin: true
    })
  )

}
