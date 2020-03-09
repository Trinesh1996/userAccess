// var fs = require("fs")
// var Groups = Groups || {}

// Groups.entity = function entity (groupSchema) {

//     // validate fields
//     var self = this
//     // user variables validation
//     self.groupSchema =  groupSchema.$schemas.groups.properties
//     // general user information
//     self._id = self.groupSchema["_id"]
//     self. = self.groupSchema["group"]
// }

// Groups.entity.prototype.validation = function validation ({ group })
// {
//     var self = this  
//     if (typeof group != self.group["type"] || group == "")
//     {
//         throw Error("Group is an invalid type. Group should be a string value")
//     }
//     else
//     {
//         return Object.freeze({
//             get_Group: () => group
//         })
//     }
// }

// export default Groups.entity