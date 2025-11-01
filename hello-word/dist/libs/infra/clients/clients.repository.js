"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRepository = void 0;
const client_entity_1 = require("../../domain/clients/client.entity");
class ClientsRepository {
    constructor() {
        this.clients = [];
        this.currentId = 1;
    }
    create(data) {
        const client = new client_entity_1.Client(this.currentId++, data.name, data.cpf, data.email, data.phone);
        this.clients.push(client);
        return client;
    }
    findAll() {
        return this.clients;
    }
    findById(id) {
        return this.clients.find(c => c.id === id);
    }
    update(id, data) {
        const client = this.findById(id);
        if (!client)
            return null;
        Object.assign(client, data);
        return client;
    }
    delete(id) {
        const index = this.clients.findIndex(c => c.id === id);
        if (index === -1)
            return false;
        this.clients.splice(index, 1);
        return true;
    }
}
exports.ClientsRepository = ClientsRepository;
