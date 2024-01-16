import Router from 'koa-router'
import { AppDataSource } from '../config/data-source'
let router = new Router()
//获取仓库
let emergencyResponseRepository = AppDataSource.getRepository('EmergencyResponse')

export const emergencyResponseRoutes = router.routes();