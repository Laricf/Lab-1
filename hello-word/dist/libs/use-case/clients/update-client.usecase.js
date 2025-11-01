"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientUseCase = void 0;
class UpdateClientUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(id, data) {
        return this.repo.update(id, data);
    }
}
exports.UpdateClientUseCase = UpdateClientUseCase;
