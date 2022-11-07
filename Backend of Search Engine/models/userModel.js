const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
})

const User = new mongoose.model('userScema', userSchema)

const validItem = (user) => {
    const schema = {
        username: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(user, schema)
}

module.exports.User = User
module.exports.validate = validItem