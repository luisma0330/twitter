const User = require('./../services/userService')

class userView{
    static createUser(payload){
        if(payload === null){
            return {error: `payload no existe`}
        }
    }
}

module.exports = userView