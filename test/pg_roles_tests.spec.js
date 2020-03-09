require("../config/di")
require("dotenv").config()

var fs = require("fs")
var _ = require("lodash")


// USECASE
const rolesUsecase = require("../src/usecases/roles")
// MOCK DATA
const fakeDocument = JSON.parse(fs.readFileSync("./test/mockdata/fakeRoleDoc.json"))
// service_locator
const service_locator = require("../src/lib/service_locator")
// DEPENDENCIES - Database
var userManagement = service_locator.get("postgreSQL").roleService()


describe("database tests for roles use case ", function () {
  
   it ("add new role to pg database", async function () 
   {
       var roles = fakeDocument[0]
       rolesUsecase.addRole(roles)
       .then(res=> console.log(res))
       .catch(err => console.log(err))
   })

   it ("get all roles", async function ()
   {
        await rolesUsecase.retrieveRoles.getAllRoles()
        .then (function (res) {
            return res
        })
        .catch(function (err) {
           console.log(err) 
        })
   })

   it ("get roles by id", async function ()
   {
        await rolesUsecase.retrieveRoles.getAllRolesByRoleId(3)
        .then (function (res) {
            return res
        })
        .catch(function (err) {
           console.log(err) 
        })
   })

   it ("get roles by name", async function ()
   {
        await rolesUsecase.retrieveRoles.getAllRolesByRoleName("admin")
        .then (function (res) {
            return res
        })
        .catch(function (err) {
           console.log(err) 
        })
   })

   // it ("deletes all roles", async function ()
   // {
   //      await rolesUsecase.deleteRoles.deleteAllRoles()
   //      .then (function (res) {
   //          return res
   //      })
   //      .catch(function (err) {
   //         console.log(err) 
   //      })
   // })

   // it ("deletes role by id", async function ()
   // {
   //    await rolesUsecase.deleteRoles.deleteAllRoleById(83)
   //    .then (function (res) {
   //          return res
   //    })
   //    .catch(function (err) {
   //       console.log(err) 
   //    })
   // })

   // it ("update role by id", async function ()
   // {
   //    await rolesUsecase.updateRole.updateRoleById("agent", 83)
   //    .then (function (res) {
   //          return res
   //    })
   //    .catch(function (err) {
   //       console.log(err) 
   //    })
   // })

   it ("update role by role_name", async function ()
   {
      await rolesUsecase.updateRole.updateRoleByName("agent", "admin")
      .then (function (res) {
            return res
      })
      .catch(function (err) {
         console.log(err) 
      })
   })
})