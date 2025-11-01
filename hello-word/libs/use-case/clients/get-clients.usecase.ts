import { ClientsRepository } from '../../infra/clients/clients.repository';
import { Client } from '../../domain/clients/client.entity';

export class GetClientsUseCase {
  constructor(private repo: ClientsRepository) {}

  execute(): Client[] {
    return this.repo.findAll();
  }
}
