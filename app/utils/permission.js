class PermissionError extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = {
    canAccess: (userID, resourceID) => {
        if (userID !== parseInt(resourceID)) {
            throw new PermissionError('Permission denied. You do not have the correct permissions to access this resource');
        }
    },
    PermissionError: PermissionError
}