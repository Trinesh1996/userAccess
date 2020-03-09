module.exports = function makeExpressCallback (controller)
{
    return function (req, res, next) {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            method: req.method,
            path: req.path,
            headers: {
                "Content-Type": req.get("Content-Type"),
                'User-Agent': req.get('User-Agent')
            }
        }
        controller(httpRequest)
        .then(httpResponse => {
            res.type("json")
            res.status(httpResponse.statusCode).send(httpResponse.body)
        })
        .catch(e => res.status(500).send({error: "Error occured"}))
    }
}