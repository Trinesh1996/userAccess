'use strict';

const serviceLocator = require("../src/lib/service_locator")

serviceLocator.register("mongodb", function ()
{
    return require("mongodb")
})

serviceLocator.register("userDatabaseService", function ()
{
    var { establishedDatabaseConnection } = require("../src/database/mongo/index")
    var queries = require("../src/database/mongo/queries")({ establishedDatabaseConnection })
    return queries
})

serviceLocator.register("postgreSQL", function ()
{
    var { userManagement, roleManagement, organisationManagement} = require("../src/database/postgre")
    return  Object.freeze({
        memberService: () => userManagement,
        groupService: () => roleManagement,
        organaisationQueries: () => organisationManagement
    })
})


module.exports = serviceLocator;