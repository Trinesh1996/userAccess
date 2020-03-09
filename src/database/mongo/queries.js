module.exports = function databaseService ({establishedDatabaseConnection})
{
    // Collections
    async function getAllUsers () {
      
        const db = await establishedDatabaseConnection()
        const testCollection = db.collection("users")

        testCollection.findOne({}, function (err, res) {
            if (!err) {
                return res
            }
            else {
                return err
            }
        })
    }
    async function insertNewUser (newDocument)
    {
        const db = await establishedDatabaseConnection()
        const testCollection = db.collection("users")

        testCollection.insertOne(newDocument, function (err, res) {
            if (err)
            {
                return err
            }
            else
            {
                return res
            }
        })
    }
    
    return Object.freeze({
        insertNewUser,
        getAllUsers
        // ,getUserById
        // ,getUserByName
        // ,getUserBySurname
        // ,getUserByEmail
        // ,getUserByRole
        // ,deleteUserById
        // ,deleteUserByName
        // ,deleteUserByEmail
        // ,deleteUserBySurname
        // ,deleteAllUsersFromSystem
        // ,deleteUsersByRole
        // ,groupUsersByRole
        // ,groupUsersByName
        // ,groupUsersByCountry
        // ,groupUsersByCity
        // ,groupUsersBySuburb
    })
}