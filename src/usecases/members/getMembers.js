export default function makeGetAllmembers ( { database } )
{
    async function getmemberById (id)
    {
        const members = await database.getmemberById(id)
        return members
    }
    return Object.freeze({
        getmemberById
       
    })
}