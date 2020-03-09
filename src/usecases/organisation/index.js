// CRUD Usecases
require("../../../config/di")
import addNewOrganisation from "./addOrganisation"
import { organisationManagement } from "../../database/postgre/index"

var addOrganisation = addNewOrganisation(organisationManagement)
const organisationService = Object.freeze({
    addOrganisation
})

export default organisationService
export { addOrganisation }