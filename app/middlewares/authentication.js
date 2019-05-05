const JWT = require('../utils/jwt');
const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

function getToken(tokenString) {
    const parts = tokenString.split(' ');
    if (parts.length > 2) throw new Error('An invalid authorization token was provided');
    const token = parts[1];
    return token;
}

function handleVerificationError(error, res) {
    let code;
    let message;
    console.log(error);

    if (error instanceof TokenExpiredError) {
        code = 401;
        message = 'Access denied. Security token has expired, please re-authenticate';
    } else if (error instanceof JsonWebTokenError) {
        code = 400;
        message = 'Access denied. Invalid security token. Token might be malformed';
    } else {
        code = 400;
        message = error.message;
    }

    res.status(code);
    res.json({
        status: 'error',
        message
    });
}

module.exports = function auth(options) {
    return async function (req, res, next) {
        const authorization = req.headers.authorization
            ? req.headers.authorization
            : false;

        if (!authorization) {
            res.status(401);
            res.json({
                status: 'error',
                message: 'Access Denied. No security token was provided in the request'
            });
            return;
        } else {
            try {
                const token = getToken(authorization);
                const decodedToken = await JWT.verify(token);
                req.userID = decodedToken.id;
                next();
            } catch (error) {
                handleVerificationError(error, res);
            }
        }
    }
}