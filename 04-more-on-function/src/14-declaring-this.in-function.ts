interface User {
    admin: boolean
}

interface DB {
    filterUsers(filter: (this: User) => boolean): User[]
}

const db: DB = {
    filterUsers(filter: (this: User) => boolean): User[] {
        let user1 = {
            admin : true
        }

        let user2 = {
            admin : false
        }

        console.log(filter.call(user1));
        console.log(filter.call(user2));
        

        return [user1, user2]
    },
}

const admins = db.filterUsers(function (this: User) {
    return this.admin;
})

// console.log(admins);


export default {};