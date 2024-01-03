import Router from 'koa-router'
import fs from 'fs'
import path from 'path'
import config from '../config/common'
import { AppDataSource } from '../config/data-source'
const router = new Router()

router.post('/file', async (ctx) => {
  const file  = ctx.request.files.file
  if(file) {
      // 可读
      const reader = fs.createReadStream(file.filepath);
      // 可写
      // 后缀名
      const fileName =  Date.now() + path.extname(file.originalFilename)
      // 文件路径
      const filepath = path.resolve(__dirname, `../uploads/${fileName}`)
      const upStream = fs.createWriteStream(filepath)
      // 边读边写
      reader.pipe(upStream);
      ctx.body = {
          code: 1,
          msg: '上传成功',
          data: config.fullPath + '/' +  fileName,
      }
  } else {
      ctx.body = {
          code: 0,
          msg: '没接收到文件',
      }
  } 
})


export const fileRoutes = router.routes() 