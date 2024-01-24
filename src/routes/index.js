import { Router } from 'express'
import readRouter from './Read/index.js'
import deleteRouter from './Delete/index.js'
import createRouter from './Create/index.js'
import updateRouter from './Update/index.js'

const router = Router()

router.use('/read', readRouter)
router.use('/delete', deleteRouter)
router.use('/create', createRouter)
router.use('/update', updateRouter)

export default router
