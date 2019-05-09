module.exports = class ModelNotFound extends Error {
    constructor(message) {
        super(message);
    }
}