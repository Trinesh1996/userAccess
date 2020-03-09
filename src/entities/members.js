var fs = require("fs")
var members = members || {}

members.entity = function entity (memberSchema) {

    // validate fields
    var self = this
    // member variables validation
    self.memberSchema =  memberSchema.$schemas.member_schema.properties

    // general member information
    self._id = self.memberSchema["_id"]
    self.member_name = self.memberSchema["member_name"]
    self.member_surname = self.memberSchema["member_surname"]
    self.member_email = self.memberSchema["member_email"]
    self.password = self.memberSchema["password"]
}


members.entity.prototype.validation = function validation ({
    member_name
    ,member_surname
    ,member_email
    ,password
})
{
    var self = this
   
    // invalid type
    // Basic member information
  
    if (typeof member_name != self.member_name["type"] || member_name == "")
    {
        throw Error("member_name is an invalid type. member_name should be a string value")
    }

    if (typeof member_surname != self.member_surname["type"] || member_surname == "")
    {
        throw Error("member_surname is an invalid type. member_surname should be a string value")
    }

    if (typeof member_email != self.member_email["type"] || member_email == "")
    {
        throw Error("member_email is an invalid type. member_email should be a string value")
    }
    if (typeof password != self.password["type"] || password == "")
    {
        throw Error("member password is an invalid type. value/s member password should be an ecrypted string")
    }
 
    else
    {
        return Object.freeze({
            get_member_name: () => member_name,
            get_member_surname: () => member_surname,
            get_member_email: () => member_email,
            get_member_password: () => password
        })
    }
}

export default members.entity
