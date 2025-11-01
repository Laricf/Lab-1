import { ClientsRepository } from '../../infra/clients/clients.repository';

export class DeleteClientUseCase {
  constructor(private repo: ClientsRepository) {}

  execute(id: number): boolean {
    return this.repo.delete(id);
  }
}
