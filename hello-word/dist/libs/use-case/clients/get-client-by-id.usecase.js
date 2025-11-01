"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientByIdUseCase = void 0;
class GetClientByIdUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(id) {
        return this.repo.findById(id);
    }
}
exports.GetClientByIdUseCase = GetClientByIdUseCase;
