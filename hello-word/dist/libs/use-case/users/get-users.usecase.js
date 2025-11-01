"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersUseCase = void 0;
class GetUsersUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute() {
        return this.repo.findAll();
    }
}
exports.GetUsersUseCase = GetUsersUseCase;
