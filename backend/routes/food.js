const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').get((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const timeToCook = req.body.timeToCook;
    const ingrediants = req.body.ingrediants;
    const amount = req.body.amount;
    const date = Date.parse(req.body.date);

    const newFood = new Food({
        username,
        description,
        timeToCook,
        ingrediants,
        amount,
        date
    });

    newFood.save()
        .then(() => res.json('Food added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;