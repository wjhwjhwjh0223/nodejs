import { Like } from 'typeorm'
import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
import { Activity } from '../entity/Activity'
import { Staff } from '../entity/Staff'

let router = new Router()
let activityRepository = AppDataSource.getRepository(Activity)
let staffRepository = AppDataSource.getRepository(Staff)
//活动创建
router.post('/activitycreat', async (ctx) => {
    let body = ctx.request.body
    console.log(body)
    let activityData={...body}
    let staff = await staffRepository.findOne({
        where: {
            id: body.staffId
        }
    })
    console.log(staff)
    activityData.staff = staff;
    let activity=new Activity(activityData)
    let res = await activityRepository.save(activity)
    ctx.body = {
        code: 1,
        msg: '添加成功',
        data: res
    }
})

export const activityRoutes = router.routes();