import { General } from "../entity/General";
import { Like } from 'typeorm'
import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
import { HealthRecord } from '../entity/HealthRecord';
let router = new Router()
//老人列表里的增删改查
let generalRepository = AppDataSource.getRepository(General)
let healthRecordRepository = AppDataSource.getRepository(HealthRecord)


//查询全部老人
router.get('/allGeneral',async(ctx)=>{
  // let query = ctx.query
  let res = await generalRepository.find()
  ctx.body = {
    code: 1,
    msg: '查询成功',
    data: res
  }
})


//根据微信名来登录
router.post('/generalWXLogin', async (ctx) => {
  let body = ctx.request.body
  let vxname = body.vxname
  console.log(body)
  let res = await generalRepository.findOne({
    where: {
      vxname: vxname
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
//修改当前用户密码
router.post('/generalChangePassWord', async (ctx) => {
  let body = ctx.request.body
  let res = await generalRepository.findOne({
    where: {
      id: body.id || '',
      password: body.password || ''
    }
  })
  console.log(res)
  if (res) {
    ctx.body = {
      code: 1,
      msg: '有此用户',
      data: res
    }
    let newPassWord = body.newPass
    res.password = newPassWord;
    await generalRepository.save(res);
    ctx.body = {
      code: 1,
      msg: '密码修改成功',
      data: res
    };
  } else {
    ctx.body = {
      code: 0,
      msg: '密码错误'
    }
  }
})

//获取当前用户的健康档案
router.get('/getHealth', async (ctx) => {
  let query = ctx.query.generalId
  let res = await healthRecordRepository.findOne({
    where: {
      general: { id: query }
    },
  })
  ctx.body = {
    code: 1,
    msg: '查询成功',
    data: res
  }
})

//小程序更新健康档案
router.post('/updataHealthRecord', async (ctx) => {
  let body = ctx.request.body
  console.log(body)
  //2.根据参数构造数据
  let health = new HealthRecord(body)
  let res = await healthRecordRepository.save(health)
  ctx.body = {
    code: 1,
    msg: '更新成功',
    data: res
  }
})

//更新健康档案
router.post('/updateHealth', async (ctx) => {
  const body = ctx.request.body;

  const general = await generalRepository.findOne({
    where: {
      id: body.generalId
    }
  });
  if (!general) {
    ctx.status = 404;
    ctx.body = { code: 0, msg: '未找到对应的用户' };
    return;
  }

  let health = await healthRecordRepository.findOne({
    where: { general: { id: general.id } }
  });

  if (health) {
    // 更新现有的健康档案
    Object.assign(health, body);
  } else {
    // 创建新的健康档案实例
    health = new HealthRecord({
      ...body,
      general: general
    });
  }

  let res = await healthRecordRepository.save(health);
  ctx.body = { code: 1, msg: '操作成功', data: res };
});

//单个id查询
router.get('/general/id', async (ctx) => {
  let query = ctx.query
  let res = await generalRepository.findOne({
    where: {
      id: query.id
    },
  })
  ctx.body = {
    code: 1,
    msg: '查询成功',
    data: res
  }
})

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
    order: {
      utime: "DESC"
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
  console.log(res)
})

router.post('/generalUpdate', async (ctx) => {
  //1.接受参数
  let body = ctx.request.body
  console.log(body)
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

//老人登录页面
router.post('/generalLogin', async (ctx) => {
  let body = ctx.request.body
  console.log(body)
  let res = await generalRepository.findOne({
    where: {
      account: body.account,
      password: body.password
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



export const generalRoutes = router.routes();