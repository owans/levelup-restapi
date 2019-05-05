const joi = require('joi');
module.exports = {
    signupSchema: {
        first_name: joi.string().required(),
        last_name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    },

    authenticationSchema: {
        email: joi.string().email().required(),
        password: joi.string().required()
    }
}