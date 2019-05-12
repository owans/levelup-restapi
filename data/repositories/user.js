const Repository = require('./repository');
const model = require('../models/user');

module.exports = class UserRepository extends Repository {
    constructor() {
        super(model);
    }

    findByEmail(email) {
        return this.model.query(function (qb) {
            qb.where('email', email)
        }).fetch({
            require: true
        });
    }
}