var fs = require("fs")
var Organisation = Organisation || {}

Organisation.entity = function entity (organisationSchema) {

    // validate fields
    var self = this
    // member variables validation
    self.organisationSchema =  organisationSchema.$schemas.organisation_schema.properties

    // general member information
    self._id = self.organisationSchema["_id"]
    self.organisation_name = self.organisationSchema["organisation_name"]
    self.organisation_email = self.organisationSchema["organisation_email"]
    self.organisation_password = self.organisationSchema["organisation_password"]
}


Organisation.entity.prototype.validation = function validation ({
    organisation_name
    ,organisation_email
    ,organisation_password
})
{
    var self = this

    // invalid type
    // Basic organisation information

    if (typeof organisation_name != self.organisation_name["type"] || organisation_name == "")
    {
        throw Error("organisation_name is an invalid type. organisation_name should be a string value")
    }

    if (typeof organisation_email != self.organisation_email["type"] || organisation_email == "")
    {
        throw Error("organisation_email is an invalid type. organisation_email should be a string value")
    }
    if (typeof organisation_password != self.organisation_password["type"] || organisation_password == "")
    {
        throw Error("organisation password is an invalid type. value/s organisation password should be an ecrypted string")
    }
 
    else
    {
        return Object.freeze({
            organisation_name: () => organisation_name,
            organisation_email: () => organisation_email,
            organisation_password: () => organisation_password
        })
    }
}

export default Organisation.entity
