const axios = require('axios')
const blockChainModel = require('../models/blockModel')



const getCrypto = async function (req, res) {
    try {

        const api = {
            method: "get",
            url: "https://api.coincap.io/v2/assets",
            headers: { Authorization: "Bearer fb5859e2-2958-4fcc-a476-7f26719a885d" }
        }

        let result = await axios(api)
        let data = result.data.data
        let filteredData = data.sort((a, b) => { a.changePercent24Hr - b.changePercent24Hr })
        await blockChainModel.deleteMany()
        const finalData = await blockChainModel.create(filteredData)
        let finalResult = await blockChainModel.find().select({ __v: 0, _id: 0 })
        res.status(200).send({ status: true, data: finalResult })
    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }

}


module.exports.getCrypto = getCrypto