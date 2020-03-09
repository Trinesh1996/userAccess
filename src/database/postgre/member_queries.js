var _ = require("lodash")

export default function ( { db } )
{

    // INSERT
    async function insertNewMember (member)
    {
        var member_credentials = {
            name: member.member_name,
            surname: member_surname,
            member_email: member_email,
            password: member.password
        }
        const query =
        {
            // give the query a unique name
            name: 'insert-member',
            text: `INSERT INTO members ( name, surname, email, password ) values ($1, $2, $3, $4)`,
            values: [

                member_credentials.name, member_credentials.surname,
                member_credentials.member_email, member_credentials.password,
            ],
        }

        var getMembers = await db.query("SELECT * from members").rows
        _.forEach(getMembers, function (data) {
            if (member_credentials.member_email === data.email) {
                console.log("member EXISTS")
            }
            else
            {
                db.query(query, function (err, res)
                {
                    if (err)
                    {
                        return err
                    }
                    else
                    {
                        return res.rows
                    }
                })
            }
        })
    }

    // GETS
    async function getMembers ()
    {

    }

   
    async function getMemberById (id)
    {
        const query =
        {
            name: 'get-member-by-id',
            text: `SELECT * from members where id = $1`,
            values: [id],
        }
        await db.query(query, function (err, res)
        {
            if (err)
            {
                return err
            }
            else
            {
                return res.rows
            }
        })
    }

    // UPDATES
    async function updateMembersName (newVal, id)
    {
        const query =
        {
            name: 'update-member-name',
            text: `UPDATE members SET name = $1 where id = $2`,
            values: [newVal, id],
        }
        await db.query(query, function (err, res)
        {
            if (err)
            {
                return err
            }
            else
            {
                return res.rows
            }
        })
    }

    async function updateMembersSurname(newVal, id)
    {
        const query =
        {
            name: 'update-member-surname',
            text: `UPDATE members SET surname = $1 where id = $2`,
            values: [newVal, id],
        }
        await db.query(query, function (err, res)
        {
            if (err)
            {
                return err
            }
            else
            {
                return res.rows
            }
        })
    }
    async function updateMembersEmail (newVal, id)
    {
        const query =
        {
            name: 'update-member-email',
            text: `UPDATE members SET email = $1 where id = $2`,
            values: [newVal, id],
        }
        await db.query(query, function (err, res)
        {
            if (err)
            {
                return err
            }
            else
            {
                return res.rows
            }
        })
    }
    async function updateMembersPassword (newVal, id)
    {
        const query =
        {
            name: 'update-member-password',
            text: `UPDATE members SET password = $1 where id = $2`,
            values: [newVal, id],
        }
        await db.query(query, function (err, res)
        {
            if (err)
            {
                return err
            }
            else
            {
                return res.rows
            }
        })
    }

    // DELETES
    async function deleteAllMembers ()
    {
        await db.query("DELETE from members", function (err, res) {
            if (err)
            {
                return err
            }
            else
            {
                return res.rows
            }
        })
    }

    async function deleteMemberById  (id)
    {
        const query =
        {
            name: 'delete-member-id',
            text: `DELETE from members where id = $1`,
            values: [id],
        }
        await db.query(query, function (err, res)
        {
            if (err)
            {
                return err
            }
            else
            {
                return res.rows
            }
        })
    }

   
 

    return Object.freeze({
        insertNewMember
        ,getMemberById
        ,deleteAllMembers
        ,updateMembersName
        ,updateMembersSurname
        ,updateMembersEmail
        ,updateMembersPassword
        ,deleteMemberById
    })
}