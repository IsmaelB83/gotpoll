const path = require('path');
const { Personaje, Poll } = require('../models/index');

const ctrl = {};

ctrl.index = async (req, res) => {
    try {
        let results = await Personaje.find().exec();
        res.status(200).render('index', {results} );
    } catch (error) {
        console.log(error);
    }
};

ctrl.create = async (req, res) => {
    try {
        let poll = new Poll(req.body);
        poll.votos = [];
        for (var key in req.body) {
            if (key !== 'name' && key !== 'email') {
                poll.votos.push( { name: [key], voto: req.body[key][req.body[key].length-1] } );
            }
        }
        let results = await poll.save();
        console.log(results);
        res.status(200).render('success', { results } );
    } catch (error) {
        console.log(error);
    }
};

ctrl.read = async (req, res) => {
    try {
        let personajes = await Personaje.find().exec();
        let poll = await Poll.find({_id: req.params.id}).exec();
        res.status(200).render('edit', {personajes, poll} );
    } catch (error) {
        console.log(error);
    }
};

ctrl.update = async (req, res) => {
    try {
        let poll = new Poll(req.body);
        poll._id = req.params.id;
        poll.votos = [];
        for (var key in req.body) {
            if (key !== 'name' && key !== 'email') {
                poll.votos.push( { name: [key], voto: req.body[key][req.body[key].length-1] } );
            }
        }
        let results = await Poll.updateOne({_id: req.params.id}, poll);
        results = await Poll.find({_id: req.params.id}).exec();
        console.log(results);
        res.status(200).render('success', { results } );
    } catch (error) {
        console.log(error);
    }
};

ctrl.recuento = async (req, res) => {
    try {
        let votos = await Poll.aggregate(
            [ { "$unwind":    "$votos" },  
              { "$group":   { "_id":   { "name": "$votos.name", "opcion": "$votos.voto" },  
                              "count": {"$sum": 1} 
                            }
              },
              {"$sort": { "_id": 1} }
            ]
        );
        console.log(votos);
        let personajes = await Personaje.find().exec();
        res.status(200).render('recuento', {personajes, votos} );
    } catch (error) {
        console.log(error);
    }
};

module.exports = ctrl;