import { AppDataSource } from "./config/data-source"

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

const app = new Koa()
app.use(serve(__dirname + '/uploads'));
app.use(cors())
app.use(multipartFile)
app.use(router.routes())


// 初始化数据库
AppDataSource.initialize().then(async () => {
    // 启动后台服务
    app.listen(config.port, () => {
      console.log(`服务器启动成功，端口为： ${config.port}`)
    })
}).catch(error => console.log(error))
