import { addOrganisation } from "../../usecases/organisation"

import addOrganisationHandler from "./addOrganisation"

var addOrganisationService = addOrganisationHandler(addOrganisation)

var organisationControl = Object.freeze({
    addOrganisationService
})

export default organisationControl
export { addOrganisationService }