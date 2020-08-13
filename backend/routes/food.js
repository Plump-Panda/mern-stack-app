const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Returns Food based on given ID
router.route('/:id').get((req,res) => {
    Food.findById(req.params.id)
    .then(() => res.json(food))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Deletes Food based on given ID
router.route('/:id').delete((req,res) => {
    Food.findByIdAndDelete(req.params.id)
    .then(() => res.json('Food deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Updates Food based on given ID
router.route('/update/:id').post((req,res) => {
    Food.findById(req.params.id)
    .then(food => {
        food.username = req.body.username;
        food.description = req.body.description;
        food.timeToCook = req.body.timeToCook;
        food.ingrediants = req.body.ingrediants;
        food.amount = req.body.amount;
        food.date = Date.parse(req.body.date);
        
        food.save()
        .then(() => res.json('Food updated succesfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//Adds given Food to database
router.route('/add').post((req,res) => {
        const username = req.body.username;
        const description = req.body.description;
        const timeToCook = req.body.timeToCook;
        const ingrediants = req.body.ingrediants;
        const amount = req.body.amount;
        const unit = req.body.units;
        const date = Date.parse(req.body.date);
        
        const food = new Food(
            {username,
            description,
            timeToCook,
            ingrediants,
            amount,
            unit,
            date}
        );
        food.save()
        .then(() => res.json('Food added succesfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    
/* Example of how Food object should be sent
{
	"username":"Name",
	"description":"no",
	"timeToCook":15,
	"ingrediants":"['Meat','Not meat']",
	"amount":[12,2],
	"units":"['lbs','lbs']",
	"date":"1/4/2020"
}
*/
module.exports = router;