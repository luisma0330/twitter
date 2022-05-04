const UserService = require('./../../app/services/userService')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "luisma0330", "Luis")

        expect(user.id).toBe(1)
        expect(user.username).toBe("luisma0330")
        expect(user.name).toBe("Luis")
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Gell all user data in a list", () => {
        const user = UserService.create(1, "luisma0330", "Luis")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)  
        expect(userInfoList[1]).toBe("luisma0330")
        expect(userInfoList[2]).toBe("Luis")
        expect(userInfoList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "luisma0330", "Luis")
        UserService.updateUserUsername(user, "luisma")
        expect(user.username).toBe("luisma")
    })

    test("4. Given a list of users give me the list of username", () => {
        const user1 = UserService.create(1, "luisma0330", "Luis")
        const user2 = UserService.create(2, "luisma", "Manuel")
        const user3 = UserService.create(3, "luisma2", "Carlos")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("luisma0330")
        expect(usernames).toContain("luisma")
        expect(usernames).toContain("luisma2")
    })

})