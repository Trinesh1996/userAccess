'use strict'
require('dotenv').config();

const { Pool } = require("pg")


// SSL connection
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
  useSSL = true
}

// connect to db
const connectionString = process.env.POSTGRES_HOST

const pool = new Pool({
  connectionString,
  ssl: useSSL
})

pool.on("error", (err, client) => 
{
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})


var db = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
}

// create tables

var organisationTableSchema = 
`
create table IF NOT EXISTS organisation (
  id serial not null primary key,
  organisation_name text not null,
  organisation_email text not null UNIQUE,
  organisation_password text not null

);
`

db.query(organisationTableSchema, null, function (err, res) {
  if (err)
  {
    console.log(err)
  }
  else
  {
    console.log("created table organisation")
  }
})

import memberService from "./member_queries"
import organisationService from "./organisation_queries"

var memberManagement = memberService({db})
var organisationManagement = organisationService({db})


export { memberManagement , organisationManagement }