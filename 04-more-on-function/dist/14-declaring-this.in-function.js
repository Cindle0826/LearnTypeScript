"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = {
    filterUsers(filter) {
        let user1 = {
            admin: true
        };
        let user2 = {
            admin: false
        };
        console.log(filter.call(user1));
        console.log(filter.call(user2));
        return [user1, user2];
    },
};
const admins = db.filterUsers(function () {
    return this.admin;
});
// console.log(admins);
exports.default = {};
