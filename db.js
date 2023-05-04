const { error } = require("console");
const mongoose = require ("mongoose"); 

var mongoURL = 'mongodb+srv://dilshanpu:dila123@packagebooking.gjfadzy.mongodb.net/package-booking'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error',()=>{

console.log('mongo error')


})


connection.on('conncted',()=>{

    console.log('mongo ok')
    
    
    })
module.exports = mongoose