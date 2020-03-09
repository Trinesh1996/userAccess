import { member_crud_entity } from "../../entities"

export default function makeAddmember ({ database })
{
    return async function addNewmember (member)
    {
        var newmember = member_crud_entity.validation(member)
        return database.insertNewmember({
            member_name: newmember.get_member_name(),
            member_surname: newmember.get_member_surname(),
            member_email: newmember.get_member_email(),
            password: newmember.get_member_password()
        })
    }
}