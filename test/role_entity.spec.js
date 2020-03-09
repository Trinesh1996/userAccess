
var expect = require("chai").expect
var assert = require("chai").assert
var fs = require("fs")

// Role entity
import { user_role_entity } from "../src/entities"

// Mock data
var fakeRole = require("./mockdata/fakeRole")

describe("Unit tests for role entity", async function () {

       it("user roles should be a string", function () {
        const role = fakeRole({role: null})
        
        expect(function () {
            return user_role_entity.validation(role)
        }).to.throw("role is an invalid type. role should be a string value")
   
    })
})