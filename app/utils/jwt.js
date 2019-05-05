const JWT = require('jsonwebtoken');
const config = require('../../config')();

function makeTokenPayload (user) {
    const userObject = user.toJSON();
    return {
        id: userObject.id
    }
}

module.exports = {
    /**
     * Verify a JWT string
     * @param {string} token
     * @returns {object}
     */
    verify: (token) => {
        return new Promise((resolve, reject) => {
            JWT.verify(token, config.SECRET_KEY, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    },
    /**
     * Creates a JWT token from a user
     * @params {object} user
     * @returns {string}
     */
    createTokenFromUser: (user) => {
        return new Promise((resolve, reject) => {
            const payload = makeTokenPayload(user);
            JWT.sign(payload, config.SECRET_KEY, {
                expiresIn: config.JWT_TTL
            }, (error, token) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(token)
                }
            });
        });
    }
}