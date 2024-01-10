import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
import { AppointmentService } from '../entity/AppointmentService'
import { General } from '../entity/General'
let router = new Router()
let appointmentserviceRepository = AppDataSource.getRepository(AppointmentService)
let generalRepository = AppDataSource.getRepository(General)
//预约服务创建
router.post('/appointmentServiceCreation', async (ctx) => {
    let body = ctx.request.body
    console.log(body)
    let appointmentserviceData = { ...body }
    let appointmentservice = await generalRepository.findOne({
        where: {
            id: body.id
        }
    })
    appointmentserviceData.general = appointmentservice
    let appointmentservice1 = new AppointmentService(appointmentserviceData)
    let res = await appointmentserviceRepository.save(appointmentservice1)
    ctx.body = {
        code: 1,
        msg: '添加成功',
        data: res
    }
})

//获取用户预约服务列表
router.get('/getAListOfPersonalAppointmentServices', async (ctx) => {
    const id = ctx.query.id
    const res = await appointmentserviceRepository.findAndCount({
        where: {
            general: { id: id }
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

// 取消预约
router.post('/cancelReservationService', async (ctx) => {
    let body = ctx.request.body;
    try {
        // 根据ID查找预约服务
        let appointment = await appointmentserviceRepository.findOne({
            where: { id: body.id }
        });

        if (appointment) {
            // 更新预约状态为已取消
            appointment.status = '已取消';
            await appointmentserviceRepository.save(appointment);
            ctx.body = {
                code: 1,
                msg: '取消成功',
                data: appointment
            };
        } else {
            ctx.body = {
                code: 0,
                msg: '未找到对应预约'
            };
        }
    } catch (error) {
        ctx.body = {
            code: 0,
            msg: '操作失败',
            error: error.message
        };
    }
});

router.get('/getappointmentList', async (ctx) => {
    let query = ctx.query
    console.log(query)
    let res = await appointmentserviceRepository.findAndCount({
    })
    console.log(res)
    ctx.body = {
        code: 1,
        msg:'获取成功',
        data: {
            list: res[0],
            total: res[1]
        }
    }
})


export const appointmentserviceRoutes = router.routes();