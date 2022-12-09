const mongoose = require('mongoose');

const BlockChainSchema = new mongoose.Schema({
    "symbol": {                
        type: String,
        unique: true
    },     
    "name": {                  
        type: String,
        unique: true
    },     
    "marketCapUsd": {           
        type: String,
        unique: true
    },     
    "priceUsd": {               
        type: String,
        unique: true
}       
})


module.exports = mongoose.model('CryptoData', BlockChainSchema)