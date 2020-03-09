export default function makeAddGroup ({ database })
{
    async function getAllGroups ()
    {
        const groups = await database.getAllGroups()
        return groups
    }

    async function getAllGroupsByGroupId (id)
    {
        const groups = await database.getGroupsById(id)
        return groups
    }

    async function getAllGroupsByGroupName (name)
    {
        const groups = await database.getGroupsByName(name)
        return groups
    }

    return Object.freeze({
        getAllGroups
        ,getAllGroupsByGroupId
        ,getAllGroupsByGroupName
    })
     
}