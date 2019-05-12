const routes = require('express').Router();
const validate = require('../middlewares/validation');
const auth = require('../middlewares/authentication');
const controller = require('../controllers/contact');
const schemas = require('../validation/contact');

routes.post('/', auth(), validate(schemas.newContact), controller.create);
routes.get('/:id', controller.read);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

module.exports = routes;