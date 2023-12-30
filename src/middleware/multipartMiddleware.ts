import { koaBody } from 'koa-body' 

export const multipartFile = koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
})
