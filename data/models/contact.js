const orm = require('../orm'); 

const contactModel = orm.Model.extend({
    tableName: 'contacts',
    hasTimestamps: true,
    user: function() {
        return this.belongsTo('User');
    },
    phoneNumbers: function() {
        return this.hasMany('ContactPhone');
    },
    emailAddresses: function() {
        return this.hasMany('ContactEmail');
    }
});

module.exports = orm.model('Contact', contactModel);