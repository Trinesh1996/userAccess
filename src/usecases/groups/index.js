// CRUD Usecases
require("../../../config/di")
import addNewGroup from "./addGroup"
import getGroups from "./getGroups"
import deleteGroup from "./deleteGroup"
import modifyGroup from "./modifyGroup"

var serviceLocator = require("../../lib/service_locator")

var database = serviceLocator.get("postgreSQL").GroupService()



var addGroup = addNewGroup({ database })
var retrieveGroups = getGroups({database})
var deleteGroups = deleteGroup({database})
var updateGroup = modifyGroup({database})

const GroupService = Object.freeze({
    addGroup,
    retrieveGroups
    ,deleteGroups
    ,updateGroup

})

export default GroupService
export { addGroup, retrieveGroups , deleteGroups, updateGroup}