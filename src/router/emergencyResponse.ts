import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
import { EmergencyResponse } from '../entity/EmergencyResponse'
import { General } from '../entity/General'
import { Staff } from '../entity/Staff'
import { StaffEmergency } from '../entity/StaffEmergency'
import dayjs from 'dayjs'
let router = new Router()

//获取仓库
let emergencyResponseRepository = AppDataSource.getRepository('EmergencyResponse')
let staffRepository = AppDataSource.getRepository('Staff')
let generalRepository = AppDataSource.getRepository('General')
let staffEmergencyRepository = AppDataSource.getRepository('StaffEmergency')

//创建紧急事件
router.post('/addEmergency', async (ctx) => {
    try {
        let body = ctx.request.body;
        console.log(body);
        // 得到老人对象
        const general = await generalRepository.findOneBy({ id: body.generalId });
        if (!general) {
            ctx.status = 404;
            ctx.body = { success: false, message: 'General not found' };
            return;
        }
        // 从数据库中查询相关的Staff对象
        const staffs = await staffRepository.findByIds(body.staffIds) as Staff[];
        // 创建工作人员ID的字符串列表
        // 创建工作人员姓名的字符串列表
        const staffNames = staffs.map(staff => staff.name).join(', ');
        // 构建描述字符串
        let flow = `${general.name}创建了紧急服务，选择了工作人员:${staffNames}/ 时间: ${dayjs().format('YYYY-MM-DD HH:mm:ss')},`;
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
        console.log(error);
        ctx.status = 500;
        ctx.body = { success: false, message: 'Internal Server Error' };
    }
});

//查看自己的紧急求助服务
router.get('/emergencyList/generalId',async(ctx)=>{
    let body = ctx.query;
    console.log(body)
    let res = await emergencyResponseRepository.findAndCount({
        where:{
            general:{
                id:body.userId
            }
        },
        relations:['general']
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

export const emergencyResponseRoutes = router.routes();