'use strict'

require('dotenv').config();


var serviceLocator = require("./src/lib/service_locator")

var express = require("express")
var bodyParser = require("body-parser")

const config = require("./config/config")()
var app = express()

var controller = require("./src/controller/organisation/index").addOrganisationService

var expressCallback = require("./express_callback")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.post("/addUser", userService.addUser)
// app.get("/getuser", userService.getAllUsers)
// app.get("/getuser/:id", userService.getUserById)
// app.get("/getuser/:name", userService.getUserByName)
// app.get("/getuser/:surname", userService.getUserBySurname)
// app.get("/getuser/:email", userService.getUserByEmail)
// app.get("/getuser/:name/:surname", userService.getUserByNameAndSurname)
// app.get("/getuser/:name/:surname/:email", userService.getUserByNameSurnameAndEmail)
// app.get("/getuser/:role", userService.getUserByRole)
// app.delete("/deleteuser", userService.deleteAllUsers)
// app.delete("/deleteuser/:id", userService.deleteUserByName)
// app.put("/updateuser/:id", userService.updateUser)



// add organisation route
app.post("/api/v1/organisation/addOrganisation", expressCallback(controller))


// app.get("/getUsers/:id", getUsers)
app.listen(3000, () => {console.log("server listening on PORT: ", 3000)})

