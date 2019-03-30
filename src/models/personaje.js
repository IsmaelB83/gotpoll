const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonajeSchema = new Schema({
    name: { type: String },
    url: { type: String },
    img: { type: String },
    key: { type: String }
});

module.exports = mongoose.model('Personaje', PersonajeSchema);