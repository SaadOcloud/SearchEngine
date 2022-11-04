const express = require('express')
const router = express.Router()

const { 
    userList,
    createUser
} = require('../controllers/userController')

const { validationHandler } = require('../middleware/validateMiddleware')


router.route('/').get(userList).post(createUser)

module.exports = router