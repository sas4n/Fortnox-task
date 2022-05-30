//import database from './shipping_model.js'
const {database} = require('./shipping_model.js')
let isDatabasePrepared = false


const prepareDatabase = async(req, res, next) => {
    try {
        if(!isDatabasePrepared){
            const response= await database.createDatabase()
            /*console.log('after database.createdatabase')
            console.log(response)*/
            const responseAftercreateShippingTable = await database.createShippingTable()
            await database.createMultiplierTable()
            await database.insertMultipliers()
            isDatabasePrepared = true
        }
        next() 
    }catch(err){
        console.log( err)
        next(err)
    }
    
}

const getShippingLists = async() => {
    return await database.getShippingLists()
}

const saveShippingLists = async (...data) => {
    return await database.insertDataIntoShippings(data)
}

module.exports = {saveShippingLists,getShippingLists,prepareDatabase}

