"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const user_entity_1 = require("../../domain/users/user.entity");
class UsersRepository {
    constructor() {
        this.users = [];
        this.currentId = 1;
    }
    create(userData) {
        const user = new user_entity_1.User(this.currentId++, userData.name, userData.email, userData.role);
        this.users.push(user);
        return user;
    }
    findAll() {
        return this.users;
    }
    findById(id) {
        return this.users.find(u => u.id === id);
    }
    update(id, userData) {
        const user = this.findById(id);
        if (!user)
            return null;
        Object.assign(user, userData);
        return user;
    }
    delete(id) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1)
            return false;
        this.users.splice(index, 1);
        return true;
    }
}
exports.UsersRepository = UsersRepository;
