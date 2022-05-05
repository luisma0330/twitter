const User = require('./../services/userService')

class userView{
    static createUser(payload){
        if(payload === null){
            return {error: `payload no existe`}
        }else{
            return {error: 'necesitan tener un valor válido'}
        }
    }
}

module.exports = userView