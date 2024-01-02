import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";
import Router from 'koa-router'

let router = new Router()
//管理员表
let userRepository=AppDataSource.getRepository(User)

  //管理员登录
  router.post('/userLogin',async(ctx)=>{
    let body = ctx.request.body
    let res =await userRepository.findOne({
      where:{
        account:body.account,
        password:body.password
      }
    })
    if (res) {
      ctx.body = {
        code: 1,
        msg: '登录成功',
        data: res
      }
    } else {
      ctx.body = {
        code: 0,
        msg: '登陆失败,密码或账号错误'
      }
    }
  })
export const userRoutes = router.routes();