require("../config/di")
require("dotenv").config()

var fs = require("fs")
var _ = require("lodash")

// USECASE
const userUsecase = require("../src/usecases/users")
// MOCK DATA
const fakeDocument = JSON.parse(fs.readFileSync("./test/mockdata/fakeUserDocument.json"))

describe("database tests for user use case", function () {

   var update_test_id = 189
  
   it ("add new user to pg database", async function () 
   {
      var trinesh = fakeDocument[0]
      var sohan = fakeDocument[1]
      var chetty = fakeDocument[2]

      userUsecase.addUser(trinesh)
      .then(res=> res)
      .catch(err => console.log(err))

      userUsecase.addUser(sohan)
      .then(res=> res)
      .catch(err => console.log(err))

      userUsecase.addUser(chetty)
      .then(res=> res)
      .catch(err => console.log(err))

   })
   it ("get all users sorted ascending", async function ()
   {
        await userUsecase.retrieveUsers.getAllUsersSortedAsc()
        .then (function (res) {
            return res
        })
        .catch(function (err) {
           console.log(err) 
        })
   })
   it ("get all users sorted descending", async function ()
   {
        await userUsecase.retrieveUsers.getAllUsersSortedDesc()
        .then (function (res) {
            return res
        })
        .catch(function (err) {
           console.log(err) 
        })
   })
   it ("get all users sorted by created recently", async function ()
   {
        await userUsecase.retrieveUsers.getAllUsersSortedByCreatedRecently()
        .then (function (res) {
            return res
        })
        .catch(function (err) {
           console.log(err) 
        })
   })
   it ("get all users sorted by created last", async function ()
   {
        await userUsecase.retrieveUsers.getAllUsersSortedByCreatedLast()
        .then (function (res) {
            return res
        })
        .catch(function (err) {
           console.log(err) 
        })
   })

   it ("gets users by name", async function () {
      
      await userUsecase.retrieveUsers.getUserByName("Sohan")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by id", async function () {
      
      await userUsecase.retrieveUsers.getUserById(205)
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by surname", async function () {
      
      await userUsecase.retrieveUsers.getUserBySurname("Chetty")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by name and surname", async function () {
      
      await userUsecase.retrieveUsers.getUserByNameAndSurname("Stacy", "Crown")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by email address", async function () {
      
      await userUsecase.retrieveUsers.getUserByEmailAddress("chetty@gmail.com")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by name, surname and email address", async function () {
      
      await userUsecase.retrieveUsers.getUserByNameSurnameAndEmailAddress("Trinesh", "Chetty", "trinesh@gmail.com")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by street address", async function () {
      
      await userUsecase.retrieveUsers.getUserByStreetAddress("19 De Wet Street, Boston, Bellville")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by city", async function () {
      
      await userUsecase.retrieveUsers.getUserByCity("cape town")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by country", async function () {
      
      await userUsecase.retrieveUsers.getUserByCountry("South Africa")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users by city and country", async function () {
      
      await userUsecase.retrieveUsers.getUserByCityAndCountry("cape town", "South Africa")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   it ("gets users createdBy", async function () {
      
      await userUsecase.retrieveUsers.getUserCreatedBy("admin")
      .then(function (res)
      {
         return res
      })
      .catch(function (err) {
         return err
      })
   })

   // it ("delete all users", async function () {
      
   //    await userUsecase.deleteUser.deleteAllUsers()
   //    .then(function (res)
   //    {
   //       return res
   //    })
   //    .catch(function (err) {
   //       return err
   //    })
   // })

   // it ("delete users by id", async function () {
      
   //    await userUsecase.deleteUser.deleteUserById(15)
   //    .then(function (res)
   //    {
   //       return res
   //    })
   //    .catch(function (err) {
   //       return err
   //    })
   // })

   // Updates

   it ("update name of users by id", async function () {

      await userUsecase.updateUser.updateUserName("Stacy", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update surname of users by id", async function () {

      await userUsecase.updateUser.updateUserSurname("Crown", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update email of users by id", async function () {

      await userUsecase.updateUser.updateUserEmail("stacycrown@gmail.com", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update password of users by id", async function () {

      await userUsecase.updateUser.updateUserPassword("Gs50012", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update contact_no_1 of users by id", async function () {

      await userUsecase.updateUser.updateUserContactNumberOne("+988 776 667", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update contact_no_2 of users by id", async function () {

      await userUsecase.updateUser.updateUserContactNumberTwo("+998 768 788", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update street_address of users by id", async function () {

      await userUsecase.updateUser.updateUserStreet("21 Josephine street, New York, New York", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update suburbs of users by id", async function () {

      await userUsecase.updateUser.updateUsersSuburb("Downtown", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update city of users by id", async function () {

      await userUsecase.updateUser.updateUsersCity("New York City", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update postal_code of users by id", async function () {

      await userUsecase.updateUser.updateUsersPostalCode("976654", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update country of users by id", async function () {

      await userUsecase.updateUser.updateUsersCountry("USA", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
   it ("update currency of users by id", async function () {

      await userUsecase.updateUser.updateUsersCurrency("dollar", update_test_id)
      .then (function (res) {
         return res
      })
      .catch(function (err) {
         return err
      })
   })
})