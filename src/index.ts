import { AppDataSource } from "./config/data-source"
import session from 'koa-session';

// 后台框架
import Koa from 'koa'
// 解决跨域
import cors from '@koa/cors'
// 静态服务
import serve from 'koa-static'
// vue路由： 浏览器的地址       组件(.vue)对应起来
// koa路由： 接口地址          后端方法对应起来
import { router } from './router'
// 中间件（上传文件）
import { multipartFile } from './middleware/multipartMiddleware'
import config from './config/common'


const session = require('koa-session');

const app = new Koa()
app.use(cors({
  origin: 'http://localhost:8080', // 允许这个域的跨域请求
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  credentials: true // 允许携带凭证
}));
const crypto = require('crypto');

// 同步生成一个随机的密钥
const secretKey = crypto.randomBytes(32).toString('hex');

//console.log(secretKey);

// 这是用于签名 session cookie 的密钥
app.keys = [secretKey];
const sessionConfig = {
  key: 'koa:sess',
  maxAge: 86400000, // 设置为24小时
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
  sameSite: 'lax', // 或者 'none' 或 'strict'
};

// 配置中间件
app.use(session(sessionConfig, app))

app.use(serve(__dirname + '/uploads'));
// app.use(cors())
app.use(multipartFile)
app.use(router.routes())



// 初始化数据库
AppDataSource.initialize().then(async () => {
    // 启动后台服务
    app.listen(config.port, () => {
      console.log(`服务器启动成功，端口为： ${config.port}`)
    })
}).catch(error => console.log(error))
