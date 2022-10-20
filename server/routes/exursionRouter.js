const Router = require('express')
const router = new Router()
const exursionController = require('../controllers/exursionController')
const checkRole = require("../middleware/checkRoleMiddleware");


router.post('/', checkRole("ADMIN"), exursionController.create)
router.get('/', exursionController.getAll)

router.delete('/', checkRole("ADMIN"),exursionController.deleteExur)


module.exports = router
