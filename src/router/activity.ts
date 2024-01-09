import { Like } from 'typeorm'
import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
import { Activity } from '../entity/Activity'
import { Staff } from '../entity/Staff'
import { ActivityGeneral } from '../entity/ActivityGeneral'
let router = new Router()
let activityRepository = AppDataSource.getRepository(Activity)
let staffRepository = AppDataSource.getRepository(Staff)
let activityGeneralRepository = AppDataSource.getRepository(ActivityGeneral)
//活动创建
router.post('/activitycreat', async (ctx) => {
    let body = ctx.request.body
    console.log(body)
    let activityData = { ...body }
    let staff = await staffRepository.findOne({
        where: {
            id: body.staffId
        },
    })
    console.log(staff)
    activityData.staff = staff;
    let activity = new Activity(activityData)
    let res = await activityRepository.save(activity)
    ctx.body = {
        code: 1,
        msg: '添加成功',
        data: res
    }
})

//获取活动列表
router.get('/getactivityList', async (ctx) => {
    let query = ctx.query
    let pagenumber = query.pagenumber || 1
    let pagesize = query.pagesize || 10
    let res = await activityRepository.findAndCount({
        relations: ['staff'],
        skip: (pagenumber - 1) * pagesize,
        take: pagesize
    })
    ctx.body = {
        code: 1,
        msg: '获取成功',
        data: {
            list: res[0],
            total: res[1]
        }
    }
})

//修改活动状态
router.post('/updateActivityStauts', async (ctx) => {
    let body = ctx.request.body
    let activity = new Activity(body)
    let res = await activityRepository.save(activity)
    ctx.body = {
        code: 1,
        msg: '更新成功',
        data: res
    }
})

//老人参与活动
router.post('/participate-activity', async (ctx) => {
    const userId = ctx.request.body.userId;
    const activityId = ctx.request.body.activityId;
    console.log(userId, activityId, '~~~~~')
    
    // 检查用户是否已经参加了活动
    const existingParticipation = await activityGeneralRepository.findOne({
        where: { 
            general: {
                id: userId
            }, 
            activity: {
                id: activityId
            } 
        }
    });
    console.log(existingParticipation)
    if (existingParticipation) {
        ctx.body = { code: 0, msg: '您已经参加了这个活动。' };
        return;
    }

    // 创建新的活动参与实例
    const participation = new ActivityGeneral();
    participation.general = userId;
    participation.activity = activityId;
    participation.num = 1; 
    // 保存参与实例
    await activityGeneralRepository.save(participation);

    ctx.body = { code: 1, msg: '活动参加成功！' };
});

//查询个人参加的活动列表
router.get('/user/activity', async (ctx) => {
    const id = ctx.query.id
    const res = await activityGeneralRepository.findAndCount({
        where: {
            general: {
                id: id
            }
        },
        relations: ['activity', 'general']
    })
    ctx.body = {
        code: 1,
        msg: '获取成功',
        data: {
            list: res[0],
            total: res[1]
        }
    }
})


export const activityRoutes = router.routes();