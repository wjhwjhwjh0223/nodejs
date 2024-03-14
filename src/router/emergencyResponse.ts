import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
import { EmergencyResponse } from '../entity/EmergencyResponse'
import { General } from '../entity/General'
import { Staff } from '../entity/Staff'
import { StaffEmergency } from '../entity/StaffEmergency'
import dayjs from 'dayjs'
import { query } from 'express'
let router = new Router()

//获取仓库
let emergencyResponseRepository = AppDataSource.getRepository('EmergencyResponse')
let staffRepository = AppDataSource.getRepository('Staff')
let generalRepository = AppDataSource.getRepository('General')
let staffEmergencyRepository = AppDataSource.getRepository('StaffEmergency')

//获取这个事件的工作人员信息
router.get('/emergencyStaff',async(ctx)=>{
    let body = ctx.query
    //console.log(body)
    const res = await staffEmergencyRepository.find({
        where: {
            emergencyResponse: {
                id: body.id
            }
        },
        relations:['staff']
    })
    ctx.body = {
        code: 1,
        msg: '获取成功',
        data: {
           res
        }
    }
})

//获取全部紧急事件
router.get('/emergencyResponseList',async(ctx)=>{
    let query = ctx.query
    let res = await emergencyResponseRepository.findAndCount(
        {
            relations:['general']
        }
    )
    ctx.body = {
        code: 1,
        msg: '获取成功',
        data: {
            list: res[0],
            total: res[1]
        }
    }
})

//用户更新状态为已完成
router.post('/completeEmergencyEvents',async(ctx)=>{
    const body = ctx.request.body
        let emergencyResponse = await emergencyResponseRepository.findOne({
        where:{
            id:body.id
        }
    })
    emergencyResponse.status = '已完成'
    emergencyResponse.flow=emergencyResponse.flow+`事件ID:${emergencyResponse.id} 事件类型:${emergencyResponse.type}已解决/ 时间: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}.`
    const res = await emergencyResponseRepository.save(emergencyResponse)
    ctx.body = {
        code: 1,
        msg: '更新成功',
        data: res
    };
})


//工作人员前往紧急时间地点
router.post('/toEmergencyStaffLocation', async (ctx) => {
    const body = ctx.request.body
    //console.log(body)
    // 从数据库中查询相关的Staff对象
    // const staffsId = await staffEmergencyRepository.findByIds(body.emergencyResponse.id) as Staff[]
        const staffsId = await staffEmergencyRepository.find({
            where: {
                emergencyResponse: {
                    id: body.emergencyResponse.id
                }
            },
            relations:['staff']
        })
    //console.log(staffsId)
    //创建工作人员姓名的字符串列表
    const staffNames = staffsId.map(StaffEmergency => StaffEmergency.staff.name).join(', ');
    //console.log(staffNames)
    // emergencyResponseRepository.findOneBy(body.emergencyResponse.id)
    let emergencyResponse = await emergencyResponseRepository.findOne({
        where:{
            id:body.emergencyResponse.id
        }
    })
    //console.log(emergencyResponse)
    emergencyResponse.status = '已前往',
    emergencyResponse.flow = emergencyResponse.flow + `${staffNames}正在前往紧急地点${emergencyResponse.location}/ 时间: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}.`
    
    const res = await emergencyResponseRepository.save(emergencyResponse)
    //console.log(res)
    ctx.body = {
        code: 1,
        msg: '更新成功',
        data: res
    };
})

//工作人员查看自己的紧急服务
router.get('/emergencyStaffList', async (ctx) => {
    let query = ctx.query
    let res = await staffEmergencyRepository.findAndCount({
        where: {
            staff: {
                id: query.staffId
            }
        },
        relations: ['emergencyResponse']
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

//创建紧急事件
router.post('/addEmergency', async (ctx) => {
    try {
        let body = ctx.request.body;
        //console.log(body);
        // 得到老人对象
        const general = await generalRepository.findOneBy({ id: body.generalId });
        if (!general) {
            ctx.status = 404;
            ctx.body = { success: false, message: 'General not found' };
            return;
        }
        // 从数据库中查询相关的Staff对象
        const staffs = await staffRepository.findByIds(body.staffIds) as Staff[];
        // 创建工作人员姓名的字符串列表
        const staffNames = staffs.map(staff => staff.name).join(', ');
        // 构建描述字符串
        let flow = `${general.name}创建了紧急服务,选择了工作人员:${staffNames}/ 时间: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}.`;
        // 创建紧急服务
        const emergencyResponse = new EmergencyResponse({
            details: body.details,
            type: body.type,
            location: body.location,
            general: general,
            flow: flow
        });
        // 保存紧急服务
        await emergencyResponseRepository.save(emergencyResponse);
        // 为每个Staff创建一个StaffEmergency
        let staffEmergencys = staffs.map(staff => {
            const staffEmergency = new StaffEmergency();
            staffEmergency.emergencyResponse = emergencyResponse;
            staffEmergency.staff = staff;
            return staffEmergency;
        });
        // 保存StaffEmergency对象
        const res = await staffEmergencyRepository.save(staffEmergencys);
        ctx.body = {
            code: 1,
            msg: '创建成功',
            data: res
        };
    } catch (error) {
        //console.log(error);
        ctx.status = 500;
        ctx.body = { success: false, message: 'Internal Server Error' };
    }
});

//查看自己的紧急求助服务
router.get('/emergencyList/generalId', async (ctx) => {
    let body = ctx.query;
    //console.log(body)
    let res = await emergencyResponseRepository.findAndCount({
        where: {
            general: {
                id: body.userId
            }
        },
        relations: ['general']
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

//通过id查紧急服务
router.get('/emergencyDetail',async(ctx)=>{
    let body = ctx.query;
    let res = await emergencyResponseRepository.findOne({
        where:{
            id:body.id
        },
        relations:['general']
    })
    ctx.body = {
        code: 1,
        msg: '获取成功',
        data: res
    }
})

export const emergencyResponseRoutes = router.routes();