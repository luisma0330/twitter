const User = require('../../app/models/user')

describe('Unit test for User class', () => {
    test('Create an User object', () => {
        const user = new User(1, "luisma0330", "Luis", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("luisma0330")
        expect(user.name).toBe("Luis")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})