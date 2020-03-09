var _ = require("lodash")

export default function makeMockDatabase () {
    const map = new Map()
    return Object.freeze({
        insertNewUser: async item => map.set(item.id, item)
        
       ,getUsers: async () => Array.from(map.values())
       ,findByUser_Name: async function (user_name) 
       {
           var users = Array.from(map.values())
            for (let user of users)
            {
                if (user["user_name"] == user_name)
                {
                    return user
                }
            
            }
       }
    })
}