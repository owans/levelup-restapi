const orm = require('../orm'); 

const contactEmailModel = orm.Model.extend({
    tableName: 'contact_emails',
    hasTimestamps: true,
    contact: function () {
        return this.belongsTo('Contact');
    }
});

module.exports = orm.model('ContactEmail', contactEmailModel);