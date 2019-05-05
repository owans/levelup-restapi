const Repository = require('./repository');
const model = require('../models/contactPhone');

module.exports = class ContactPhoneRepository extends Repository {
    constructor() {
        super(model);
    }
}