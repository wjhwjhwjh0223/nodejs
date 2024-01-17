import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
import { EmergencyResponse } from '../entity/EmergencyResponse'
let router = new Router()
//获取仓库
let emergencyResponseRepository = AppDataSource.getRepository('EmergencyResponse')
let staffRepository=AppDataSource.getRepository('Staff')
let generalRepository=AppDataSource.getRepository('General')

//创建紧急事件
router.post('/addEmergency', async (ctx) => {
    try {
        const { details, type, location, staffIds, generalId } = ctx.request.body;

        // 查找所有相关的 Staff 实体
        const staffEntities = await staffRepository.findByIds(staffIds);

        // 查找 General 实体
        const generalEntity = await generalRepository.findOne({ where: { id: generalId }});

        // 创建 EmergencyResponse 实体
        const emergencyResponse = new EmergencyResponse({
            details,
            type,
            location,
            staff: staffEntities,
            general: generalEntity
        });

        // 保存 EmergencyResponse 实体到数据库
        await emergencyResponseRepository.save(emergencyResponse);

        ctx.status = 200;
        ctx.body = { success: true, message: '紧急响应添加成功' };
    } catch (error) {
        ctx.status = 500;
        ctx.body = { success: false, message: '内部服务器错误' };
    }
});

export const emergencyResponseRoutes = router.routes();