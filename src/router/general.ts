import { General } from "../entity/General";
import { Like } from 'typeorm'
import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'

let router = new Router()
//老人列表里的增删改查
let generalRepository = AppDataSource.getRepository(General)
//查询 
router.get('/general', async (ctx) => {
    let query = ctx.query
    console.log(query)
    let pagenumber = query.pagenumber || 1
    let pagesize = query.pagesize || 10
    let res = await generalRepository.findAndCount({
        where: {
            name: Like(`${query.name}%`)
        },
        skip: (pagenumber - 1) * pagesize,
        take: pagesize
    }
    )
    console.log(res)
    ctx.body = {
        code: 1,
        data: {
            list: res[0],
            total: res[1]
        },
    }
})

router.post('/generalDelete', async (ctx) => {
    let body = ctx.request.body
    console.log(body)
    let res = await generalRepository.delete(body.id)
    ctx.body = {
        code: 1,
        msg: '删除成功',
        data: res
    }
})

router.post('/generalUpdate', async (ctx) => {
    //1.接受参数
    let body = ctx.request.body
    //2.根据参数构造数据
    let general = new General(body)
    let res = await generalRepository.save(general)
    ctx.body = {
      code: 1,
      msg: '更新成功',
      data: res
    }
  })

  router.post('/generaAdd', async (ctx) => {
    //1.接受参数
    let body = ctx.request.body
    //2.根据参数构造数据
    let genera = new General(body)
    //3.通过user仓库来添加
    let res = await generalRepository.save(genera)
    ctx.body = {
      //0 失败 1成功
      code: 1,
      msg: '添加成功',
      data: res
    }
  })

export const generalRoutes = router.routes();