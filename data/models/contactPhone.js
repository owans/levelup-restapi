const orm = require('../orm'); 

const contactPhoneModel = orm.Model.extend({
    tableName: 'contact_phones',
    hasTimestamps: true,
    contact: function () {
        return this.belongsTo('Contact');
    }
});

module.exports = orm.model('ContactPhone', contactPhoneModel);