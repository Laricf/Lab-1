import { ClientsRepository } from '../../infra/clients/clients.repository';
import { Client } from '../../domain/clients/client.entity';

export class GetClientByIdUseCase {
  constructor(private repo: ClientsRepository) {}

  execute(id: number): Client | undefined {
    return this.repo.findById(id);
  }
}
