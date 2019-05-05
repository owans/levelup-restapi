const { PermissionError } = require('./permission');
/**
 * Handles HTTP error
 * @param {Error} error 
 * @param {object} res 
 * @returns {void}
 */
const handleHTTPError = (error, res) => {
    console.log(error.message, error);
    let code;
    let message;
    
    if (error instanceof PermissionError) {
        code = 403;
    } else {
        code = 400
    }

    message = error.message;

    res.status(code);
    res.json({
        status: 'error',
        message
    });
}

module.exports = handleHTTPError;