export default function deleteGroups ({ database })
{
    async function deleteAllGroups ()
    {
        const groups = await database.deleteAllGroups()
        return groups
    }

    async function deleteAllGroupById (id)
    {
        const groups = await database.deletGroupById(id)
        return groups
    }

    return Object.freeze({
        deleteAllGroups
        ,deleteAllGroupById
    })
}