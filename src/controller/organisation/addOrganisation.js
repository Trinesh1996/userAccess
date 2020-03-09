module.exports = function controllers (organisation)
{
    return async function addOrganisation(httpRequest) {
        try 
        {
            const orgInfo = {
                organisation_name: httpRequest.body.organisation_name,
                organisation_email: httpRequest.body.organisation_email,
                organisation_password: httpRequest.body.organisation_password
            }
            const addedOrg = await organisation(orgInfo)
            return {
                headers: 
                {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { addedOrg }
              

            }
        }
        catch(err)
        {
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 400,
                body: {
                    error: err.message
                }
            }
        }
    }
}