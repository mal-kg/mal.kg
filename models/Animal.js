const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const AnimalSchema = new mongoose.Schema({
    title:{
        type: String,
        required: 'Название обязательно',
    },
    description:{
        type: String,
        required: 'Описание обязательно',
    },
    datetime:{
        type: Date,
        default: Date.now,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    image: {
        type: String,
        // required: 'Фото обязательно',
    },
    vaccine:{
        type: String,
        required: 'обязательно',
    },
    weight:{
        type: String,
        required: 'обязательно',
    },
    age:{
        type: String,
        required: 'обязательно',
    },
    passport:{
        type: String,
        required: 'обязательно',
    },
    price:{
        type:String,
        required: 'обязательно',
    }

});

AnimalSchema.plugin(idValidator);
const Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;