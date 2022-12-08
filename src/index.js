const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route.js');
const { json } = require('express');

mongoose.set('strictQuery', true);



const app = express(); 

app.use(express.json())


mongoose.connect("mongodb+srv://viHaAn:vihaan@cluster0.tznueha.mongodb.net/crypto", {
    useNewUrlParser: true 
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);
app.use("/*",function(req,res){

    res.status(400).send({status:false ,message:"Wrong path! "})
}
)

app.listen( 3000, function () {
    console.log('Express app running on port ' + (3000))
});

