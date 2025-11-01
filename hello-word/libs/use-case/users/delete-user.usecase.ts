import { UsersRepository } from '../../infra/users/users.repository';

export class DeleteUserUseCase {
  constructor(private repo: UsersRepository) {}

  execute(id: number): boolean {
    return this.repo.delete(id);
  }
}
