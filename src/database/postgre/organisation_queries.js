var _ = require("lodash")

export default function ( { db } )
{

    // INSERT
    async function insertNewOrganisation(organisation)
    {
        var organisation_credentials = {
            organisation_name: organisation.organisation_name,
            organisation_email: organisation.organisation_email,
            organisation_password: organisation.organisation_password
        }

        const query =
        {
            // give the query a unique name
            name: 'insert-organisation',
            text: `INSERT INTO organisation ( organisation_name, organisation_email, organisation_password ) values ($1, $2, $3)`,
            values: [

                organisation_credentials.organisation_name, organisation_credentials.organisation_email, 
                organisation_credentials.organisation_password
            ],
        }
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

        // var getOrganisation = await db.query("SELECT * from organisation").rows
        // _.forEach(getOrganisation, function (data) {
        //     if (organisation_credentials.organisation_email === data.organisation_email) {
        //         console.log("You already belong to thise organisation")
        //         return "You already belong to thise organisation"
        //     }
        //     else
        //     {
                
        //     }
        // })
    }
    return Object.freeze({
        insertNewOrganisation
    })
}