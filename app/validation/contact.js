const joi = require('joi');
module.exports = {
    newContact: {
        first_name: joi.string().required(),
        last_name: joi.string().required(),
        middle_name: joi.string().optional(),
        gender: joi.string().valid(['male', 'female']).optional(),
        organization: joi.string().optional(),
        title: joi.string().optional(),
        dob: joi.date().optional()
    },

    newContactEmail: {
        first_name: joi.string().required(),
        last_name: joi.string().required(),
        email: joi.string().required(),
        middle_name: joi.string().optional(),
        gender: joi.string().valid(['male', 'female']).optional(),
        organization: joi.string().optional(),
        title: joi.string().optional(),
        dob: joi.date().optional()
    }
}