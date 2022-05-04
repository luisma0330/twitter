const UserService = require('./../../app/services/userService')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "luisma0330", "Luis")

        expect(user.id).toBe(1)
        expect(user.username).toBe("luisma0330")
        expect(user.name).toBe("Luis")
        expect(user.bio).not.toBeUndefined()
    })

})