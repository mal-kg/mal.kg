const express = require('express');
const multer = require('multer');
const path = require('path');
const {nanoid} = require('nanoid');
const config = require('../config');
const Animal = require("../models/Animal");



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const animals = await Animal.find();
        res.send(animals);
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500);
    }
});



router.get('/:id', async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        if(!animal){
            res.status(404).send({error: 'not found'});
        }else{
            res.send(animal);
        }
    } catch (e) {
        res.sendStatus(500);
    }
});


router.post('/',upload.single('image'), async (req, res) => {
    try {
        console.log(req.body)
        const animalData = {
            title: req.body.title,
            description: req.body.description,
            vaccine:req.body.vaccine,
            weight:req.body.weight,
            age:req.body.age,
            passport:req.body.passport,
            price:req.body.price,
        };

        if(req.file){
            animalData.image =  'uploads/' + req.file.filename;
        }

        const animal = new Animal(animalData);
        await animal.save();
        res.send(animal);

    } catch (error) {
        res.status(400).send(error);
    }
});



module.exports = router;