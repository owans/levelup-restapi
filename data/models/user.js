const orm = require('../orm'); 
const bcrypt = require('bcrypt-node');

const userModel = orm.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    hidden: ['password'],
    initialize: function() {
        this.on('creating', function() {
            const salt = bcrypt.genSaltSync(11);
            const hash = bcrypt.hashSync(this.get('password'), salt);
            this.set('password', hash);
        });
    },
    contacts: function () {
        return this.hasMany('Contact');
    },
    /**
     * Verify password
     * @param {*} password 
     * @returns {boolean}
     */
    verifyPassword: function(password) {
        const hash = this.get('password');
        return bcrypt.compareSync(password, hash);
    }
});

module.exports = orm.model('User', userModel);