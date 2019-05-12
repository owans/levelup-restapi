const routes = require('express').Router();
const validate = require('../middlewares/validation');
const auth = require('../middlewares/authentication');
const userSchema = require('../validation/user')
const controller = require('../controllers/accounts');

routes.post('/', validate(userSchema.signupSchema), controller.create);
routes.post('/login', validate(userSchema.authenticationSchema), controller.authenticate);
routes.get('/:id/contacts', auth(), controller.getContacts);
routes.put("/:id/update", auth(), controller.updateContacts);
routes.delete("/:id/delete", auth(), controller.deleteContacts)

module.exports = routes;