var _ = require("lodash")

export default function ( { db } )
{
    async function insertNewGroup (group)
    {
        var user_groups = {
            group: group.group
        }
        
        const query = 
        {
            name: 'insert-group',
            text: `INSERT INTO groups (group_name) values ($1)`,
            values: [user_groups.group],
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

    async function getAllGroups ()
    {
       await db.query("SELECT * from groups", function (err, res) {
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

    async function getGroupsById (id)
    {
        const query = 
        {
            name: 'get-groups-id',
            text: `SELECT * from groups where id = $1`,
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

    async function getGroupsByName (name)
    {
        const query = 
        {
            name: 'get-groups-name',
            text: `SELECT * from groups where group_name = $1`,
            values: [name],
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

    async function deleteAllGroups ()
    {
        await db.query("DELETE FROM groups", function (err, res)
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

    async function deletGroupById (id)
    {
        const query = 
        {
            name: 'delete-group-id',
            text: `DELETE FROM groups where id = $1`,
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

    async function updateGroupById (name, id)
    {
        const query = 
        {
            name: 'update-group-id',
            text: `UPDATE groups SET group_name = $1 where id = $2`,
            values: [name, id],
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

    async function updateGroupByGroupName (newName, oldName)
    {
        const query = 
        {
            name: 'update-group-name',
            text: `UPDATE groups SET group_name = $1 where group_name = $2`,
            values: [newName, oldName],
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
        insertNewgroup,
        getAllgroups,
        getGroupsById
        ,getGroupsByName
        ,deleteAllGroups
        ,deletGroupById
        ,updateGroupById
        ,updateGroupByGroupName 
    })
}
