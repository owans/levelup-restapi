const handleError = require('../utils/handle-error');
const ContactRepository = require('../../data/repositories/contact');
const repository = new ContactRepository();

module.exports = {
    /**
     * Create contact
     */
    create: async (req, res) => {
        try {
            const attrs = req.body;

            Object.assign(attrs, {
                user_id: req.userID
            });
            
            const contact = await repository.create(attrs);
            res.json(contact);
        } catch (error) {
            handleError(error, res);
        }
    },
    /**
     * Read contact
     */
    read: async (req, res) => {
        try {
            const query = await repository.getById(req.params.id);
            const contact = query.toJSON();
            permission.canAccess(req.userID, contact.user_id);
            res.json(contact);
        } catch (error) {
            handleError(error, res);
        }
    },
    /**
     * Update contact
     */
    update: (req, res) => {
        try {
            const attrs = req.body;

            Object.assign(attrs, {
                user_id: req.userID
            });
            
            const contact = repository.update(attrs);
            res.json(contact);
        } catch (error) {
            handleError(error, res);
        }
    },
    /**
     * Delete contact
     */
    delete: (req, res) => {
        try {
            const attrs = req.body;

            Object.assign(attrs, {
                user_id: req.userID
            });
            
            const contact = repository.del(attrs);
        } catch (error) {
            handleError(error, res);
        }
    }
}