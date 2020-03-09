export default function updateGroup ({ database })
{
    async function updateGroupById (group_name, id)
    {
        var groups = await database.updateGroupById (group_name, id)
        return groups
    }

    async function updateGroupName (newName, oldName)
    {
        var groups = await database.updateGroupByGroupName(newName, oldName)
        return groups
    }

    return Object.freeze({
        updateGroupById 
        ,updateGroupName
    })
}