const routes = require('express').Router();
const validate = require('../middlewares/validation');
const auth = require('../middlewares/authentication');
const controller = require('../controllers/contact');
const schemas = require('../validation/contact');

routes.post('/', auth(), validate(schemas.newContact), controller.create);
routes.get('/:id', auth(), controller.read);
routes.put('/:id', auth(), controller.update);
routes.delete('/:id', auth(), controller.delete);

module.exports = routes;