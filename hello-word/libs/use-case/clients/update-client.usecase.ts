import { ClientsRepository } from '../../infra/clients/clients.repository';
import { Client } from '../../domain/clients/client.entity';

export class UpdateClientUseCase {
  constructor(private repo: ClientsRepository) {}

  execute(id: number, data: Partial<Client>): Client | null {
    return this.repo.update(id, data);
  }
}
