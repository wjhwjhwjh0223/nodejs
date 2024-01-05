import { Staff } from '../entity/Staff'
import { Like } from 'typeorm'
import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
let router = new Router()
//员工列表的增删改查
let staffRepository = AppDataSource.getRepository(Staff)

//查询
router.get('/staff', async (ctx) => {
    let query = ctx.query
    console.log(query)
     let pagenumber = query.pagenumber || 1
    let pagesize = query.pagesize || 10
    let res = await staffRepository.findAndCount({
        where: {
            name: Like(`${query.name}%`)
        },
        order:{
          ctime:'DESC'
        },
        skip: (pagenumber - 1) * pagesize,
        take: pagesize
    })
    console.log(res)
    ctx.body = {
        code: 1,
        data: {
            list: res[0],
            total: res[1]
        },
    }
})
//删除
router.post('/staffDelete', async (ctx) => {
    let body = ctx.request.body
    console.log(body)
    let res = await staffRepository.delete(body.id)
    ctx.body = {
        code: 1,
        msg: '删除成功',
        data: res
    }
})

//修改
router.post('/staffUpdate', async (ctx) => {
    //1.接受参数
    let body = ctx.request.body
    //2.根据参数构造数据
    let staff = new Staff(body)
    let res = await staffRepository.save(staff)
    ctx.body = {
      code: 1,
      msg: '更新成功',
      data: res
    }
  })

  //增加
  router.post('/staffAdd', async (ctx) => {
    //1.接受参数
    let body = ctx.request.body
    //2.根据参数构造数据
    let staff = new Staff(body)
    //3.通过user仓库来添加
    let res = await staffRepository.save(staff)
    ctx.body = {
      //0 失败 1成功
      code: 1,
      msg: '添加成功',
      data: res
    }
  })
  
  //工作人员登录
  router.post('/staffLogin',async(ctx)=>{
    let body = ctx.request.body
    let res =await staffRepository.findOne({
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

export const staffRoutes = router.routes();
