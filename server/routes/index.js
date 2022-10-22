const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const commRouter = require('./reviewsRouter')
const exurRouter = require('./exursionRouter')
const cityRouter = require('./cityRouter')
const orderRouter = require('./orderRouter')

router.use('/user', userRouter)
router.use('/review', commRouter)
router.use('/exursion', exurRouter)
router.use('/city', cityRouter)
router.use('/order', orderRouter)

module.exports = router
