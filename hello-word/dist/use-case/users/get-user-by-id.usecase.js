"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdUseCase = void 0;
class GetUserByIdUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(id) {
        return this.repo.findById(id);
    }
}
exports.GetUserByIdUseCase = GetUserByIdUseCase;
