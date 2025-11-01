import { Client } from '../../domain/clients/client.entity';

export class ClientsRepository {
  private clients: Client[] = [];
  private currentId = 1;

  create(data: Omit<Client, 'id'>): Client {
    const client = new Client(
      this.currentId++,
      data.name,
      data.cpf,
      data.email,
      data.phone,
    );
    this.clients.push(client);
    return client;
  }

  findAll(): Client[] {
    return this.clients;
  }

  findById(id: number): Client | undefined {
    return this.clients.find(c => c.id === id);
  }

  update(id: number, data: Partial<Client>): Client | null {
    const client = this.findById(id);
    if (!client) return null;
    Object.assign(client, data);
    return client;
  }

  delete(id: number): boolean {
    const index = this.clients.findIndex(c => c.id === id);
    if (index === -1) return false;
    this.clients.splice(index, 1);
    return true;
  }
}
