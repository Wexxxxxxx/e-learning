const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    audio: {
        type: {
            link: String,
            name: String,
        },
        required: true
    }
}, {timestamps: true})

module.exports = module.exports = mongoose.model("words", WordSchema);