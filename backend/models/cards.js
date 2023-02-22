'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    phone: {
        type: String,
        required: true,
    },
    rates: {
        type: Object,
        required: true,
    },
    define: {
        type: String,
        required: true,
    },
    subway: {
        type: String,
        required: true,
    },
    text_address: {
        type: String,
        required: true,
    },
    publication_time: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;