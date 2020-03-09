import { member_group_entity } from "../../entities"

export default function makeAddGroup ({ database })
{
    return async function addNewGroup (group)
    {
        var newGroup = member_group_entity.validation(group)
        return database.insertNewGroup
        (
            {
                group: newGroup.get_group()
            }
        )
    }
}