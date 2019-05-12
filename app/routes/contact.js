const routes = require('express').Router();
const validate = require('../middlewares/validation');
const auth = require('../middlewares/authentication');
const controller = require('../controllers/contact');
const schemas = require('../validation/contact');

routes.post('/', auth(), validate(schemas.newContact), controller.create);
routes.post('/:id/emails', auth(), validate(schemas.newContactEmail), controller.update);
routes.get('/:id/emails', auth(), controller.read);
routes.put('/:id/emails/:email_id', auth(), controller.update);
routes.delete('/:id/emails/:email_id', auth(), controller.delete);

module.exports = routes;