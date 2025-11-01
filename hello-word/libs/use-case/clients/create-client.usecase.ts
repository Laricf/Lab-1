import { ClientsRepository } from '../../infra/clients/clients.repository';
import { Client } from '../../domain/clients/client.entity';

export class CreateClientUseCase {
  constructor(private repo: ClientsRepository) {}

  execute(name: string, cpf: string, email: string, phone: string): Client {
    return this.repo.create({ name, cpf, email, phone });
  }
}
