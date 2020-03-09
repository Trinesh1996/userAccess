import { organisation_entity } from "../../entities"

export default function makeAddOrganisation (database)
{
    return async function addNewOrganisation (org)
    {
        var newOrg = organisation_entity.validation(org)
     
        return database.insertNewOrganisation({
            organisation_name: newOrg.organisation_name(),
            organisation_email: newOrg.organisation_email(),
            organisation_password: newOrg.organisation_password()
        })
    }
}