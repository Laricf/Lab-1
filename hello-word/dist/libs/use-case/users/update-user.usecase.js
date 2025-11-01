"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(id, data) {
        return this.repo.update(id, data);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
