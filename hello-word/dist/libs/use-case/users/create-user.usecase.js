"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(name, email, role) {
        return this.repo.create({ name, email, role });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
