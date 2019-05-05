const joi = require('joi');

const joiOptions = {
    abortEarly: false,
    allowUnknown: true,
    skipFunctions: true,
    escapeHtml: true
}

function formatError(error, location) {
    return error.details.map(err => {
        return  {
            location,
            parameter: err.context.key,
            message: err.message
        };
    });
}

module.exports = function requestValidator (schema, location = 'body') {
    return function (req, res, next) {
        const allowedLocations = ['body', 'params', 'query'];
        // Assert that location is valid
        if (allowedLocations.indexOf(location) === -1) {
            res.status(500);
            res.json({ message: `Invalid location for request validation. Allowed locations are ${allowedLocations.toString()}` });
            return;
        }

        const obj = req[location];
        joi.validate(obj, schema, joiOptions, function (error, value) {
            if (error) {
                res.status(422);
                res.json({
                    message: 'Invalid request parameters',
                    errors: formatError(error, location)
                });
                return;
            }
            req[location] = value;
            next();
        });
    }
}