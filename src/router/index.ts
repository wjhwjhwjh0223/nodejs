import Router from 'koa-router'
import { fileRoutes } from './file'
import { generalRoutes } from './general';
import { staffRoutes } from './staff'
import {userRoutes} from './user'
import {activityRoutes} from './activity'
import {appointmentserviceRoutes} from './appointmentservice'
import {emergencyResponseRoutes} from './emergencyResponse'
const router = new Router()
router.use(staffRoutes)
router.use(generalRoutes)
router.use(fileRoutes)
router.use(userRoutes)
router.use(activityRoutes)
router.use(appointmentserviceRoutes)
router.use(emergencyResponseRoutes)
export {
  router
}