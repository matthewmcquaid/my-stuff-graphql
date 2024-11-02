const UserList = [
    {
        id: 1,
        name: "Matthew McQuaid",
        username: "matthewmcquaid",
        age: 50,
        role: "ADMIN",
        children: [
            {
                id: 2,
                name: "Maxwell McQuaid",
                username: "max",
                age: 14,
                role: "BOY"
            },
            {
                id: 5,
                name: "Bruce",
                username: "furry",
                age: 5,
                role: "DOG"
            }
        ]
    },
    {
        id: 2,
        name: "Maxwell McQuaid",
        username: "max",
        age: 14,
        role: "BOY",
        children: [
            {
                id: 5,
                name: "Bruce",
                username: "furry",
                age: 5,
                role: "DOG"
            }
        ]
    },
    {
        id: 3,
        name: "Emily Qualey",
        username: "qualey",
        age: 43,
        role: "HUMAN",
        children: [
            {
                id: 4,
                name: "Hula Hoop",
                username: "hula",
                age: 8,
                role: "DOG"
            },
            {
                id: 6,
                name: "Digit",
                username: "kittykat",
                age: 6,
                role: "CAT"
            }
        ]
    },
    {
        id: 4,
        name: "Hula Hoop",
        username: "hula",
        age: 8,
        role: "DOG"
    },
    {
        id: 5,
        name: "Bruce",
        username: "furry",
        age: 5,
        role: "DOG"
    },
    {
        id: 6,
        name: "Digit",
        username: "kittykat",
        age: 6,
        role: "CAT"
    }
]

const ItemList = [
    {
        id: 1,
        name: "Dog Toy",
        description: "Turkey plush toy",
        recycle: false,
        cost: 5.00
    },
    {
        id: 2,
        name: "Fart Piano",
        description: "A Piano that makes fart noises",
        recycle: false,
        cost: 20.00
    },
    {
        id: 3,
        name: "Cooking Book",
        description: "How to make Chinese Food",
        recycle: false,
        cost: 35.00
    },
    {
        id: 4,
        name: "Tennis Ball",
        description: "Large red and yellow tennis ball",
        recycle: true,
        cost: 0.01
    },
    {
        id: 5,
        name: "Record Player",
        description: "Black record player",
        recycle: true,
        cost: 250.99
    }
]

module.exports = {
    UserList,
    ItemList
};