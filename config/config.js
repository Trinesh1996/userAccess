'use string'

module.exports = function ()
{
    return {
        app: {
            name: process.env.APP_NAME,
            port: process.env.APP_PORT || 3000,
            logpath: process.env.LOG_PATH
        },
        mongo: {
            host: process.env.DB_HOST,
            name: process.env.DB_NAME || "test"
        }
    }
    // Include application log levels
}