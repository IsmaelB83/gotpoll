const express = require('express');
const router = express.Router();

const pollCtrl = require('../controllers/poll');

module.exports = app => {
    
    router.get('/', pollCtrl.index);
    router.get('/poll/recuento/', pollCtrl.recuento);
    router.post('/poll/', pollCtrl.create);
    router.get('/poll/:id', pollCtrl.read);
    router.post('/poll/:id', pollCtrl.update);

    app.use(router);
}