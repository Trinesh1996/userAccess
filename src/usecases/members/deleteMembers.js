export default function makeDeletemembers ( {database} )
{
    async function deleteAllmembers ()
    {
        const members = await database.deleteAllmembers()
        return members
    }

    async function deletememberById (id)
    {
        const members = await database.deletememberById(id)
        return members
    }

    return Object.freeze({
        deleteAllmembers,
        deletememberById
    })
}