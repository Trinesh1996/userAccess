// require("../config/di")
// require("dotenv").config()

// var fs = require("fs")
// var _ = require("lodash")

// import { addUser } from "../src/usecases/users"

// const fakeDocument = JSON.parse(fs.readFileSync("./test/mockdata/fakeUserDocument.json"))
// const fakeDatabase = require("./mockdatabase/fakeDatastore")


// describe("use case tests", function () {
  
//     it("creates a user agent", async function () {
//         const database = fakeDatabase.default()
        
//         var userCreate = addUser({database})

//         var addUserByName = function  (name) 
//         {
//             _.forEach(fakeDocument, async function (data)
//             {
//                 if (data.user_name === name)
//                 {
//                     await userCreate(data)
//                 }
//             })
//         }
//         addUserByName("Trinesh")
//         // var getUserByName = getUserByName("Trinesh")

//         var user = await database.getUsers(res => res).catch(err => err)

//         // assert.deepEqual(getUserByName("Trinesh"), user)
//     })
       
// })