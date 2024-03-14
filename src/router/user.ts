import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";
import Router from 'koa-router'

let router = new Router()
//管理员表
let userRepository=AppDataSource.getRepository(User)



// 验证码校验函数
function checkCaptcha(ctx, captchaFromUser) {
  // 将用户输入的验证码和会话中的验证码都转换为小写，然后进行比较
  if (captchaFromUser.toLowerCase() !== ctx.session.captcha.toLowerCase()) {
    ctx.body = { code: 0, msg: '验证码错误' };
    return false; // 验证失败
  }
  return true; // 验证成功
}


  //查询管理员信息
  router.get('/user',async(ctx)=>{
    let query = ctx.query
    let res = await userRepository.find()
    ctx.body={
      code:1,
      msg:'有此用户',
      data:res
    }
  })

  //管理员登录
  router.post('/userLogin',async(ctx)=>{
    let body = ctx.request.body
    if (!checkCaptcha(ctx, body.captcha)) {
      return; // 如果验证码校验失败，提前返回
    }
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

  //管理员修改密码
  router.post('/userChangePassWord',async(ctx)=>{
    let body=ctx.request.body
    let res=await userRepository.findOne({
      where:{
       id:body.id || '',
       password:body.password || ''
      }
    })
    console.log(res)
    if(res){
      ctx.body={
        code:1,
        msg:'有此用户',
        data:res
      }
      let newPassWord=body.newPass
      res.password = newPassWord;
      await userRepository.save(res);
      ctx.body = {
        code: 1,
        msg: '密码修改成功',
        data: res
      };
    }else{
      ctx.body={
        code:0,
        msg:'密码错误'
      }
    }
  })
export const userRoutes = router.routes();