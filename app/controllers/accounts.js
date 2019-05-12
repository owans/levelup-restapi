const handleError = require('../utils/handle-error');
const JWT = require('../utils/jwt');
const permissions = require('../utils/permission');
const UserRepository = require('../../data/repositories/user');
const ContactRepository = require('../../data/repositories/contact');

const repository = new UserRepository();
const contactRepository = new ContactRepository();

module.exports = {
    authenticate: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await repository.findByEmail(email);
            if (user.verifyPassword(password)) {
                const token = await JWT.createTokenFromUser(user);
                res.json({
                    user,
                    token
                });
            } else {
                res.status(401);
                res.json({
                    message: 'Authenticated failed. Invalid email address or password'
                });
            }
        } catch (error) {
            handleError(error, res);
        }
    },

    create: async (req, res) => {
        try {
            const attrs = req.body;
            console.log(attrs);
            const user = await repository.create(attrs);
            res.json(user);
        } catch (error) {
            handleError(error, res);
        }
    },

    getContacts: async (req, res) => {
        try {
            permissions.canAccess(req, res, req.params.id);
            const contacts = await contactRepository.getUserContacts(req.params.id);
            res.json(contacts);
        } catch (error) {
            handleError(error, res);
        }
    },

    updateContacts: async (req, res) =>{
        try{
            permissions.canAccess(req, res, req.params.id);
            const updateContacts = await contactRepository.updateUserContacts(req.params.id);
            res.json(contacts);
        }catch(error){
            handleError(error, res);
        }
    },

    deleteContacts: async (req, res) =>{
        try{
            permissions.canAccess(req, res, req.params.id);
            const deleteContacts = await contactRepository.deleteUserContacts(req.params.id);
        }catch(error){
            handleError(error, res);
        }
    }

}