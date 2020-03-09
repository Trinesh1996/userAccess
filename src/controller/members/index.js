import {addUser, retrieveUsers} from "../usecases"

import addUserControl from "./addUsers"

var makeAddUser = addUserControl(addUser)

var userController = Object.freeze({
    makeAddUser
})

export default userController
export { makeAddUser }