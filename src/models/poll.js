const mongoose = require('mongoose');
const { Schema } = mongoose;

const PollSchema = new Schema({
    name: { type: String },
    email: { type: String },
    votos: [{ name: { type: String },
              voto: { type: String }
            }],
    timestamp: { type: String, default: Date.now() },
});

module.exports = mongoose.model('Poll', PollSchema);