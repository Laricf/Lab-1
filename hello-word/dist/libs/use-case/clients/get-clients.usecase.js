"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientsUseCase = void 0;
class GetClientsUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute() {
        return this.repo.findAll();
    }
}
exports.GetClientsUseCase = GetClientsUseCase;
