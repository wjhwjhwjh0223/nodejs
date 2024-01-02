import Router from 'koa-router'
import { fileRoutes } from './file'
import { generalRoutes } from './general';
import { staffRoutes } from './staff'
import {userRoutes} from './user'
const router = new Router()
router.use(staffRoutes)
router.use(generalRoutes)
router.use(fileRoutes)
router.use(userRoutes)

export {
  router
}