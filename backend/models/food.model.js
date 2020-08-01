const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    username: { type: String, required: true},
    description: { type: String, required: true },
    timeToCook: { type: Number, required: true },
    ingrediants: [String],
    amount: [{number: {type: Number, required: true}, unit: {type: String, required: true}}],
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

//Compile model from schema
const Food = mongoose.model('Food', foodSchema);

module.exports = Food;