"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClientUseCase = void 0;
class DeleteClientUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(id) {
        return this.repo.delete(id);
    }
}
exports.DeleteClientUseCase = DeleteClientUseCase;
