"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientUseCase = void 0;
class CreateClientUseCase {
    constructor(repo) {
        this.repo = repo;
    }
    execute(name, cpf, email, phone) {
        return this.repo.create({ name, cpf, email, phone });
    }
}
exports.CreateClientUseCase = CreateClientUseCase;
