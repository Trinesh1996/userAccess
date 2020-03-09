export default function makeUpdateMembers ( {database} )
{
    async function updateMemberName (newVal, id)
    {
        const Members = await database.updateMembersName(newVal, id)
        return Members
    }
    async function updateMemberSurname (newVal, id)
    {
        const Members = await database.updateMembersSurname(newVal, id)
        return Members
    }
    async function updateMemberEmail (newVal, id)
    {
        const Members = await database.updateMembersEmail(newVal, id)
        return Members
    }
    async function updateMemberPassword (newVal, id)
    {
        const Members = await database.updateMembersPassword(newVal, id)
        return Members
    }

    return Object.freeze({
        updateMemberName
        ,updateMemberSurname
        ,updateMemberEmail
        ,updateMemberPassword
    })
}