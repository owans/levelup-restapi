const express = require('express');
const contactRouter = require('../app/routes/contact');
const accountRouter = require('../app/routes/accounts');

module.exports = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/contacts', contactRouter);
    app.use('/accounts', accountRouter);
    return app;
}