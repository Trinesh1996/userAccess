module.exports = async function controllers (users)
{

    return async function addUsers(req, res, next) {
        try 
        {
            const userInfo = req.body;
            await users(userInfo)
            res.json(userInfo)
            res.end()
        }
        catch(err)
        {
            console.log(err)
            res.send(err)
            res.end()
        }
        next()
    }
}