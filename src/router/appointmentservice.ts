import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
import { AppointmentService } from '../entity/AppointmentService'
import { General } from '../entity/General'
import { Feedback } from '../entity/Feedback'
import { relative } from 'path'
import { Staff } from '../entity/Staff'
let router = new Router()
let appointmentserviceRepository = AppDataSource.getRepository(AppointmentService)
let generalRepository = AppDataSource.getRepository(General)
let feedbackRepository = AppDataSource.getRepository(Feedback)
//预约服务创建
router.post('/appointmentServiceCreation', async (ctx) => {
    let body = ctx.request.body
    console.log(body, '~~~~~~~~~~~~~')
    let appointmentserviceData = { ...body }
    let appointmentservice = await generalRepository.findOne({
        where: {
            id: body.generalId
        }
    })
    console.log(appointmentservice)
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
        relations: ['general', 'staff','feedback']
    })
    const listWithFeedbackStatus = res[0].map(appointment => {
        return {
            ...appointment,
            hasFeedback: !!appointment.feedback
        };
    });
    ctx.body = {
        code: 1,
        msg: '获取成功',
        data: {
            list: listWithFeedbackStatus,
            total: res[1]
        }
    }
})

// 取消预约
router.post('/cancelReservationService', async (ctx) => {
    let body = ctx.request.body;
    console.log(body)
    try {
        // 根据ID查找预约服务
        let appointment = await appointmentserviceRepository.findOne({
            where: { id: body.id }
        });

        if (appointment) {
            // 更新预约状态为已取消
            appointment.status = '已取消';
            appointment.cancellationReason=body.reason
            await appointmentserviceRepository.save(appointment);
            ctx.body = {
                code: 1,
                msg: '取消成功',
                //data: appointment
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

//获取审核列表
router.get('/getappointmentList', async (ctx) => {
    let query = ctx.query
    console.log(query)
    let res = await appointmentserviceRepository.findAndCount({
        relations: ['general']
    })
    //console.log(res)
    ctx.body = {
        code: 1,
        msg: '获取成功',
        data: {
            list: res[0],
            total: res[1]
        }
    }
})

//更新服务
router.post('/auditServices', async (ctx) => {
    let body = ctx.request.body;
    //console.log(body)
    let service = new AppointmentService(body)
    let res = await appointmentserviceRepository.save(service)
    ctx.body = {
        code: 1,
        msg: '更新成功',
        data: res
    }
})

//工作人员查看自己的服务列表
router.get('/staffViewServiceList', async (ctx) => {
    const id = ctx.query.id
    const res = await appointmentserviceRepository.findAndCount({
        where: {
            staff: { id: id }
        },
        relations: ['general','feedback']
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
//关闭服务
router.post('/closeService', async (ctx) => {
    let body = ctx.request.body
    //console.log(body)
    let res = await appointmentserviceRepository.delete(body.id)
    ctx.body = {
        code: 1,
        msg: '删除成功',
        data: res
    }
})



//评价预约服务
router.post('/evaluationServices', async (ctx) => {
     let body = ctx.request.body;
    // 掐断的数据
    // const body = {
    //     staffId: 1,
    //     appointmentServiceId: 1,
    //     feedback: {
    //         rating: '5',
    //         comment: '服务非常棒！'
    //     }
    // }
    console.log(body)
    // 构建用户
    const staff = new Staff({
        id: body.staffId
    })
    // 构建服务
    const appointmentService = new AppointmentService({
        id: body.appointmentServiceId,
        status:"已评价"
    })

    // 构建评价
    const feedback = new Feedback(body.feedback)
    feedback.staff = staff
    // 服务和评价关联
    appointmentService.feedback = feedback

    const res = await feedbackRepository.save(feedback)
    // console.log(res)
    appointmentService.feedback = res
    //console.log(appointmentService)
    const res1 = await appointmentserviceRepository.save(appointmentService)
    console.log(res1, '~~~~~~~~~~')
    ctx.body = {
        code: 1,
        msg: '评价成功',
        data: res
    };
});

//获取全部信息
router.get('/getAllInformation',async (ctx)=>{
    let query = ctx.query
    let res = await appointmentserviceRepository.findAndCount({
        where:{
            id:query.id
        },
        relations:['general','staff','feedback']
    })
    ctx.body={
        code:1,
        msg:'获取成功',
        data:{
            list: res[0],
            total: res[1]
        }
    }
})





export const appointmentserviceRoutes = router.routes();