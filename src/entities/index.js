var fs = require("fs")


// Schemas
var memberSchemas = JSON.parse(fs.readFileSync("./config/memberSchema.json"))
// var groupSchemas = JSON.parse(fs.readFileSync("./config/groupSchema.json"))
var organisationSchemas = JSON.parse(fs.readFileSync("./config/organisationSchema.json"))

// Entities
import memberEntity from "./members"
// import groupEntity from "./groups"
import organisationEntity from "./organisation"

// initialise entity
var member_crud_entity = new memberEntity(memberSchemas)
// var member_group_entity = new groupEntity(groupSchemas)
var organisation_entity = new organisationEntity(organisationSchemas)

export { member_crud_entity, organisation_entity }