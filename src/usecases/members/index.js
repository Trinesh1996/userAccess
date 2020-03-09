// CRUD Usecases
require("../../../config/di")
import addNewMember from "./addMember"
import getMembers from "./getMembers"
import deleteMembers from "./deleteMembers"
import updateMembers from "./updateMembers"


var serviceLocator = require("../../lib/service_locator")

var database = serviceLocator.get("postgreSQL").MemberService()

var addMember = addNewMember({ database })
var retrieveMembers = getMembers({ database })
var deleteMember = deleteMembers({ database })
var updateMember = updateMembers({ database })

const MemberService = Object.freeze({
    addMember,
    retrieveMembers,
    deleteMember,
    updateMember
})

export default MemberService
export { addMember, retrieveMembers, deleteMember, updateMember }