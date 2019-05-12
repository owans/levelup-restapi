const Repository = require('./repository');
const model = require('../models/contactEmail');

module.exports = class ContactEmailRepository extends Repository {
    constructor() {
        super(model);
    }
}