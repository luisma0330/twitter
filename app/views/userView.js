const UserService = require('./../services/userService')
const User = require('./../services/userService')

class userView{
    static createUser(payload){
        if(payload === null){
            return {error: `payload no existe`}
        }else if(typeof payload.id === "number" && typeof payload.username === "string" && typeof payload.name === "string"){
            return UserService.create(payload.id, payload.username, payload.name)
        }else{
            return {error: 'necesitan tener un valor válido'}
        }
    }
}

module.exports = userView