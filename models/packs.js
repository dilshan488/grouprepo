const mongoose = require("mongoose");

const packagesSchema = mongoose.Schema({


    name: {

        type: String,
        required: true
    },
    noofdays: {

        type: Number,
        required: true
    },
    imageurls: [],
    currentbookings: [],
    type: {

        type: String,
        required: true
    },

    description: {


        type: String,
        required: true
    },
    Numberofflight:{
        type:Number,
        required:true
    }

}, {
    timestamps: true,
})

const packsModel = mongoose.model('packages', packagesSchema)

module.exports = packsModel