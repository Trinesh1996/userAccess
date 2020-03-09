'use strict'
require('dotenv').config();
const serviceLocator = require("../../lib/service_locator")
const dbQueries = require("./queries")
const MongoClient = serviceLocator.get("mongodb").MongoClient
const dbname = process.env.DB_NAME


const client = new MongoClient.connect(`mongodb://localhost:27017/${dbname}`, { useUnifiedTopology: true, useNewUrlParser: true })

export async function establishedDatabaseConnection()
{
    return client.then(function (res)
    {
       
        return res.db(dbname)
    })
    .catch(function (err)
    {
     
        return err
    })
}

const usersService = dbQueries({ establishedDatabaseConnection })
export default usersService